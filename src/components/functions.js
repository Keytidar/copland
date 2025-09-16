export const utilFunctions = {
  uniqueId(prefix) {
    const randomId = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
    return prefix ? prefix + '-' + randomId : randomId;
  }
}

