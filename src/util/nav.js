import { NavigationActions } from 'react-navigation';

export const navigateToStack = (stackName, routeName, params) => {
  const navigateAction = NavigationActions.navigate({
    routeName: stackName,
    action: NavigationActions.navigate({
      routeName: routeName,
      params: params,
    })
  });
  this.props.navigation.dispatch(navigateAction);
}