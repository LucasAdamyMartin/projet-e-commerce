import {
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type UserActionsProps = {className? : string};

export function UserActions({className} : Readonly<UserActionsProps>) {
  const defaultClass = "flex";
  return (
    <div className={`${defaultClass} ${className}`}>
      <ChatBubbleOvalLeftEllipsisIcon className="size-7 text-primary"></ChatBubbleOvalLeftEllipsisIcon>
      <HeartIcon className="hidden lg:flex size-7 text-primary"></HeartIcon>
      <ShoppingBagIcon className="size-7 text-primary"></ShoppingBagIcon>
      <UserCircleIcon className="hidden max-lg:flex size-7 text-primary"></UserCircleIcon>
    </div>
  );
}
