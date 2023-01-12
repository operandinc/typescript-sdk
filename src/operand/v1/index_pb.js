// @generated by protoc-gen-es v0.1.1 with parameter "target=ts+js"
// @generated from file operand/v1/index.proto (package operand.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, Timestamp} from "@bufbuild/protobuf";
import {Filter, Object$, UserProfile} from "./object_pb.js";

/**
 * @generated from enum operand.v1.ExplorationKind
 */
export const ExplorationKind = proto3.makeEnum(
  "operand.v1.ExplorationKind",
  [
    {no: 0, name: "EXPLORATION_KIND_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "EXPLORATION_KIND_CONCEPTS", localName: "CONCEPTS"},
  ],
);

/**
 * @generated from enum operand.v1.ExplorationStatus
 */
export const ExplorationStatus = proto3.makeEnum(
  "operand.v1.ExplorationStatus",
  [
    {no: 0, name: "EXPLORATION_STATUS_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "EXPLORATION_STATUS_PENDING", localName: "PENDING"},
    {no: 2, name: "EXPLORATION_STATUS_RUNNING", localName: "RUNNING"},
    {no: 3, name: "EXPLORATION_STATUS_COMPLETED", localName: "COMPLETED"},
    {no: 4, name: "EXPLORATION_STATUS_FAILED", localName: "FAILED"},
  ],
);

/**
 * @generated from message operand.v1.IndexOptions
 */
export const IndexOptions = proto3.makeMessageType(
  "operand.v1.IndexOptions",
  () => [
    { no: 1, name: "include_owner", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 2, name: "include_subscription", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 3, name: "include_stats", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.CreateIndexRequest
 */
export const CreateIndexRequest = proto3.makeMessageType(
  "operand.v1.CreateIndexRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "public", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "options", kind: "message", T: IndexOptions, opt: true },
    { no: 5, name: "image_url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.Subscription
 */
export const Subscription = proto3.makeMessageType(
  "operand.v1.Subscription",
  () => [
    { no: 1, name: "created_at", kind: "message", T: Timestamp },
    { no: 2, name: "notifications", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message operand.v1.IndexStats
 */
export const IndexStats = proto3.makeMessageType(
  "operand.v1.IndexStats",
  () => [
    { no: 1, name: "subscribers", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message operand.v1.Index
 */
export const Index = proto3.makeMessageType(
  "operand.v1.Index",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "owner", kind: "message", T: UserProfile, opt: true },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "public", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "subscription", kind: "message", T: Subscription, opt: true },
    { no: 8, name: "stats", kind: "message", T: IndexStats, opt: true },
    { no: 9, name: "image_url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.CreateIndexResponse
 */
export const CreateIndexResponse = proto3.makeMessageType(
  "operand.v1.CreateIndexResponse",
  () => [
    { no: 1, name: "index", kind: "message", T: Index },
  ],
);

/**
 * @generated from message operand.v1.ListIndexesRequest
 */
export const ListIndexesRequest = proto3.makeMessageType(
  "operand.v1.ListIndexesRequest",
  () => [
    { no: 1, name: "owned_by_user", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "options", kind: "message", T: IndexOptions, opt: true },
  ],
);

/**
 * @generated from message operand.v1.ListIndexesResponse
 */
export const ListIndexesResponse = proto3.makeMessageType(
  "operand.v1.ListIndexesResponse",
  () => [
    { no: 1, name: "indexes", kind: "message", T: Index, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.GetIndexRequest
 */
export const GetIndexRequest = proto3.makeMessageType(
  "operand.v1.GetIndexRequest",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "options", kind: "message", T: IndexOptions, opt: true },
    { no: 3, name: "invite_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.GetIndexResponse
 */
export const GetIndexResponse = proto3.makeMessageType(
  "operand.v1.GetIndexResponse",
  () => [
    { no: 1, name: "index", kind: "message", T: Index },
  ],
);

/**
 * @generated from message operand.v1.UpdateIndexRequest
 */
export const UpdateIndexRequest = proto3.makeMessageType(
  "operand.v1.UpdateIndexRequest",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "public", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 5, name: "options", kind: "message", T: IndexOptions, opt: true },
    { no: 6, name: "image_url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.UpdateIndexResponse
 */
export const UpdateIndexResponse = proto3.makeMessageType(
  "operand.v1.UpdateIndexResponse",
  () => [
    { no: 1, name: "index", kind: "message", T: Index },
  ],
);

/**
 * @generated from message operand.v1.DeleteIndexRequest
 */
export const DeleteIndexRequest = proto3.makeMessageType(
  "operand.v1.DeleteIndexRequest",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message operand.v1.DeleteIndexResponse
 */
export const DeleteIndexResponse = proto3.makeMessageType(
  "operand.v1.DeleteIndexResponse",
  [],
);

/**
 * @generated from message operand.v1.SubscriptionsRequest
 */
export const SubscriptionsRequest = proto3.makeMessageType(
  "operand.v1.SubscriptionsRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "options", kind: "message", T: IndexOptions, opt: true },
  ],
);

/**
 * @generated from message operand.v1.SubscriptionsResponse
 */
export const SubscriptionsResponse = proto3.makeMessageType(
  "operand.v1.SubscriptionsResponse",
  () => [
    { no: 1, name: "indexes", kind: "message", T: Index, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.SubscribeRequest
 */
export const SubscribeRequest = proto3.makeMessageType(
  "operand.v1.SubscribeRequest",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "notifications", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 3, name: "invite_token", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.SubscribeResponse
 */
export const SubscribeResponse = proto3.makeMessageType(
  "operand.v1.SubscribeResponse",
  () => [
    { no: 1, name: "subscription", kind: "message", T: Subscription },
  ],
);

/**
 * @generated from message operand.v1.UnsubscribeRequest
 */
export const UnsubscribeRequest = proto3.makeMessageType(
  "operand.v1.UnsubscribeRequest",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "target_user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.UnsubscribeResponse
 */
export const UnsubscribeResponse = proto3.makeMessageType(
  "operand.v1.UnsubscribeResponse",
  [],
);

/**
 * @generated from message operand.v1.InviteRequest
 */
export const InviteRequest = proto3.makeMessageType(
  "operand.v1.InviteRequest",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_public_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "target" },
    { no: 3, name: "email_address", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "target" },
  ],
);

/**
 * @generated from message operand.v1.InviteResponse
 */
export const InviteResponse = proto3.makeMessageType(
  "operand.v1.InviteResponse",
  [],
);

/**
 * @generated from message operand.v1.SubscribersOfRequest
 */
export const SubscribersOfRequest = proto3.makeMessageType(
  "operand.v1.SubscribersOfRequest",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message operand.v1.SubscribersOfResponse
 */
export const SubscribersOfResponse = proto3.makeMessageType(
  "operand.v1.SubscribersOfResponse",
  () => [
    { no: 1, name: "subscribers", kind: "message", T: UserProfile, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.AvailableExplorationsRequest
 */
export const AvailableExplorationsRequest = proto3.makeMessageType(
  "operand.v1.AvailableExplorationsRequest",
  () => [
    { no: 1, name: "index_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message operand.v1.AvailableExplorationsResponse
 */
export const AvailableExplorationsResponse = proto3.makeMessageType(
  "operand.v1.AvailableExplorationsResponse",
  () => [
    { no: 1, name: "kinds", kind: "enum", T: proto3.getEnumType(ExplorationKind), repeated: true },
  ],
);

/**
 * @generated from message operand.v1.ExplorationParameters
 */
export const ExplorationParameters = proto3.makeMessageType(
  "operand.v1.ExplorationParameters",
  () => [
    { no: 1, name: "concepts", kind: "message", T: ConceptsExplorationParameters, oneof: "kind" },
  ],
);

/**
 * @generated from message operand.v1.ConceptsExplorationParameters
 */
export const ConceptsExplorationParameters = proto3.makeMessageType(
  "operand.v1.ConceptsExplorationParameters",
  () => [
    { no: 1, name: "target_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "summary_kinds", kind: "enum", T: proto3.getEnumType(ConceptsExplorationParameters_SummaryKind), repeated: true },
    { no: 3, name: "filter", kind: "message", T: Filter, opt: true },
  ],
);

/**
 * @generated from enum operand.v1.ConceptsExplorationParameters.SummaryKind
 */
export const ConceptsExplorationParameters_SummaryKind = proto3.makeEnum(
  "operand.v1.ConceptsExplorationParameters.SummaryKind",
  [
    {no: 0, name: "SUMMARY_KIND_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SUMMARY_KIND_TOPIC_STRING", localName: "TOPIC_STRING"},
    {no: 2, name: "SUMMARY_KIND_MARKDOWN", localName: "MARKDOWN"},
  ],
);

/**
 * @generated from message operand.v1.ExplorationData
 */
export const ExplorationData = proto3.makeMessageType(
  "operand.v1.ExplorationData",
  () => [
    { no: 1, name: "concepts", kind: "message", T: ConceptsExplorationData, oneof: "kind" },
  ],
);

/**
 * @generated from message operand.v1.ConceptsExplorationData
 */
export const ConceptsExplorationData = proto3.makeMessageType(
  "operand.v1.ConceptsExplorationData",
  () => [
    { no: 1, name: "concepts", kind: "message", T: ConceptsExplorationData_Concept, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.ConceptsExplorationData.Snippet
 */
export const ConceptsExplorationData_Snippet = proto3.makeMessageType(
  "operand.v1.ConceptsExplorationData.Snippet",
  () => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "ConceptsExplorationData_Snippet"},
);

/**
 * @generated from message operand.v1.ConceptsExplorationData.Summary
 */
export const ConceptsExplorationData_Summary = proto3.makeMessageType(
  "operand.v1.ConceptsExplorationData.Summary",
  () => [
    { no: 1, name: "topic_string", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
    { no: 2, name: "markdown", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "kind" },
  ],
  {localName: "ConceptsExplorationData_Summary"},
);

/**
 * @generated from message operand.v1.ConceptsExplorationData.Concept
 */
export const ConceptsExplorationData_Concept = proto3.makeMessageType(
  "operand.v1.ConceptsExplorationData.Concept",
  () => [
    { no: 1, name: "snippets", kind: "message", T: ConceptsExplorationData_Snippet, repeated: true },
    { no: 2, name: "objects", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Object$} },
    { no: 3, name: "summaries", kind: "message", T: ConceptsExplorationData_Summary, repeated: true },
  ],
  {localName: "ConceptsExplorationData_Concept"},
);

/**
 * @generated from message operand.v1.Exploration
 */
export const Exploration = proto3.makeMessageType(
  "operand.v1.Exploration",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "created_at", kind: "message", T: Timestamp },
    { no: 3, name: "updated_at", kind: "message", T: Timestamp, opt: true },
    { no: 4, name: "kind", kind: "enum", T: proto3.getEnumType(ExplorationKind) },
    { no: 5, name: "parameters", kind: "message", T: ExplorationParameters },
    { no: 6, name: "status", kind: "enum", T: proto3.getEnumType(ExplorationStatus) },
    { no: 7, name: "data", kind: "message", T: ExplorationData, opt: true },
    { no: 8, name: "error_message", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.ExplorationOptions
 */
export const ExplorationOptions = proto3.makeMessageType(
  "operand.v1.ExplorationOptions",
  () => [
    { no: 1, name: "include_data", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.CreateExplorationRequest
 */
export const CreateExplorationRequest = proto3.makeMessageType(
  "operand.v1.CreateExplorationRequest",
  () => [
    { no: 1, name: "index_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "kind", kind: "enum", T: proto3.getEnumType(ExplorationKind) },
    { no: 3, name: "parameters", kind: "message", T: ExplorationParameters },
    { no: 4, name: "options", kind: "message", T: ExplorationOptions, opt: true },
  ],
);

/**
 * @generated from message operand.v1.CreateExplorationResponse
 */
export const CreateExplorationResponse = proto3.makeMessageType(
  "operand.v1.CreateExplorationResponse",
  () => [
    { no: 1, name: "exploration", kind: "message", T: Exploration },
  ],
);

/**
 * @generated from message operand.v1.DeleteExplorationRequest
 */
export const DeleteExplorationRequest = proto3.makeMessageType(
  "operand.v1.DeleteExplorationRequest",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message operand.v1.DeleteExplorationResponse
 */
export const DeleteExplorationResponse = proto3.makeMessageType(
  "operand.v1.DeleteExplorationResponse",
  [],
);

/**
 * @generated from message operand.v1.ListExplorationsRequest
 */
export const ListExplorationsRequest = proto3.makeMessageType(
  "operand.v1.ListExplorationsRequest",
  () => [
    { no: 1, name: "index_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "offset", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "options", kind: "message", T: ExplorationOptions, opt: true },
  ],
);

/**
 * @generated from message operand.v1.ListExplorationsResponse
 */
export const ListExplorationsResponse = proto3.makeMessageType(
  "operand.v1.ListExplorationsResponse",
  () => [
    { no: 1, name: "explorations", kind: "message", T: Exploration, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.GetExplorationRequest
 */
export const GetExplorationRequest = proto3.makeMessageType(
  "operand.v1.GetExplorationRequest",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "options", kind: "message", T: ExplorationOptions, opt: true },
  ],
);

/**
 * @generated from message operand.v1.GetExplorationResponse
 */
export const GetExplorationResponse = proto3.makeMessageType(
  "operand.v1.GetExplorationResponse",
  () => [
    { no: 1, name: "exploration", kind: "message", T: Exploration },
  ],
);

