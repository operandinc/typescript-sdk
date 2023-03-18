// @generated by protoc-gen-es v1.0.0 with parameter "target=ts+js"
// @generated from file operand/v1/operand.proto (package operand.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { File, Property, ReturnedFileOptions } from "../../file/v1/file_pb.js";

/**
 * SearchRequest is the request for the Search method.
 *
 * @generated from message operand.v1.SearchRequest
 */
export class SearchRequest extends Message<SearchRequest> {
  /**
   * The query to search for.
   *
   * @generated from field: string query = 1;
   */
  query = "";

  /**
   * The maximum number of results to return.
   *
   * @generated from field: int32 max_results = 2;
   */
  maxResults = 0;

  /**
   * The parent directory to search in.
   * If unspecified, will search all files. If empty, will search root. Otherwise, will search within a directory.
   *
   * @generated from field: optional string parent_id = 3;
   */
  parentId?: string;

  /**
   * The filter to apply to the search results. This is based on any
   * properties that have been set on the files.
   *
   * @generated from field: optional operand.v1.Filter filter = 4;
   */
  filter?: Filter;

  /**
   * Options for the returned files.
   *
   * @generated from field: optional file.v1.ReturnedFileOptions file_return_options = 5;
   */
  fileReturnOptions?: ReturnedFileOptions;

  /**
   * Optionally check if this query is conversational, i.e. a question.
   * The UI can use this to determine whether or not to start a conversation.
   *
   * @generated from field: optional bool check_conversational = 6;
   */
  checkConversational?: boolean;

  /**
   * Optionally include N adjacent snippets (if available) for each match.
   *
   * @generated from field: optional int32 adjacent_snippets = 7;
   */
  adjacentSnippets?: number;

  constructor(data?: PartialMessage<SearchRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.SearchRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "max_results", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "filter", kind: "message", T: Filter, opt: true },
    { no: 5, name: "file_return_options", kind: "message", T: ReturnedFileOptions, opt: true },
    { no: 6, name: "check_conversational", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 7, name: "adjacent_snippets", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchRequest {
    return new SearchRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchRequest {
    return new SearchRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchRequest {
    return new SearchRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SearchRequest | PlainMessage<SearchRequest> | undefined, b: SearchRequest | PlainMessage<SearchRequest> | undefined): boolean {
    return proto3.util.equals(SearchRequest, a, b);
  }
}

/**
 * ContentMatch is a match of a snippet of content from a file.
 *
 * @generated from message operand.v1.ContentMatch
 */
export class ContentMatch extends Message<ContentMatch> {
  /**
   * @generated from field: string match_id = 1;
   */
  matchId = "";

  /**
   * @generated from field: string file_id = 2;
   */
  fileId = "";

  /**
   * @generated from field: string snippet = 3;
   */
  snippet = "";

  /**
   * @generated from field: float score = 4;
   */
  score = 0;

  /**
   * The N adjacent snippets (if available) for this match.
   *
   * @generated from field: repeated string before_snippets = 5;
   */
  beforeSnippets: string[] = [];

  /**
   * @generated from field: repeated string after_snippets = 6;
   */
  afterSnippets: string[] = [];

  constructor(data?: PartialMessage<ContentMatch>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.ContentMatch";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "match_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "file_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "snippet", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "score", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
    { no: 5, name: "before_snippets", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "after_snippets", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContentMatch {
    return new ContentMatch().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContentMatch {
    return new ContentMatch().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContentMatch {
    return new ContentMatch().fromJsonString(jsonString, options);
  }

  static equals(a: ContentMatch | PlainMessage<ContentMatch> | undefined, b: ContentMatch | PlainMessage<ContentMatch> | undefined): boolean {
    return proto3.util.equals(ContentMatch, a, b);
  }
}

/**
 * SearchResponse is the response for the Search method.
 *
 * @generated from message operand.v1.SearchResponse
 */
export class SearchResponse extends Message<SearchResponse> {
  /**
   * @generated from field: repeated operand.v1.ContentMatch matches = 1;
   */
  matches: ContentMatch[] = [];

  /**
   * @generated from field: map<string, file.v1.File> files = 2;
   */
  files: { [key: string]: File } = {};

  /**
   * Whether or not the query was conversational, i.e. a question.
   * Only set if check_conversational was set to true in the request.
   *
   * @generated from field: optional bool conversational = 3;
   */
  conversational?: boolean;

  constructor(data?: PartialMessage<SearchResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.SearchResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "matches", kind: "message", T: ContentMatch, repeated: true },
    { no: 2, name: "files", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: File} },
    { no: 3, name: "conversational", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchResponse {
    return new SearchResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchResponse {
    return new SearchResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchResponse {
    return new SearchResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SearchResponse | PlainMessage<SearchResponse> | undefined, b: SearchResponse | PlainMessage<SearchResponse> | undefined): boolean {
    return proto3.util.equals(SearchResponse, a, b);
  }
}

/**
 * Filter allows search results to be filtered according to the properties of files.
 *
 * @generated from message operand.v1.Filter
 */
export class Filter extends Message<Filter> {
  /**
   * @generated from field: repeated operand.v1.Condition conditions = 1;
   */
  conditions: Condition[] = [];

  constructor(data?: PartialMessage<Filter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.Filter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conditions", kind: "message", T: Condition, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Filter {
    return new Filter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Filter {
    return new Filter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Filter {
    return new Filter().fromJsonString(jsonString, options);
  }

  static equals(a: Filter | PlainMessage<Filter> | undefined, b: Filter | PlainMessage<Filter> | undefined): boolean {
    return proto3.util.equals(Filter, a, b);
  }
}

/**
 * NotCondition is the negation of a condition.
 *
 * @generated from message operand.v1.NotCondition
 */
export class NotCondition extends Message<NotCondition> {
  /**
   * @generated from field: operand.v1.Condition condition = 1;
   */
  condition?: Condition;

  constructor(data?: PartialMessage<NotCondition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.NotCondition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "condition", kind: "message", T: Condition },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NotCondition {
    return new NotCondition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NotCondition {
    return new NotCondition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NotCondition {
    return new NotCondition().fromJsonString(jsonString, options);
  }

  static equals(a: NotCondition | PlainMessage<NotCondition> | undefined, b: NotCondition | PlainMessage<NotCondition> | undefined): boolean {
    return proto3.util.equals(NotCondition, a, b);
  }
}

/**
 * KeyedProperty is a key associated with a property value.
 *
 * @generated from message operand.v1.KeyedProperty
 */
export class KeyedProperty extends Message<KeyedProperty> {
  /**
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * @generated from field: file.v1.Property property = 2;
   */
  property?: Property;

  constructor(data?: PartialMessage<KeyedProperty>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.KeyedProperty";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "property", kind: "message", T: Property },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeyedProperty {
    return new KeyedProperty().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeyedProperty {
    return new KeyedProperty().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeyedProperty {
    return new KeyedProperty().fromJsonString(jsonString, options);
  }

  static equals(a: KeyedProperty | PlainMessage<KeyedProperty> | undefined, b: KeyedProperty | PlainMessage<KeyedProperty> | undefined): boolean {
    return proto3.util.equals(KeyedProperty, a, b);
  }
}

/**
 * Range is a numeric range for a property value.
 *
 * @generated from message operand.v1.Range
 */
export class Range extends Message<Range> {
  /**
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * @generated from field: optional double lt = 2;
   */
  lt?: number;

  /**
   * @generated from field: optional double lte = 3;
   */
  lte?: number;

  /**
   * @generated from field: optional double gt = 4;
   */
  gt?: number;

  /**
   * @generated from field: optional double gte = 5;
   */
  gte?: number;

  constructor(data?: PartialMessage<Range>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.Range";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "lt", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 3, name: "lte", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 4, name: "gt", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
    { no: 5, name: "gte", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Range {
    return new Range().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Range {
    return new Range().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Range {
    return new Range().fromJsonString(jsonString, options);
  }

  static equals(a: Range | PlainMessage<Range> | undefined, b: Range | PlainMessage<Range> | undefined): boolean {
    return proto3.util.equals(Range, a, b);
  }
}

/**
 * Condition is a condition that must be satisified by a file's properties.
 *
 * @generated from message operand.v1.Condition
 */
export class Condition extends Message<Condition> {
  /**
   * @generated from oneof operand.v1.Condition.condition
   */
  condition: {
    /**
     * @generated from field: operand.v1.KeyedProperty property = 1;
     */
    value: KeyedProperty;
    case: "property";
  } | {
    /**
     * @generated from field: operand.v1.Range range = 2;
     */
    value: Range;
    case: "range";
  } | {
    /**
     * @generated from field: operand.v1.Filter and = 3;
     */
    value: Filter;
    case: "and";
  } | {
    /**
     * @generated from field: operand.v1.Filter or = 4;
     */
    value: Filter;
    case: "or";
  } | {
    /**
     * @generated from field: operand.v1.NotCondition not = 5;
     */
    value: NotCondition;
    case: "not";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Condition>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.Condition";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "property", kind: "message", T: KeyedProperty, oneof: "condition" },
    { no: 2, name: "range", kind: "message", T: Range, oneof: "condition" },
    { no: 3, name: "and", kind: "message", T: Filter, oneof: "condition" },
    { no: 4, name: "or", kind: "message", T: Filter, oneof: "condition" },
    { no: 5, name: "not", kind: "message", T: NotCondition, oneof: "condition" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Condition {
    return new Condition().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Condition {
    return new Condition().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Condition {
    return new Condition().fromJsonString(jsonString, options);
  }

  static equals(a: Condition | PlainMessage<Condition> | undefined, b: Condition | PlainMessage<Condition> | undefined): boolean {
    return proto3.util.equals(Condition, a, b);
  }
}

/**
 * ConversationOptions are options for a conversation.
 *
 * @generated from message operand.v1.ConversationOptions
 */
export class ConversationOptions extends Message<ConversationOptions> {
  /**
   * The parent directory, i.e. the chatbot will only be able to access files
   * within this directory (and its subdirectories).
   *
   * @generated from field: optional string parent_id = 1;
   */
  parentId?: string;

  /**
   * The filter to apply, i.e. if specified, the chatbot will
   * only be able to access files that match the filter.
   *
   * @generated from field: optional operand.v1.Filter filter = 2;
   */
  filter?: Filter;

  /**
   * Options for the returned files.
   *
   * @generated from field: optional file.v1.ReturnedFileOptions file_return_options = 3;
   */
  fileReturnOptions?: ReturnedFileOptions;

  /**
   * The ID of the file that the user is currently viewing, if any.
   * This is used for context within the conversation.
   *
   * @generated from field: optional string viewing_file_id = 4;
   */
  viewingFileId?: string;

  /**
   * The name of the user, if known. If not specified, will default
   * to the name of the authenticated user, falling back to "User"
   * if no name is associated with the user.
   *
   * @generated from field: optional string end_user_name = 5;
   */
  endUserName?: string;

  constructor(data?: PartialMessage<ConversationOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.ConversationOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "filter", kind: "message", T: Filter, opt: true },
    { no: 3, name: "file_return_options", kind: "message", T: ReturnedFileOptions, opt: true },
    { no: 4, name: "viewing_file_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "end_user_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConversationOptions {
    return new ConversationOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConversationOptions {
    return new ConversationOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConversationOptions {
    return new ConversationOptions().fromJsonString(jsonString, options);
  }

  static equals(a: ConversationOptions | PlainMessage<ConversationOptions> | undefined, b: ConversationOptions | PlainMessage<ConversationOptions> | undefined): boolean {
    return proto3.util.equals(ConversationOptions, a, b);
  }
}

/**
 * ConverseRequest is the request for the Converse method.
 *
 * @generated from message operand.v1.ConverseRequest
 */
export class ConverseRequest extends Message<ConverseRequest> {
  /**
   * The conversation ID. If this is the first request for a conversation,
   * this should be left empty. Otherwise, it should be the same as the
   * conversation ID returned in the previous response.
   *
   * @generated from field: optional string conversation_id = 1;
   */
  conversationId?: string;

  /**
   * The user's input.
   *
   * @generated from field: string input = 2;
   */
  input = "";

  /**
   * Options for the conversation. If this isn't the first message within
   * a conversation, i.e. conversation_id is set, then these options will
   * be ignored (i.e. the options are persisted for the duration of the
   * conversation).
   *
   * @generated from field: optional operand.v1.ConversationOptions options = 3;
   */
  options?: ConversationOptions;

  constructor(data?: PartialMessage<ConverseRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.ConverseRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conversation_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "input", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "options", kind: "message", T: ConversationOptions, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConverseRequest {
    return new ConverseRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConverseRequest {
    return new ConverseRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConverseRequest {
    return new ConverseRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ConverseRequest | PlainMessage<ConverseRequest> | undefined, b: ConverseRequest | PlainMessage<ConverseRequest> | undefined): boolean {
    return proto3.util.equals(ConverseRequest, a, b);
  }
}

/**
 * ConverseResponse is the response for the Converse method.
 *
 * @generated from message operand.v1.ConverseResponse
 */
export class ConverseResponse extends Message<ConverseResponse> {
  /**
   * The conversation ID, which should be passed in to the next request.
   * Will be included in all responses for a given conversation.
   *
   * @generated from field: string conversation_id = 1;
   */
  conversationId = "";

  /**
   * A part of the response message from the chatbot.
   * These parts will be streamed back to the client as they are generated,
   * and should be concatenated together to form the full response.
   *
   * @generated from field: string message_part = 2;
   */
  messagePart = "";

  /**
   * The files that are relevant to the response.
   * This will only be sent in the first response for a given request.
   *
   * @generated from field: repeated file.v1.File relevant_files = 3;
   */
  relevantFiles: File[] = [];

  /**
   * The confidence score of the response, i.e. how confident the chatbot
   * is that the response is factually correct given the files that it has
   * access to. A few notes:
   * - Will only be sent after all message parts have been sent. If not sent, assume confidence score of 0.
   * - Will range from 0 -> 1, where 0 is least confident and 1 is most confident.
   * - Certain conversation options (i.e. filter and parent_id) can affect which
   *   files the chatbot has access to, and therefore the confidence score.
   *
   * @generated from field: optional double confidence_score = 4;
   */
  confidenceScore?: number;

  constructor(data?: PartialMessage<ConverseResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.ConverseResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conversation_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "message_part", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relevant_files", kind: "message", T: File, repeated: true },
    { no: 4, name: "confidence_score", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConverseResponse {
    return new ConverseResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConverseResponse {
    return new ConverseResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConverseResponse {
    return new ConverseResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ConverseResponse | PlainMessage<ConverseResponse> | undefined, b: ConverseResponse | PlainMessage<ConverseResponse> | undefined): boolean {
    return proto3.util.equals(ConverseResponse, a, b);
  }
}

/**
 * SuggestionsRequest is the request for the Suggestions method.
 *
 * @generated from message operand.v1.SuggestionsRequest
 */
export class SuggestionsRequest extends Message<SuggestionsRequest> {
  /**
   * The maximum number of suggestions to return.
   *
   * @generated from field: int32 max_results = 1;
   */
  maxResults = 0;

  /**
   * The parent directory to search in.
   * If unspecified, will search all files. If empty, will search root. Otherwise, will search within a directory.
   *
   * @generated from field: optional string parent_id = 2;
   */
  parentId?: string;

  /**
   * The filter to apply to the content. Suggestions will only be based
   * on the content that matches the filter.
   *
   * @generated from field: optional operand.v1.Filter filter = 3;
   */
  filter?: Filter;

  /**
   * If true, won't take into account any per-user relevance information
   * when computing the suggestions. This is recommended for any API users,
   * as you wouldn't want to be using your personal relevance information
   * for your end-users.
   *
   * @generated from field: optional bool disable_personalization = 4;
   */
  disablePersonalization?: boolean;

  constructor(data?: PartialMessage<SuggestionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.SuggestionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_results", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "filter", kind: "message", T: Filter, opt: true },
    { no: 4, name: "disable_personalization", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuggestionsRequest {
    return new SuggestionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuggestionsRequest {
    return new SuggestionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuggestionsRequest {
    return new SuggestionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SuggestionsRequest | PlainMessage<SuggestionsRequest> | undefined, b: SuggestionsRequest | PlainMessage<SuggestionsRequest> | undefined): boolean {
    return proto3.util.equals(SuggestionsRequest, a, b);
  }
}

/**
 * SuggestionsResponse is the response for the Suggestions method.
 *
 * @generated from message operand.v1.SuggestionsResponse
 */
export class SuggestionsResponse extends Message<SuggestionsResponse> {
  /**
   * The list of suggestions.
   *
   * @generated from field: repeated string suggestions = 1;
   */
  suggestions: string[] = [];

  constructor(data?: PartialMessage<SuggestionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.SuggestionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "suggestions", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SuggestionsResponse {
    return new SuggestionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SuggestionsResponse {
    return new SuggestionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SuggestionsResponse {
    return new SuggestionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SuggestionsResponse | PlainMessage<SuggestionsResponse> | undefined, b: SuggestionsResponse | PlainMessage<SuggestionsResponse> | undefined): boolean {
    return proto3.util.equals(SuggestionsResponse, a, b);
  }
}

