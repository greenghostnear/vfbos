import {
  DefaultProfileImage,
  internalImageToUrl,
  socialGet,
} from "../../../common";

export async function onRequest({ request, next, env }) {
  const url = new URL(request.url);
  const parts = url.pathname.split("/");
  if (parts.length !== 5) {
    return next();
  }
  const accountId = parts[4];
  const image = await socialGet(`${accountId}/profile/image/**`);

  const destinationURL =
    (await internalImageToUrl(env, image)) || DefaultProfileImage;

  return Response.redirect(destinationURL, 301);
}
