import { Slot } from '@radix-ui/react-slot';

type Props = React.ComponentPropsWithoutRef<'div'>;

export const ContentLayout: React.VFC<Props> = ({ children, ...props }) => {
  return (
    <Slot {...props}>
      <div className="p-6">
        <div className="container xl:max-w-screen-2xl mx-auto">{children}</div>
      </div>
    </Slot>
  );
};
