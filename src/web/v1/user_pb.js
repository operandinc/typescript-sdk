// @generated by protoc-gen-es v0.1.1 with parameter "target=ts+js"
// @generated from file web/v1/user.proto (package web.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3, Timestamp} from "@bufbuild/protobuf";
import {UserProfile} from "../../operand/v1/object_pb.js";

/**
 * @generated from enum web.v1.TokenKind
 */
export const TokenKind = proto3.makeEnum(
  "web.v1.TokenKind",
  [
    {no: 0, name: "TOKEN_KIND_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "TOKEN_KIND_LOGIN", localName: "LOGIN"},
    {no: 2, name: "TOKEN_KIND_SESSION", localName: "SESSION"},
  ],
);

/**
 * @generated from enum web.v1.BillingPlan
 */
export const BillingPlan = proto3.makeEnum(
  "web.v1.BillingPlan",
  [
    {no: 0, name: "BILLING_PLAN_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "BILLING_PLAN_FREE", localName: "FREE"},
    {no: 2, name: "BILLING_PLAN_PRO", localName: "PRO"},
    {no: 3, name: "BILLING_PLAN_TEAMS", localName: "TEAMS"},
    {no: 4, name: "BILLING_PLAN_ENTERPRISE", localName: "ENTERPRISE"},
  ],
);

/**
 * @generated from enum web.v1.OAuthProvider
 */
export const OAuthProvider = proto3.makeEnum(
  "web.v1.OAuthProvider",
  [
    {no: 0, name: "O_AUTH_PROVIDER_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "O_AUTH_PROVIDER_GITHUB", localName: "GITHUB"},
  ],
);

/**
 * @generated from message web.v1.LoginRequest
 */
export const LoginRequest = proto3.makeMessageType(
  "web.v1.LoginRequest",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "redirect_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message web.v1.LoginResponse
 */
export const LoginResponse = proto3.makeMessageType(
  "web.v1.LoginResponse",
  () => [
    { no: 1, name: "challenge_sent_at", kind: "message", T: Timestamp },
    { no: 2, name: "challenge_expires_at", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message web.v1.FinalizeLoginRequest
 */
export const FinalizeLoginRequest = proto3.makeMessageType(
  "web.v1.FinalizeLoginRequest",
  () => [
    { no: 1, name: "challenge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message web.v1.Token
 */
export const Token = proto3.makeMessageType(
  "web.v1.Token",
  () => [
    { no: 1, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "created_at", kind: "message", T: Timestamp },
    { no: 3, name: "expires_at", kind: "message", T: Timestamp },
    { no: 4, name: "kind", kind: "enum", T: proto3.getEnumType(TokenKind) },
  ],
);

/**
 * @generated from message web.v1.FinalizeLoginResponse
 */
export const FinalizeLoginResponse = proto3.makeMessageType(
  "web.v1.FinalizeLoginResponse",
  () => [
    { no: 1, name: "session", kind: "message", T: Token },
  ],
);

/**
 * @generated from message web.v1.GetProfileRequest
 */
export const GetProfileRequest = proto3.makeMessageType(
  "web.v1.GetProfileRequest",
  () => [
    { no: 1, name: "handle", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "include_social_stats", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
  ],
);

/**
 * @generated from message web.v1.SocialStats
 */
export const SocialStats = proto3.makeMessageType(
  "web.v1.SocialStats",
  () => [
    { no: 1, name: "indexes", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "subscribers", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message web.v1.GetProfileResponse
 */
export const GetProfileResponse = proto3.makeMessageType(
  "web.v1.GetProfileResponse",
  () => [
    { no: 1, name: "profile", kind: "message", T: UserProfile },
    { no: 2, name: "is_current_user", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "social_stats", kind: "message", T: SocialStats, opt: true },
  ],
);

/**
 * @generated from message web.v1.UpdateProfileRequest
 */
export const UpdateProfileRequest = proto3.makeMessageType(
  "web.v1.UpdateProfileRequest",
  () => [
    { no: 1, name: "handle", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "bio", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message web.v1.UpdateProfileResponse
 */
export const UpdateProfileResponse = proto3.makeMessageType(
  "web.v1.UpdateProfileResponse",
  () => [
    { no: 1, name: "profile", kind: "message", T: UserProfile },
  ],
);

/**
 * @generated from message web.v1.BillingStatusRequest
 */
export const BillingStatusRequest = proto3.makeMessageType(
  "web.v1.BillingStatusRequest",
  [],
);

/**
 * @generated from message web.v1.BillingStatusResponse
 */
export const BillingStatusResponse = proto3.makeMessageType(
  "web.v1.BillingStatusResponse",
  () => [
    { no: 1, name: "stripe_customer_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "plan", kind: "enum", T: proto3.getEnumType(BillingPlan) },
    { no: 3, name: "active_pages", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "page_limit", kind: "scalar", T: 5 /* ScalarType.INT32 */, opt: true },
  ],
);

/**
 * @generated from message web.v1.ConfigureBillingRequest
 */
export const ConfigureBillingRequest = proto3.makeMessageType(
  "web.v1.ConfigureBillingRequest",
  () => [
    { no: 1, name: "plan", kind: "enum", T: proto3.getEnumType(BillingPlan) },
    { no: 2, name: "success_url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "cancel_url", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message web.v1.ConfigureBillingResponse
 */
export const ConfigureBillingResponse = proto3.makeMessageType(
  "web.v1.ConfigureBillingResponse",
  () => [
    { no: 1, name: "checkout_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message web.v1.ManageBillingRequest
 */
export const ManageBillingRequest = proto3.makeMessageType(
  "web.v1.ManageBillingRequest",
  [],
);

/**
 * @generated from message web.v1.ManageBillingResponse
 */
export const ManageBillingResponse = proto3.makeMessageType(
  "web.v1.ManageBillingResponse",
  () => [
    { no: 1, name: "billing_link", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message web.v1.OAuthLinkRequest
 */
export const OAuthLinkRequest = proto3.makeMessageType(
  "web.v1.OAuthLinkRequest",
  () => [
    { no: 1, name: "provider", kind: "enum", T: proto3.getEnumType(OAuthProvider) },
    { no: 2, name: "redirect_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message web.v1.OAuthLink
 */
export const OAuthLink = proto3.makeMessageType(
  "web.v1.OAuthLink",
  () => [
    { no: 1, name: "public_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "provider", kind: "enum", T: proto3.getEnumType(OAuthProvider) },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message web.v1.OAuthLinkResponse
 */
export const OAuthLinkResponse = proto3.makeMessageType(
  "web.v1.OAuthLinkResponse",
  () => [
    { no: 1, name: "setup_url", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "resp" },
    { no: 2, name: "existing", kind: "message", T: OAuthLink, oneof: "resp" },
  ],
);

