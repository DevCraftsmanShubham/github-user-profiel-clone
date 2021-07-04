function action(type: string, args: any) {
  return {
    type,
    args,
  };
}

function actionCreator(type: string) {
  return function (payload: any) {
    const action = { type, payload }
    
    return action
  }
}

export default actionCreator;
