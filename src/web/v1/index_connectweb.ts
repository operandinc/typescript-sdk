// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=ts"
// @generated from file web/v1/index.proto (package web.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {CreateIndexRequest, CreateIndexResponse, DeleteIndexRequest, DeleteIndexResponse, GetIndexRequest, GetIndexResponse, ListIndexesRequest, ListIndexesResponse, SubscribeRequest, SubscribeResponse, SubscriptionsRequest, SubscriptionsResponse, UnsubscribeRequest, UnsubscribeResponse, UpdateIndexRequest, UpdateIndexResponse} from "./index_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * IndexService manages the users set of configured indexes. This includes
 * both the indexes they've personally created, as well as the indexes they've
 * subscribed to (i.e. public indexes).
 * Note: This service requires a valid `Authorization` header (see user.proto).
 *
 * @generated from service web.v1.IndexService
 */
export const IndexService = {
  typeName: "web.v1.IndexService",
  methods: {
    /**
     * Allows the user to create a new index. We support a number of different
     * types of indexes, though the most basic kind is an API-only index (i.e.
     * unmanaged). This allows the user to upload their own knowledge and use it
     * for core operations.
     *
     * @generated from rpc web.v1.IndexService.CreateIndex
     */
    createIndex: {
      name: "CreateIndex",
      I: CreateIndexRequest,
      O: CreateIndexResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListIndexes returns a list of indexes that the user owns.
     *
     * @generated from rpc web.v1.IndexService.ListIndexes
     */
    listIndexes: {
      name: "ListIndexes",
      I: ListIndexesRequest,
      O: ListIndexesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetIndex returns the details of a single index. The response also includes
     * additional information about the index, i.e. usage information, social data.
     *
     * @generated from rpc web.v1.IndexService.GetIndex
     */
    getIndex: {
      name: "GetIndex",
      I: GetIndexRequest,
      O: GetIndexResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateIndex allows the user to update the details of an index. For now,
     * this operation is very limited, and only allows the user to toggle a few
     * smaller metadata-like settings on the index.
     *
     * @generated from rpc web.v1.IndexService.UpdateIndex
     */
    updateIndex: {
      name: "UpdateIndex",
      I: UpdateIndexRequest,
      O: UpdateIndexResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteIndex allows the user to delete an index. This operation will complete
     * instantly, but it will take a few minutes for the index to be fully deleted.
     * Another note is that any subscribers to this index will be notified that the
     * index has been deleted, and will therefore be unable to use it any more.
     *
     * @generated from rpc web.v1.IndexService.DeleteIndex
     */
    deleteIndex: {
      name: "DeleteIndex",
      I: DeleteIndexRequest,
      O: DeleteIndexResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Subscriptions returns the list of indexes that the user has subscribed to.
     *
     * @generated from rpc web.v1.IndexService.Subscriptions
     */
    subscriptions: {
      name: "Subscriptions",
      I: SubscriptionsRequest,
      O: SubscriptionsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Subscribe allows the user to subscribe to a public index.
     *
     * @generated from rpc web.v1.IndexService.Subscribe
     */
    subscribe: {
      name: "Subscribe",
      I: SubscribeRequest,
      O: SubscribeResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Unsubscribe allows the user to unsubscribe from a public index.
     *
     * @generated from rpc web.v1.IndexService.Unsubscribe
     */
    unsubscribe: {
      name: "Unsubscribe",
      I: UnsubscribeRequest,
      O: UnsubscribeResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
