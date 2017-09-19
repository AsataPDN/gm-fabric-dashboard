import moxios from "moxios";
import { main as ajaxWorker } from "./ajax";
import metrics from "../../json-mock/jvm/metrics";
import threads from "../../json-mock/jvm/threads";
import { services, groups } from "../../json-mock/discovery-service/data";

describe("AJAX Web Worker", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("fetches a metrics endpoint and returns a promise which resolves to the result", done => {
    moxios.stubRequest("/admin/metrics.json", {
      status: 200,
      response: metrics
    });
    ajaxWorker({
      type: "fetchMetricsWithoutServer",
      runtime: "JVM",
      endpoint: "/admin/metrics.json"
    })
      .then(json => expect(json).toMatchObject(metrics))
      .then(() => done());
  });
  it("fetches a Envoy metrics endpoint, automatically converts the statsd response, and returns a promise which resolves to the result", done => {
    moxios.stubRequest("/stats", {
      status: 200,
      response:
        "cluster.clock.update_failure: 0\n" +
        "cluster.clock.update_success: 8\n" +
        "cluster.clock.upstream_cx_active: 0\n" +
        "cluster.clock.upstream_cx_close_notify: 0\n"
    });
    ajaxWorker({
      type: "fetchMetricsWithoutServer",
      runtime: "ENVOY",
      endpoint: "/stats"
    })
      .then(statsd =>
        expect(statsd).toMatchObject({
          "cluster.clock.update_failure": 0,
          "cluster.clock.update_success": 8,
          "cluster.clock.upstream_cx_active": 0,
          "cluster.clock.upstream_cx_close_notify": 0
        })
      )
      .then(() => done());
    return false;
  });
  it("fetches a threads endpoint and returns a promise which resolves to the result", done => {
    moxios.stubRequest("/admin/threads", {
      status: 200,
      response: threads
    });
    ajaxWorker({
      type: "fetchThreads",
      endpoint: "/admin/threads"
    })
      .then(result => expect(result).toMatchObject(threads))
      .then(() => done());
  });
  it("fetches a threads endpoint and returns a promise which resolves to a rejection when the request didn't return JSON as expected", () => {
    moxios.stubRequest("/admin/threads2", {
      status: 200,
      response: '<!DOCTYPE html><html lang="en"><body></body></html>'
    });
    expect(
      ajaxWorker({
        type: "fetchThreads",
        endpoint: "/admin/threads2"
      })
    ).rejects.toMatch("The data object didn't contain JSON as expected");
  });
  it("returns an immediately rejected promise when given an unknown message", () => {
    expect(
      ajaxWorker({
        type: "hackTheMainframe",
        endpoint: "/decipher/mainframe/computer"
      })
    ).rejects.toMatch("Invalid Message");
  });

  it("fetches groups from the discovery service and maps them with a key of ID", done => {
    moxios.stubRequest("server/groups", {
      status: 200,
      response: groups
    });
    ajaxWorker({
      type: "fetchGroups",
      fabricServer: "server"
    })
      .then(result =>
        expect(result).toMatchObject({
          "0af453a8bd27001e5ebad832b7b80ec1": {
            id: "0af453a8bd27001e5ebad832b7b80ec1",
            name: "Batcave"
          }
        })
      )
      .then(() => done());
  });
  it("fetches services from the discovery service and maps them with a key of name", done => {
    moxios.stubRequest("server/services", {
      status: 200,
      response: services
    });
    ajaxWorker({
      type: "fetchServices",
      fabricServer: "server"
    })
      .then(result =>
        expect(result).toMatchObject({
          Batcomputer: {
            id: "7c2024fbc7c6cd81a310577d519ac47e",
            name: "Batcomputer",
            group: "0af453a8bd27001e5ebad832b7b80ec1",
            counts: {
              current: 3,
              minimum: 1,
              maximum: 6
            },
            metered: true,
            threaded: true,
            documentation: null,
            authorized: true,
            runtime: "JVM",
            instances: [
              "ee0fa3669fea7e9a0adea649c46bca56",
              "8bedb4551e801f38bf149001a72a1127",
              "d9de3a9c26c6c84daaf1ceb40559d659"
            ]
          },
          "Batcave Defense Systems": {
            id: "ee0fa3669fea7e9a0a00000c46bca56",
            name: "Batcave Defense Systems",
            group: "0af453a8bd27001e5ebad832b7b80ec1",
            counts: {
              current: 3,
              minimum: 1,
              maximum: 6
            },
            metered: true,
            threaded: true,
            documentation: null,
            authorized: false,
            runtime: "JVM",
            instances: [
              "ee0f0000000a7e9a0adea649c46bca56",
              "8bedb4551e801f38bf149000002a1127",
              "d000009c26c6c84daaf1ceb40559d659"
            ]
          }
        })
      )
      .then(() => done());
  });
  xit("fetches metrics from a microservice via the discovery service");
});
