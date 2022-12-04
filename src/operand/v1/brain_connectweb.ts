// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=ts"
// @generated from file operand/v1/brain.proto (package operand.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {MigrateRequest, MigrateResponse, RequiresMigrationRequest, RequiresMigrationResponse} from "./brain_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * BrainService provides primitives to migrate an existing legacy "brain" user to the new platform.
 * This is a temporary service that will be removed once the migration is complete.
 * Note: Requires an API key passed via the `Authorization` header.
 *
 * @generated from service operand.v1.BrainService
 */
export const BrainService = {
  typeName: "operand.v1.BrainService",
  methods: {
    /**
     * RequiresMigration returns true if the user has a legacy "brain" account, and we're able to
     * migrate the contents of their personal index to the new platform.
     *
     * @generated from rpc operand.v1.BrainService.RequiresMigration
     */
    requiresMigration: {
      name: "RequiresMigration",
      I: RequiresMigrationRequest,
      O: RequiresMigrationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Migrate migrates the contents of the user's legacy "brain" personal index to the new platform,
     * putting the contents in a specific destination index. This call happens in the background,
     * and thus the RPC returns immediately. The user will be able to see their index being populated
     * slowly over the next few minutes, depending on the size of their index.
     *
     * @generated from rpc operand.v1.BrainService.Migrate
     */
    migrate: {
      name: "Migrate",
      I: MigrateRequest,
      O: MigrateResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
