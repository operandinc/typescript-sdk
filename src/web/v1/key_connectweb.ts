// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=ts"
// @generated from file web/v1/key.proto (package web.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {CreateKeyRequest, CreateKeyResponse, DeleteKeyRequest, DeleteKeyResponse, ListKeysRequest, ListKeysResponse} from "./key_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * KeyService is used by the user to manage their API keys. These are used to perform operations
 * on the indexes that the user owns or is subscribed to.
 *
 * @generated from service web.v1.KeyService
 */
export const KeyService = {
  typeName: "web.v1.KeyService",
  methods: {
    /**
     * CreateKey creates a new API key for the user.
     *
     * @generated from rpc web.v1.KeyService.CreateKey
     */
    createKey: {
      name: "CreateKey",
      I: CreateKeyRequest,
      O: CreateKeyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListKeys lists all the API keys for the user.
     *
     * @generated from rpc web.v1.KeyService.ListKeys
     */
    listKeys: {
      name: "ListKeys",
      I: ListKeysRequest,
      O: ListKeysResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteKey deletes an API key for the user.
     *
     * @generated from rpc web.v1.KeyService.DeleteKey
     */
    deleteKey: {
      name: "DeleteKey",
      I: DeleteKeyRequest,
      O: DeleteKeyResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
