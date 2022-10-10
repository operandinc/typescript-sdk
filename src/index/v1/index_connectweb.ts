// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=ts"
// @generated from file index/v1/index.proto (package index.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {AnswerRequest, AnswerResponse, CountObjectsRequest, CountObjectsResponse, DeleteObjectRequest, DeleteObjectResponse, FeedbackRequest, FeedbackResponse, ListObjectsRequest, ListObjectsResponse, SearchRequest, SearchResponse, UpsertObjectRequest, UpsertObjectResponse} from "./index_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * IndexService is accessed via API key(s), and is used to access
 * and/or perform operations on an index.
 *
 * @generated from service index.v1.IndexService
 */
export const IndexService = {
  typeName: "index.v1.IndexService",
  methods: {
    /**
     * UpsertObject lets you insert or update an object within the index.
     *
     * @generated from rpc index.v1.IndexService.UpsertObject
     */
    upsertObject: {
      name: "UpsertObject",
      I: UpsertObjectRequest,
      O: UpsertObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListObjects is used to list objects within the index.
     *
     * @generated from rpc index.v1.IndexService.ListObjects
     */
    listObjects: {
      name: "ListObjects",
      I: ListObjectsRequest,
      O: ListObjectsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteObject deletes an object, and all of its children.
     *
     * @generated from rpc index.v1.IndexService.DeleteObject
     */
    deleteObject: {
      name: "DeleteObject",
      I: DeleteObjectRequest,
      O: DeleteObjectResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CountObjects counts the number of objects within the index,
     * at a given level in the tree (i.e. given parent, possibly nil).
     *
     * @generated from rpc index.v1.IndexService.CountObjects
     */
    countObjects: {
      name: "CountObjects",
      I: CountObjectsRequest,
      O: CountObjectsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Search returns the top-K matching objects for a given query,
     * along with content snippet(s) for each match.
     *
     * @generated from rpc index.v1.IndexService.Search
     */
    search: {
      name: "Search",
      I: SearchRequest,
      O: SearchResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Answer optionally returns an answer to a natural language question.
     * Along with the answer, we return a confidence level which should be checked
     * against a threshold before displaying the answer to the user.
     *
     * @generated from rpc index.v1.IndexService.Answer
     */
    answer: {
      name: "Answer",
      I: AnswerRequest,
      O: AnswerResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Feedback is used to give anonymous feedback to the API on search performance.
     * For example, if a user clicks a document, we want to which document was clicked
     * in response to what search query.
     *
     * @generated from rpc index.v1.IndexService.Feedback
     */
    feedback: {
      name: "Feedback",
      I: FeedbackRequest,
      O: FeedbackResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
