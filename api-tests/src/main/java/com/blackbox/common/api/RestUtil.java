package com.blackbox.common.api;

import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.api.client.config.ClientConfig;
import com.sun.jersey.api.client.config.DefaultClientConfig;
import com.sun.jersey.client.urlconnection.HTTPSProperties;

import javax.net.ssl.*;
import java.security.cert.X509Certificate;
import java.security.*;

public class RestUtil {
    private static String responseType = "application/json";
    private Client restClient;
    JsonParser jsonParser;
    WebResource webResource;
    ClientResponse clientResponse;
    KeyStore keyStore;
    KeyStore trustStore;
    SSLContext sslContext;
    KeyManagerFactory keyManagerFactory;
    TrustManagerFactory trustManagerFactory;

    private static final String KEYSTORE_FILE_NAME = "keystore.jks";
    private static final String TRUSTSTORE_FILE_NAME = "truststore.jks";
    private static final String KEYSTORE_PASSWORD = "";
    private static final String TRUSTSTORE_PASSWORD = "";


    // <editor-fold desc="Constructor">

    public RestUtil() {
        sslContext = null;

//        try {
//            keyManagerFactory = KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());
//            trustManagerFactory = TrustManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());
//            keyStore = KeyStore.getInstance("JKS");
//            trustStore = KeyStore.getInstance("JKS");
//
//            keyStore.load(ClassLoader.getSystemResourceAsStream(KEYSTORE_FILE_NAME), KEYSTORE_PASSWORD.toCharArray());
//            System.out.println("Keystore Aliases:" + keyStore.aliases());  // DEBUG
//            keyManagerFactory.init(keyStore, KEYSTORE_PASSWORD.toCharArray());
//            trustStore.load(ClassLoader.getSystemResourceAsStream(TRUSTSTORE_FILE_NAME), TRUSTSTORE_PASSWORD.toCharArray());
//            System.out.println("Truststore Aliases: " + trustStore.aliases());  // DEBUG
//            trustManagerFactory.init(trustStore);
//
//            sslContext = SSLContext.getInstance("TLS");
//
//            sslContext.init(keyManagerFactory.getKeyManagers(), trustManagerFactory.getTrustManagers(), null);
//        } catch(NoSuchAlgorithmException |
//                KeyStoreException |
//                IOException |
//                CertificateException |
//                UnrecoverableKeyException |
//                KeyManagementException
//                e) {
//            e.printStackTrace();
//        }

//        ClientConfig config = new DefaultClientConfig();
//        config.getProperties().put(HTTPSProperties.PROPERTY_HTTPS_PROPERTIES, new HTTPSProperties(null, sslContext));

        // Create a trust manager that does not validate certificate chains
        TrustManager[] trustAllCerts = new TrustManager[] {new X509TrustManager() {
            public java.security.cert.X509Certificate[] getAcceptedIssuers() { return null; }
            public void checkClientTrusted(X509Certificate[] certs, String authType) { }
            public void checkServerTrusted(X509Certificate[] certs, String authType) { }
        }};

        // Install the all-trusting trust manager
        try {
            sslContext = SSLContext.getInstance("TLS");
            sslContext.init(null, trustAllCerts, new java.security.SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sslContext.getSocketFactory());
        } catch (NoSuchAlgorithmException |
                KeyManagementException
                e) {
            e.printStackTrace();
        }

        ClientConfig config = new DefaultClientConfig();
        config.getProperties().put(HTTPSProperties.PROPERTY_HTTPS_PROPERTIES, new HTTPSProperties(null, sslContext));

        restClient = Client.create(config);
        jsonParser = new JsonParser();
    }

    // </editor-fold>


    // <editor-fold desc="Private Helper Methods">

    private JsonElement getJsonFromRestResponse(ClientResponse response) {
        return jsonParser.parse(clientResponse.getEntity(String.class));
    }

    // </editor-fold>


    // <editor-fold desc="Methods to Make REST Calls">

    public JsonElement get(String restUrl) {
        // Make the REST call and get the REST response
        webResource = restClient.resource(restUrl);
        clientResponse = webResource.accept(responseType)
                .get(ClientResponse.class);

        String responseString = clientResponse.getEntity(String.class);  // DEBUG
        System.out.println(responseString);  // DEBUG

        // Parse the JSON from the REST response and return it as a JsonElement object
//        return getJsonFromRestResponse(clientResponse);

        return jsonParser.parse(responseString);  // DEBUG
    }

    public JsonElement post(String restUrl, String input) {
        // Make the REST call and get the REST response
        webResource = restClient.resource(restUrl);
        clientResponse = webResource.accept(responseType).post(ClientResponse.class, input);

        // Parse the JSON from the REST response and return it as a JsonElement object
        return getJsonFromRestResponse(clientResponse);
    }

    // </editor-fold>
}
