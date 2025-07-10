import { FC } from "react";

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
	return <div>{children}</div>;
};

export default AuthLayout;
