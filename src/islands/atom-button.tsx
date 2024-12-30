import { useChildNodes } from '@atomico/hooks/use-child-nodes';
import { c, type Ref, type Type, useEffect, useRef } from 'atomico';
import type { Nullable } from 'atomico/types/dom';

export const AtomButton = c(
  (props) => {
    const ref = useRef<HTMLButtonElement>();
    const nodes = useChildNodes();

    useEffect(() => {
      for (const n of nodes) {
        (props.ref ?? ref).current.appendChild(n);
      }
    }, [nodes, props.ref]);

    return (
      <host shadowDom={false}>
        <button
          {...props}
          data-slot="button"
          ref={props.ref ?? ref}
        />
      </host>
    );
  },
  {
    props: {
      class: String as Type<HTMLButtonElement['className']>,
      disabled: Boolean as unknown as Type<HTMLButtonElement['disabled']>,
      ref: Object as unknown as Type<Nullable<Ref<HTMLButtonElement>>>,
      type: String as unknown as Type<HTMLButtonElement['type']>,
    },
  }
);
