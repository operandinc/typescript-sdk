// @generated by protoc-gen-es v1.0.0 with parameter "target=ts+js"
// @generated from file operand/v1/operand.proto (package operand.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { File, Property, ReturnedFileOptions } from "../../file/v1/file_pb.js";

/**
 * SearchRequest is the request for the Search method.
 *
 * @generated from message operand.v1.SearchRequest
 */
export const SearchRequest = proto3.makeMessageType(
  "operand.v1.SearchRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "max_results", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "filter", kind: "message", T: Filter, opt: true },
    { no: 5, name: "file_return_options", kind: "message", T: ReturnedFileOptions, opt: true },
    { no: 6, name: "check_conversational", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 7, name: "adjacent_snippets", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * ContentMatch is a match of a snippet of content from a file.
 *
 * @generated from message operand.v1.ContentMatch
 */
export const ContentMatch = proto3.makeMessageType(
  "operand.v1.ContentMatch",
  () => [
    { no: 1, name: "match_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "file_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "snippet", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "before_snippets", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "after_snippets", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * SearchResponse is the response for the Search method.
 *
 * @generated from message operand.v1.SearchResponse
 */
export const SearchResponse = proto3.makeMessageType(
  "operand.v1.SearchResponse",
  () => [
    { no: 1, name: "matches", kind: "message", T: ContentMatch, repeated: true },
    { no: 2, name: "files", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: File} },
    { no: 3, name: "conversational", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * Filter allows search results to be filtered according to the properties of files.
 *
 * @generated from message operand.v1.Filter
 */
export const Filter = proto3.makeMessageType(
  "operand.v1.Filter",
  () => [
    { no: 1, name: "conditions", kind: "message", T: Condition, repeated: true },
  ],
);

/**
 * NotCondition is the negation of a condition.
 *
 * @generated from message operand.v1.NotCondition
 */
export const NotCondition = proto3.makeMessageType(
  "operand.v1.NotCondition",
  () => [
    { no: 1, name: "condition", kind: "message", T: Condition },
  ],
);

/**
 * KeyedProperty is a key associated with a property value.
 *
 * @generated from message operand.v1.KeyedProperty
 */
export const KeyedProperty = proto3.makeMessageType(
  "operand.v1.KeyedProperty",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "property", kind: "message", T: Property },
  ],
);

/**
 * Range is a numeric range for a property value.
 *
 * @generated from message operand.v1.Range
 */
export const Range = proto3.makeMessageType(
  "operand.v1.Range",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lt", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 3, name: "lte", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 4, name: "gt", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 5, name: "gte", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
  ],
);

/**
 * Condition is a condition that must be satisified by a file's properties.
 *
 * @generated from message operand.v1.Condition
 */
export const Condition = proto3.makeMessageType(
  "operand.v1.Condition",
  () => [
    { no: 1, name: "property", kind: "message", T: KeyedProperty, oneof: "condition" },
    { no: 2, name: "range", kind: "message", T: Range, oneof: "condition" },
    { no: 3, name: "and", kind: "message", T: Filter, oneof: "condition" },
    { no: 4, name: "or", kind: "message", T: Filter, oneof: "condition" },
    { no: 5, name: "not", kind: "message", T: NotCondition, oneof: "condition" },
  ],
);

/**
 * ConversationOptions are options for a conversation.
 *
 * @generated from message operand.v1.ConversationOptions
 */
export const ConversationOptions = proto3.makeMessageType(
  "operand.v1.ConversationOptions",
  () => [
    { no: 1, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "filter", kind: "message", T: Filter, opt: true },
    { no: 3, name: "file_return_options", kind: "message", T: ReturnedFileOptions, opt: true },
    { no: 4, name: "viewing_file_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "end_user_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * ConverseRequest is the request for the Converse method.
 *
 * @generated from message operand.v1.ConverseRequest
 */
export const ConverseRequest = proto3.makeMessageType(
  "operand.v1.ConverseRequest",
  () => [
    { no: 1, name: "conversation_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "input", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "options", kind: "message", T: ConversationOptions, opt: true },
  ],
);

/**
 * ConverseResponse is the response for the Converse method.
 *
 * @generated from message operand.v1.ConverseResponse
 */
export const ConverseResponse = proto3.makeMessageType(
  "operand.v1.ConverseResponse",
  () => [
    { no: 1, name: "conversation_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message_part", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relevant_files", kind: "message", T: File, repeated: true },
    { no: 4, name: "confidence_score", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
  ],
);

/**
 * SuggestionsRequest is the request for the Suggestions method.
 *
 * @generated from message operand.v1.SuggestionsRequest
 */
export const SuggestionsRequest = proto3.makeMessageType(
  "operand.v1.SuggestionsRequest",
  () => [
    { no: 1, name: "max_results", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "filter", kind: "message", T: Filter, opt: true },
    { no: 4, name: "disable_personalization", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * SuggestionsResponse is the response for the Suggestions method.
 *
 * @generated from message operand.v1.SuggestionsResponse
 */
export const SuggestionsResponse = proto3.makeMessageType(
  "operand.v1.SuggestionsResponse",
  () => [
    { no: 1, name: "suggestions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

