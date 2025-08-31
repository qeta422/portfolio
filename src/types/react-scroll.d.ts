declare module 'react-scroll' {
  import React from 'react';

  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    offset?: number;
    spy?: boolean;
    className?: string;
    activeClass?: string;
    onSetActive?: () => void;
    onSetInactive?: () => void;
    ignoreCancelEvents?: boolean;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps> {}

  export function animateScroll(): {
    scrollToTop: (options?: any) => void;
    scrollToBottom: (options?: any) => void;
    scrollTo: (to: number, options?: any) => void;
    scrollMore: (toY: number, options?: any) => void;
  };

  export function Events(): {
    scrollEvent: {
      register: (eventName: string, callback: (to: string, element: any) => void) => void;
      remove: (eventName: string) => void;
    };
  };
}
