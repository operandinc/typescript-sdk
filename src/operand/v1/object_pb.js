// @generated by protoc-gen-es v0.1.1 with parameter "target=ts+js"
// @generated from file operand/v1/object.proto (package operand.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, Timestamp} from "@bufbuild/protobuf";

/**
 * @generated from enum operand.v1.ObjectType
 */
export const ObjectType = proto3.makeEnum(
  "operand.v1.ObjectType",
  [
    {no: 0, name: "OBJECT_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "OBJECT_TYPE_COLLECTION", localName: "COLLECTION"},
    {no: 2, name: "OBJECT_TYPE_TEXT", localName: "TEXT"},
    {no: 3, name: "OBJECT_TYPE_HTML", localName: "HTML"},
    {no: 4, name: "OBJECT_TYPE_RSS", localName: "RSS"},
    {no: 5, name: "OBJECT_TYPE_AUDIO", localName: "AUDIO"},
    {no: 6, name: "OBJECT_TYPE_PODCAST", localName: "PODCAST"},
  ],
);

/**
 * @generated from enum operand.v1.AudioFileExt
 */
export const AudioFileExt = proto3.makeEnum(
  "operand.v1.AudioFileExt",
  [
    {no: 0, name: "AUDIO_FILE_EXT_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "AUDIO_FILE_EXT_MP3", localName: "MP3"},
    {no: 2, name: "AUDIO_FILE_EXT_OGG", localName: "OGG"},
    {no: 3, name: "AUDIO_FILE_EXT_FLAC", localName: "FLAC"},
    {no: 4, name: "AUDIO_FILE_EXT_WAV", localName: "WAV"},
  ],
);

/**
 * @generated from enum operand.v1.ObjectStatus
 */
export const ObjectStatus = proto3.makeEnum(
  "operand.v1.ObjectStatus",
  [
    {no: 0, name: "OBJECT_STATUS_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "OBJECT_STATUS_QUEUED", localName: "QUEUED"},
    {no: 2, name: "OBJECT_STATUS_INDEXING", localName: "INDEXING"},
    {no: 3, name: "OBJECT_STATUS_READY", localName: "READY"},
    {no: 4, name: "OBJECT_STATUS_ERROR", localName: "ERROR"},
  ],
);

/**
 * @generated from message operand.v1.ObjectMetadata
 */
export const ObjectMetadata = proto3.makeMessageType(
  "operand.v1.ObjectMetadata",
  () => [
    { no: 1, name: "collection", kind: "message", T: CollectionMetadata, oneof: "value" },
    { no: 2, name: "text", kind: "message", T: TextMetadata, oneof: "value" },
    { no: 3, name: "html", kind: "message", T: HTMLMetadata, oneof: "value" },
    { no: 4, name: "rss", kind: "message", T: RSSMetadata, oneof: "value" },
    { no: 5, name: "audio", kind: "message", T: AudioMetadata, oneof: "value" },
    { no: 6, name: "podcast", kind: "message", T: PodcastMetadata, oneof: "value" },
  ],
);

/**
 * @generated from message operand.v1.CollectionMetadata
 */
export const CollectionMetadata = proto3.makeMessageType(
  "operand.v1.CollectionMetadata",
  [],
);

/**
 * @generated from message operand.v1.TextMetadata
 */
export const TextMetadata = proto3.makeMessageType(
  "operand.v1.TextMetadata",
  () => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message operand.v1.HTMLMetadata
 */
export const HTMLMetadata = proto3.makeMessageType(
  "operand.v1.HTMLMetadata",
  () => [
    { no: 1, name: "html", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * The URL is stored in properties, not here.
 *
 * @generated from message operand.v1.RSSMetadata
 */
export const RSSMetadata = proto3.makeMessageType(
  "operand.v1.RSSMetadata",
  [],
);

/**
 * If the _url property is set, this metadata is auto-populated.
 *
 * @generated from message operand.v1.AudioMetadata
 */
export const AudioMetadata = proto3.makeMessageType(
  "operand.v1.AudioMetadata",
  () => [
    { no: 1, name: "file_ext", kind: "enum", T: proto3.getEnumType(AudioFileExt), opt: true },
    { no: 2, name: "audio", kind: "scalar", T: 12 /* ScalarType.BYTES */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.PodcastMetadata
 */
export const PodcastMetadata = proto3.makeMessageType(
  "operand.v1.PodcastMetadata",
  () => [
    { no: 1, name: "listennotes_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "image", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "thumbnail", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.Properties
 */
export const Properties = proto3.makeMessageType(
  "operand.v1.Properties",
  () => [
    { no: 1, name: "properties", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Property} },
  ],
);

/**
 * @generated from message operand.v1.Property
 */
export const Property = proto3.makeMessageType(
  "operand.v1.Property",
  () => [
    { no: 1, name: "indexed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value" },
    { no: 3, name: "number", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "value" },
    { no: 4, name: "text_array", kind: "message", T: TextArray, oneof: "value" },
    { no: 5, name: "number_array", kind: "message", T: NumberArray, oneof: "value" },
  ],
);

/**
 * @generated from message operand.v1.TextArray
 */
export const TextArray = proto3.makeMessageType(
  "operand.v1.TextArray",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.NumberArray
 */
export const NumberArray = proto3.makeMessageType(
  "operand.v1.NumberArray",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.Object
 */
export const Object$ = proto3.makeMessageType(
  "operand.v1.Object",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "created_at", kind: "message", T: Timestamp },
    { no: 3, name: "updated_at", kind: "message", T: Timestamp, opt: true },
    { no: 4, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "type", kind: "enum", T: proto3.getEnumType(ObjectType) },
    { no: 6, name: "metadata", kind: "message", T: ObjectMetadata, opt: true },
    { no: 7, name: "properties", kind: "message", T: Properties },
    { no: 8, name: "status", kind: "enum", T: proto3.getEnumType(ObjectStatus) },
  ],
  {localName: "Object$"},
);

/**
 * @generated from message operand.v1.ObjectOptions
 */
export const ObjectOptions = proto3.makeMessageType(
  "operand.v1.ObjectOptions",
  () => [
    { no: 1, name: "include_metadata", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.UpsertRequest
 */
export const UpsertRequest = proto3.makeMessageType(
  "operand.v1.UpsertRequest",
  () => [
    { no: 1, name: "existing_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(ObjectType), opt: true },
    { no: 4, name: "metadata", kind: "message", T: ObjectMetadata, opt: true },
    { no: 5, name: "properties", kind: "message", T: Properties, opt: true },
  ],
);

/**
 * @generated from message operand.v1.UpsertResponse
 */
export const UpsertResponse = proto3.makeMessageType(
  "operand.v1.UpsertResponse",
  () => [
    { no: 1, name: "object", kind: "message", T: Object$ },
  ],
);

/**
 * @generated from message operand.v1.SuggestionsRequest
 */
export const SuggestionsRequest = proto3.makeMessageType(
  "operand.v1.SuggestionsRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(ObjectType) },
  ],
);

/**
 * @generated from message operand.v1.SuggestionsResponse
 */
export const SuggestionsResponse = proto3.makeMessageType(
  "operand.v1.SuggestionsResponse",
  () => [
    { no: 1, name: "upserts", kind: "message", T: SuggestionsResponse_AnnotatedUpsert, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.SuggestionsResponse.AnnotatedUpsert
 */
export const SuggestionsResponse_AnnotatedUpsert = proto3.makeMessageType(
  "operand.v1.SuggestionsResponse.AnnotatedUpsert",
  () => [
    { no: 1, name: "upsert", kind: "message", T: UpsertRequest },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_estimate", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
  {localName: "SuggestionsResponse_AnnotatedUpsert"},
);

/**
 * @generated from message operand.v1.ListRequest
 */
export const ListRequest = proto3.makeMessageType(
  "operand.v1.ListRequest",
  () => [
    { no: 1, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "cursor", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 4, name: "options", kind: "message", T: ObjectOptions, opt: true },
  ],
);

/**
 * @generated from message operand.v1.ListResponse
 */
export const ListResponse = proto3.makeMessageType(
  "operand.v1.ListResponse",
  () => [
    { no: 1, name: "objects", kind: "message", T: Object$, repeated: true },
    { no: 2, name: "next_cursor", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.GetRequest
 */
export const GetRequest = proto3.makeMessageType(
  "operand.v1.GetRequest",
  () => [
    { no: 1, name: "ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "options", kind: "message", T: ObjectOptions, opt: true },
  ],
);

/**
 * @generated from message operand.v1.GetResponse
 */
export const GetResponse = proto3.makeMessageType(
  "operand.v1.GetResponse",
  () => [
    { no: 1, name: "objects", kind: "message", T: Object$, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.DeleteRequest
 */
export const DeleteRequest = proto3.makeMessageType(
  "operand.v1.DeleteRequest",
  () => [
    { no: 1, name: "ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.DeleteResponse
 */
export const DeleteResponse = proto3.makeMessageType(
  "operand.v1.DeleteResponse",
  [],
);

/**
 * @generated from message operand.v1.CountRequest
 */
export const CountRequest = proto3.makeMessageType(
  "operand.v1.CountRequest",
  () => [
    { no: 1, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message operand.v1.CountResponse
 */
export const CountResponse = proto3.makeMessageType(
  "operand.v1.CountResponse",
  () => [
    { no: 1, name: "count", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message operand.v1.Filter
 */
export const Filter = proto3.makeMessageType(
  "operand.v1.Filter",
  () => [
    { no: 1, name: "conditions", kind: "message", T: Condition, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.NotCondition
 */
export const NotCondition = proto3.makeMessageType(
  "operand.v1.NotCondition",
  () => [
    { no: 1, name: "condition", kind: "message", T: Condition },
  ],
);

/**
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
 * @generated from message operand.v1.SearchRequest
 */
export const SearchRequest = proto3.makeMessageType(
  "operand.v1.SearchRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "filter", kind: "message", T: Filter, opt: true },
    { no: 4, name: "object_options", kind: "message", T: ObjectOptions, opt: true },
  ],
);

/**
 * @generated from message operand.v1.Snippet
 */
export const Snippet = proto3.makeMessageType(
  "operand.v1.Snippet",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "extra", kind: "message", T: Properties, opt: true },
  ],
);

/**
 * @generated from message operand.v1.SearchResponse
 */
export const SearchResponse = proto3.makeMessageType(
  "operand.v1.SearchResponse",
  () => [
    { no: 1, name: "results", kind: "message", T: SearchResponse_Result, repeated: true },
  ],
);

/**
 * @generated from message operand.v1.SearchResponse.Result
 */
export const SearchResponse_Result = proto3.makeMessageType(
  "operand.v1.SearchResponse.Result",
  () => [
    { no: 1, name: "object", kind: "message", T: Object$ },
    { no: 2, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 3, name: "snippets", kind: "message", T: Snippet, repeated: true },
  ],
  {localName: "SearchResponse_Result"},
);

/**
 * @generated from message operand.v1.SearchWithinRequest
 */
export const SearchWithinRequest = proto3.makeMessageType(
  "operand.v1.SearchWithinRequest",
  () => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
    { no: 3, name: "filter", kind: "message", T: Filter, opt: true },
    { no: 4, name: "object_options", kind: "message", T: ObjectOptions, opt: true },
  ],
);

/**
 * @generated from message operand.v1.SearchWithinResponse
 */
export const SearchWithinResponse = proto3.makeMessageType(
  "operand.v1.SearchWithinResponse",
  () => [
    { no: 1, name: "matches", kind: "message", T: SearchWithinResponse_Match, repeated: true },
    { no: 2, name: "objects", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Object$} },
  ],
);

/**
 * @generated from message operand.v1.SearchWithinResponse.Match
 */
export const SearchWithinResponse_Match = proto3.makeMessageType(
  "operand.v1.SearchWithinResponse.Match",
  () => [
    { no: 1, name: "match_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "extra", kind: "message", T: Properties, opt: true },
  ],
  {localName: "SearchWithinResponse_Match"},
);

