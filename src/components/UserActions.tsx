import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type UserActionsProps = {userActionsClasses? : string};

export function UserActions({userActionsClasses} : Readonly<UserActionsProps>) {
  const defaultClass: string = "flex";
  const bubbleClasses: string = "size-7 text-primary";
  const heartClasses: string = "hidden lg:flex size-7 text-primary";
  const shoppingClasses: string = "size-7 text-primary";
  const userCricleClasses: string = "hidden max-lg:flex size-7 text-primary";
  return (
    <div className={`${defaultClass} ${userActionsClasses}`}>
      <ChatBubbleOvalLeftEllipsisIcon className= {bubbleClasses}></ChatBubbleOvalLeftEllipsisIcon>
      <HeartIcon className={heartClasses}></HeartIcon>
      <ShoppingBagIcon className={shoppingClasses}></ShoppingBagIcon>
      <UserCircleIcon className={userCricleClasses}></UserCircleIcon>
    </div>
  );
}
