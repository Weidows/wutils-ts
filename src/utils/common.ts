function isDefined(params: any): boolean {
  return typeof params !== 'undefined';
}

function isEmoji(word: string) {
  return /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi.test(
    word
  );
}

export { isDefined, isEmoji };
