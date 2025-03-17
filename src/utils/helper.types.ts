import {
  ElementType,
  PropsWithChildren,
  ComponentPropsWithoutRef,
} from 'react';

export type PolymorphicProps<E extends ElementType> = PropsWithChildren<
  ComponentPropsWithoutRef<E> & {
    as?: E;
  }
>;
