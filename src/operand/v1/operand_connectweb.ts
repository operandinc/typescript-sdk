// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=ts"
// @generated from file operand/v1/operand.proto (package operand.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {FeedRequest, FeedResponse, PublicIndexesRequest, PublicIndexesResponse, SearchRequest, SearchResponse} from "./operand_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * OperandService is the core service exported by the API. Specifically, this allows users to interact
 * with the indexes they've subscribed to in aggregate, forming their very own personal search engine.
 * Note: Use of the Operand service requires a valid API key, i.e. the user must be authenticated.
 *
 * @generated from service operand.v1.OperandService
 */
export const OperandService = {
  typeName: "operand.v1.OperandService",
  methods: {
    /**
     * Feed allows a user to get a feed of the most recently indexed objects from either a specific index,
     * or more commonly, from all of the indexes they've subscribed to. The feed is returned in reverse
     * chronological order, with the most recently indexed objects appearing first. The feed is paginated,
     * and the user can specify the number of objects to return per page, as well as the page number. In
     * the future, we expect to add more relevance-based sorting options, as well as discovery-based features
     * (i.e. showing you content from indexes you aren't subscribed to yet, but that you might be interested in).
     *
     * @generated from rpc operand.v1.OperandService.Feed
     */
    feed: {
      name: "Feed",
      I: FeedRequest,
      O: FeedResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Search allows the user to search for content in a specific set of indexes, or all of the indexes
     * that they've subscribed to. The name "search" is a bit of a misnomer, as this operation is higher-level
     * than a simple search, as it includes additional fields in the return object (i.e. Q&A, etc).
     *
     * @generated from rpc operand.v1.OperandService.Search
     */
    search: {
      name: "Search",
      I: SearchRequest,
      O: SearchResponse,
      kind: MethodKind.Unary,
    },
    /**
     * PublicIndexes allows the user to query for public indexes that are available for subscription.
     * The user may attach a query string to the request, which will be used to filter the results.
     * Note: This is a public endpoint, and does not require authentication (though if there is a user
     * logged in, we can return more relevant results, so attach the user's API key if possible).
     *
     * @generated from rpc operand.v1.OperandService.PublicIndexes
     */
    publicIndexes: {
      name: "PublicIndexes",
      I: PublicIndexesRequest,
      O: PublicIndexesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
