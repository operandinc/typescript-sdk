// @generated by protoc-gen-es v0.1.1 with parameter "target=ts+js"
// @generated from file operand/v1/brain.proto (package operand.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";

/**
 * RequiresMigrationRequest is the request for the RequiresMigration RPC.
 *
 * @generated from message operand.v1.RequiresMigrationRequest
 */
export class RequiresMigrationRequest extends Message<RequiresMigrationRequest> {
  constructor(data?: PartialMessage<RequiresMigrationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.RequiresMigrationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequiresMigrationRequest {
    return new RequiresMigrationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequiresMigrationRequest {
    return new RequiresMigrationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequiresMigrationRequest {
    return new RequiresMigrationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: RequiresMigrationRequest | PlainMessage<RequiresMigrationRequest> | undefined, b: RequiresMigrationRequest | PlainMessage<RequiresMigrationRequest> | undefined): boolean {
    return proto3.util.equals(RequiresMigrationRequest, a, b);
  }
}

/**
 * RequiresMigrationResponse is the response for the RequiresMigration RPC.
 *
 * @generated from message operand.v1.RequiresMigrationResponse
 */
export class RequiresMigrationResponse extends Message<RequiresMigrationResponse> {
  /**
   * @generated from field: bool requires_migration = 1;
   */
  requiresMigration = false;

  constructor(data?: PartialMessage<RequiresMigrationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.RequiresMigrationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "requires_migration", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RequiresMigrationResponse {
    return new RequiresMigrationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RequiresMigrationResponse {
    return new RequiresMigrationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RequiresMigrationResponse {
    return new RequiresMigrationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: RequiresMigrationResponse | PlainMessage<RequiresMigrationResponse> | undefined, b: RequiresMigrationResponse | PlainMessage<RequiresMigrationResponse> | undefined): boolean {
    return proto3.util.equals(RequiresMigrationResponse, a, b);
  }
}

/**
 * MigrateRequest is the request for the Migrate RPC.
 *
 * @generated from message operand.v1.MigrateRequest
 */
export class MigrateRequest extends Message<MigrateRequest> {
  /**
   * @generated from field: string destination_index_id = 1;
   */
  destinationIndexId = "";

  constructor(data?: PartialMessage<MigrateRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.MigrateRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "destination_index_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateRequest {
    return new MigrateRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateRequest {
    return new MigrateRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateRequest {
    return new MigrateRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MigrateRequest | PlainMessage<MigrateRequest> | undefined, b: MigrateRequest | PlainMessage<MigrateRequest> | undefined): boolean {
    return proto3.util.equals(MigrateRequest, a, b);
  }
}

/**
 * MigrateResponse is the response for the Migrate RPC.
 *
 * @generated from message operand.v1.MigrateResponse
 */
export class MigrateResponse extends Message<MigrateResponse> {
  constructor(data?: PartialMessage<MigrateResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "operand.v1.MigrateResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateResponse {
    return new MigrateResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateResponse {
    return new MigrateResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateResponse {
    return new MigrateResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MigrateResponse | PlainMessage<MigrateResponse> | undefined, b: MigrateResponse | PlainMessage<MigrateResponse> | undefined): boolean {
    return proto3.util.equals(MigrateResponse, a, b);
  }
}

