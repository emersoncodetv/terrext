let hasExtension = (extensionToFind, substring) =>
  Js.Re.fromString({j|\\$extensionToFind\$|j})->(Js.Re.test_(substring));