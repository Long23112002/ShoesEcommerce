/* eslint-disable @typescript-eslint/no-explicit-any */

declare module 'reactjs-social-login' {
    import { ReactNode } from 'react';
  
    interface LoginSocialFacebookProps {
      appId: string;
      onResolve: (response: any) => void;
      onReject: (error: any) => void;
      children?: ReactNode;
    }
  
    export class LoginSocialFacebook extends React.Component<LoginSocialFacebookProps> {}
  }
  