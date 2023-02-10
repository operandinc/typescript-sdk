// @generated by protoc-gen-es v1.0.0 with parameter "target=ts+js"
// @generated from file file/v1/file.proto (package file.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { GroupProfile, UserProfile } from "../../tenant/v1/tenant_pb.js";

/**
 * SharingRole is the role of a user in a shared file.
 *
 * @generated from enum file.v1.SharingRole
 */
export const SharingRole = proto3.makeEnum(
  "file.v1.SharingRole",
  [
    {no: 0, name: "SHARING_ROLE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SHARING_ROLE_OWNER", localName: "OWNER"},
    {no: 2, name: "SHARING_ROLE_EDITOR", localName: "EDITOR"},
    {no: 3, name: "SHARING_ROLE_VIEWER", localName: "VIEWER"},
  ],
);

/**
 * SyncKind is an enumeration over the various supported syncs.
 *
 * @generated from enum file.v1.SyncKind
 */
export const SyncKind = proto3.makeEnum(
  "file.v1.SyncKind",
  [
    {no: 0, name: "SYNC_KIND_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SYNC_KIND_SITEMAP", localName: "SITEMAP"},
    {no: 2, name: "SYNC_KIND_RSS", localName: "RSS"},
    {no: 3, name: "SYNC_KIND_SLACK", localName: "SLACK"},
    {no: 4, name: "SYNC_KIND_GITHUB_REPOSITORY", localName: "GITHUB_REPOSITORY"},
    {no: 5, name: "SYNC_KIND_NOTION", localName: "NOTION"},
    {no: 6, name: "SYNC_KIND_DISCORD", localName: "DISCORD"},
    {no: 7, name: "SYNC_KIND_LINEAR", localName: "LINEAR"},
    {no: 8, name: "SYNC_KIND_MEETING_BOT", localName: "MEETING_BOT"},
  ],
);

/**
 * IndexingStatus is the status of a file's indexing.
 * If ready, the file's contents will show up in search results.
 *
 * @generated from enum file.v1.IndexingStatus
 */
export const IndexingStatus = proto3.makeEnum(
  "file.v1.IndexingStatus",
  [
    {no: 0, name: "INDEXING_STATUS_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "INDEXING_STATUS_QUEUED", localName: "QUEUED"},
    {no: 2, name: "INDEXING_STATUS_INDEXING", localName: "INDEXING"},
    {no: 3, name: "INDEXING_STATUS_READY", localName: "READY"},
    {no: 4, name: "INDEXING_STATUS_FAILED", localName: "FAILED"},
    {no: 5, name: "INDEXING_STATUS_UNSUPPORTED", localName: "UNSUPPORTED"},
  ],
);

/**
 * PaginationRequest contains generic pagination request information.
 *
 * @generated from message file.v1.PaginationRequest
 */
export const PaginationRequest = proto3.makeMessageType(
  "file.v1.PaginationRequest",
  () => [
    { no: 1, name: "cursor", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * PaginationResponse contains generic pagination response information.
 *
 * @generated from message file.v1.PaginationResponse
 */
export const PaginationResponse = proto3.makeMessageType(
  "file.v1.PaginationResponse",
  () => [
    { no: 1, name: "next_cursor", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * ReturnedFileOptions contains options for the returned file object (i.e. in the response).
 *
 * @generated from message file.v1.ReturnedFileOptions
 */
export const ReturnedFileOptions = proto3.makeMessageType(
  "file.v1.ReturnedFileOptions",
  () => [
    { no: 1, name: "include_parents", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * FileSelector selects a file by ID or path.
 *
 * @generated from message file.v1.FileSelector
 */
export const FileSelector = proto3.makeMessageType(
  "file.v1.FileSelector",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "selector" },
    { no: 2, name: "by_name", kind: "message", T: FileSelector_ByName, oneof: "selector" },
  ],
);

/**
 * @generated from message file.v1.FileSelector.ByName
 */
export const FileSelector_ByName = proto3.makeMessageType(
  "file.v1.FileSelector.ByName",
  () => [
    { no: 1, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "FileSelector_ByName"},
);

/**
 * GetFileRequest requests a specific file by ID.
 *
 * @generated from message file.v1.GetFileRequest
 */
export const GetFileRequest = proto3.makeMessageType(
  "file.v1.GetFileRequest",
  () => [
    { no: 1, name: "selector", kind: "message", T: FileSelector },
    { no: 2, name: "return_options", kind: "message", T: ReturnedFileOptions, opt: true },
  ],
);

/**
 * GetFileResponse returns a file.
 *
 * @generated from message file.v1.GetFileResponse
 */
export const GetFileResponse = proto3.makeMessageType(
  "file.v1.GetFileResponse",
  () => [
    { no: 1, name: "file", kind: "message", T: File },
  ],
);

/**
 * FileFilter contains filters for listing files.
 *
 * @generated from message file.v1.FileFilter
 */
export const FileFilter = proto3.makeMessageType(
  "file.v1.FileFilter",
  () => [
    { no: 1, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "favorite", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 3, name: "shared", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * ListFilesRequest requests a list of files.
 * Files will be returned in descending order of last updated time.
 *
 * @generated from message file.v1.ListFilesRequest
 */
export const ListFilesRequest = proto3.makeMessageType(
  "file.v1.ListFilesRequest",
  () => [
    { no: 1, name: "filter", kind: "message", T: FileFilter, opt: true },
    { no: 2, name: "pagination", kind: "message", T: PaginationRequest, opt: true },
    { no: 3, name: "return_options", kind: "message", T: ReturnedFileOptions, opt: true },
  ],
);

/**
 * ListFilesResponse returns a list of files.
 *
 * @generated from message file.v1.ListFilesResponse
 */
export const ListFilesResponse = proto3.makeMessageType(
  "file.v1.ListFilesResponse",
  () => [
    { no: 1, name: "files", kind: "message", T: File, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PaginationResponse },
  ],
);

/**
 * CreateFileMeta contains metadata for a file. Must be passed
 * at least once during a CreateFileRequest client stream, and
 * the handler will ignore previous CreateFileMeta messages.
 *
 * @generated from message file.v1.CreateFileMeta
 */
export const CreateFileMeta = proto3.makeMessageType(
  "file.v1.CreateFileMeta",
  () => [
    { no: 1, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "properties", kind: "message", T: Properties, opt: true },
  ],
);

/**
 * CreateFileRequest creates a new file.
 *
 * @generated from message file.v1.CreateFileRequest
 */
export const CreateFileRequest = proto3.makeMessageType(
  "file.v1.CreateFileRequest",
  () => [
    { no: 1, name: "meta", kind: "message", T: CreateFileMeta, opt: true },
    { no: 2, name: "data_chunk", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "return_options", kind: "message", T: ReturnedFileOptions, opt: true },
  ],
);

/**
 * CreateFileResponse returns a file.
 *
 * @generated from message file.v1.CreateFileResponse
 */
export const CreateFileResponse = proto3.makeMessageType(
  "file.v1.CreateFileResponse",
  () => [
    { no: 1, name: "file", kind: "message", T: File },
  ],
);

/**
 * DeleteFileRequest deletes a file.
 * Note: If the file is a shared directory that you don't own,
 * deleting the file will "unsubscribe" you from the directory.
 *
 * @generated from message file.v1.DeleteFileRequest
 */
export const DeleteFileRequest = proto3.makeMessageType(
  "file.v1.DeleteFileRequest",
  () => [
    { no: 1, name: "selector", kind: "message", T: FileSelector },
  ],
);

/**
 * DeleteFileResponse returns a file.
 *
 * @generated from message file.v1.DeleteFileResponse
 */
export const DeleteFileResponse = proto3.makeMessageType(
  "file.v1.DeleteFileResponse",
  [],
);

/**
 * UpdateFileRequest updates a file.
 *
 * @generated from message file.v1.UpdateFileRequest
 */
export const UpdateFileRequest = proto3.makeMessageType(
  "file.v1.UpdateFileRequest",
  () => [
    { no: 1, name: "selector", kind: "message", T: FileSelector },
    { no: 2, name: "return_options", kind: "message", T: ReturnedFileOptions, opt: true },
    { no: 3, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 5, name: "favorite", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * UpdateFileResponse returns a file.
 *
 * @generated from message file.v1.UpdateFileResponse
 */
export const UpdateFileResponse = proto3.makeMessageType(
  "file.v1.UpdateFileResponse",
  () => [
    { no: 1, name: "file", kind: "message", T: File },
  ],
);

/**
 * ShareFileRequest shares a file with another user.
 *
 * @generated from message file.v1.ShareFileRequest
 */
export const ShareFileRequest = proto3.makeMessageType(
  "file.v1.ShareFileRequest",
  () => [
    { no: 1, name: "selector", kind: "message", T: FileSelector },
    { no: 2, name: "role", kind: "enum", T: proto3.getEnumType(SharingRole) },
    { no: 3, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "target" },
    { no: 4, name: "group_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "target" },
  ],
);

/**
 * ShareFileResponse is the response to a ShareFileRequest.
 *
 * @generated from message file.v1.ShareFileResponse
 */
export const ShareFileResponse = proto3.makeMessageType(
  "file.v1.ShareFileResponse",
  () => [
    { no: 1, name: "file_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "shared_with", kind: "message", T: SharedWith },
  ],
);

/**
 * UnshareFileRequest deletes an existing share of a file with another user.
 *
 * @generated from message file.v1.UnshareFileRequest
 */
export const UnshareFileRequest = proto3.makeMessageType(
  "file.v1.UnshareFileRequest",
  () => [
    { no: 1, name: "share_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * UnshareFileResponse is the response to a UnshareFileRequest.
 *
 * @generated from message file.v1.UnshareFileResponse
 */
export const UnshareFileResponse = proto3.makeMessageType(
  "file.v1.UnshareFileResponse",
  [],
);

/**
 * SitemapParams contains parameters for a sitemap sync.
 *
 * @generated from message file.v1.SitemapParams
 */
export const SitemapParams = proto3.makeMessageType(
  "file.v1.SitemapParams",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * RSSParams contains parameters for an RSS sync.
 *
 * @generated from message file.v1.RSSParams
 */
export const RSSParams = proto3.makeMessageType(
  "file.v1.RSSParams",
  () => [
    { no: 1, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * SlackParams contains parameters for a Slack sync.
 *
 * todo
 *
 * @generated from message file.v1.SlackParams
 */
export const SlackParams = proto3.makeMessageType(
  "file.v1.SlackParams",
  [],
);

/**
 * GithubRepositoryParams contains parameters for a Github repository sync.
 *
 * todo
 *
 * @generated from message file.v1.GithubRepositoryParams
 */
export const GithubRepositoryParams = proto3.makeMessageType(
  "file.v1.GithubRepositoryParams",
  [],
);

/**
 * NotionParams contains parameters for a Notion sync.
 *
 * @generated from message file.v1.NotionParams
 */
export const NotionParams = proto3.makeMessageType(
  "file.v1.NotionParams",
  () => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DiscordParams contains parameters for a Discord sync.
 *
 * todo
 *
 * @generated from message file.v1.DiscordParams
 */
export const DiscordParams = proto3.makeMessageType(
  "file.v1.DiscordParams",
  [],
);

/**
 * LinearParams contains parameters for a Linear sync.
 *
 * todo
 *
 * @generated from message file.v1.LinearParams
 */
export const LinearParams = proto3.makeMessageType(
  "file.v1.LinearParams",
  [],
);

/**
 * MeetingBotParams contains parameters for a Meeting Bot sync.
 *
 * todo
 *
 * @generated from message file.v1.MeetingBotParams
 */
export const MeetingBotParams = proto3.makeMessageType(
  "file.v1.MeetingBotParams",
  [],
);

/**
 * SyncParams contains parameters for a Sync.
 *
 * @generated from message file.v1.SyncParams
 */
export const SyncParams = proto3.makeMessageType(
  "file.v1.SyncParams",
  () => [
    { no: 1, name: "sitemap", kind: "message", T: SitemapParams, oneof: "params" },
    { no: 2, name: "rss", kind: "message", T: RSSParams, oneof: "params" },
    { no: 3, name: "slack", kind: "message", T: SlackParams, oneof: "params" },
    { no: 4, name: "github_repository", kind: "message", T: GithubRepositoryParams, oneof: "params" },
    { no: 5, name: "notion", kind: "message", T: NotionParams, oneof: "params" },
    { no: 6, name: "discord", kind: "message", T: DiscordParams, oneof: "params" },
    { no: 7, name: "linear", kind: "message", T: LinearParams, oneof: "params" },
    { no: 8, name: "meeting_bot", kind: "message", T: MeetingBotParams, oneof: "params" },
  ],
);

/**
 * AttachSyncRequest attaches an Sync to a file.
 *
 * @generated from message file.v1.AttachSyncRequest
 */
export const AttachSyncRequest = proto3.makeMessageType(
  "file.v1.AttachSyncRequest",
  () => [
    { no: 1, name: "selector", kind: "message", T: FileSelector },
    { no: 2, name: "kind", kind: "enum", T: proto3.getEnumType(SyncKind) },
    { no: 3, name: "params", kind: "message", T: SyncParams },
  ],
);

/**
 * Sync contains information about a sync attached to a file.
 *
 * @generated from message file.v1.Sync
 */
export const Sync = proto3.makeMessageType(
  "file.v1.Sync",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "attached_file_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "updated_at", kind: "message", T: Timestamp },
    { no: 5, name: "creator", kind: "message", T: UserProfile },
    { no: 6, name: "kind", kind: "enum", T: proto3.getEnumType(SyncKind) },
    { no: 7, name: "params", kind: "message", T: SyncParams },
  ],
);

/**
 * AttachSyncResponse returns a Sync.
 *
 * @generated from message file.v1.AttachSyncResponse
 */
export const AttachSyncResponse = proto3.makeMessageType(
  "file.v1.AttachSyncResponse",
  () => [
    { no: 1, name: "sync", kind: "message", T: Sync },
  ],
);

/**
 * DeleteSyncRequest deletes a Sync.
 *
 * @generated from message file.v1.DeleteSyncRequest
 */
export const DeleteSyncRequest = proto3.makeMessageType(
  "file.v1.DeleteSyncRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * DeleteSyncResponse is the response to a DeleteSyncRequest.
 *
 * @generated from message file.v1.DeleteSyncResponse
 */
export const DeleteSyncResponse = proto3.makeMessageType(
  "file.v1.DeleteSyncResponse",
  [],
);

/**
 * TextArray is a repeated string.
 *
 * @generated from message file.v1.TextArray
 */
export const TextArray = proto3.makeMessageType(
  "file.v1.TextArray",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * NumberArray is a repeated double.
 *
 * @generated from message file.v1.NumberArray
 */
export const NumberArray = proto3.makeMessageType(
  "file.v1.NumberArray",
  () => [
    { no: 1, name: "values", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
  ],
);

/**
 * Property is an arbitrary key-value pair attached to a file.
 * Files inherit properties from their parents, and can override
 * inherited properties if needed.
 *
 * @generated from message file.v1.Property
 */
export const Property = proto3.makeMessageType(
  "file.v1.Property",
  () => [
    { no: 2, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value" },
    { no: 3, name: "number", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, oneof: "value" },
    { no: 4, name: "text_array", kind: "message", T: TextArray, oneof: "value" },
    { no: 5, name: "number_array", kind: "message", T: NumberArray, oneof: "value" },
  ],
);

/**
 * Properties is a set of properties.
 *
 * @generated from message file.v1.Properties
 */
export const Properties = proto3.makeMessageType(
  "file.v1.Properties",
  () => [
    { no: 1, name: "properties", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Property} },
  ],
);

/**
 * SharedWith contains information about a file shared with another user.
 *
 * @generated from message file.v1.SharedWith
 */
export const SharedWith = proto3.makeMessageType(
  "file.v1.SharedWith",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "role", kind: "enum", T: proto3.getEnumType(SharingRole) },
    { no: 3, name: "user", kind: "message", T: UserProfile, oneof: "tenant" },
    { no: 4, name: "group", kind: "message", T: GroupProfile, oneof: "tenant" },
  ],
);

/**
 * File is the core data structure for files, and can represent
 * both a traditional file as well as a directory. Directories are
 * null-sized files (i.e. size_bytes not set).
 *
 * @generated from message file.v1.File
 */
export const File = proto3.makeMessageType(
  "file.v1.File",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "parent_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "updated_at", kind: "message", T: Timestamp },
    { no: 5, name: "last_accessed_at", kind: "message", T: Timestamp },
    { no: 6, name: "indexing_status", kind: "enum", T: proto3.getEnumType(IndexingStatus) },
    { no: 7, name: "creator", kind: "message", T: UserProfile },
    { no: 8, name: "role", kind: "enum", T: proto3.getEnumType(SharingRole) },
    { no: 9, name: "size_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */, opt: true },
    { no: 10, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "download_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "properties", kind: "message", T: Properties },
    { no: 13, name: "parents", kind: "message", T: File, repeated: true },
    { no: 14, name: "shared_with", kind: "message", T: SharedWith, repeated: true },
    { no: 15, name: "sync", kind: "message", T: Sync, opt: true },
    { no: 16, name: "favorite", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

