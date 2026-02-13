import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@mui/material';
import './ErrorBoundary.scss';

interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
	error: Error | null;
	errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			hasError: false,
			error: null,
			errorInfo: null
		};
	}

	static getDerivedStateFromError(_error: Error): Partial<State> {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('ErrorBoundary caught an error:', error, errorInfo);
		this.setState({
			error,
			errorInfo
		});
	}

	handleReload = (): void => {
		window.location.reload();
	};

	render(): ReactNode {
		if (this.state.hasError) {
			return (
				<div className="error-boundary">
					<div className="error-content">
						<h1>Oops! Something went wrong</h1>
						<p>We're sorry, but something unexpected happened.</p>
						<div className="error-actions">
							<Button
								variant="contained"
								onClick={this.handleReload}
							>
								Reload App
							</Button>
							<Button
								variant="outlined"
								onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
								sx={{ ml: 2 }}
							>
								Try Again
							</Button>
						</div>
						{import.meta.env.DEV && this.state.error && (
							<details className="error-details">
								<summary>Error Details (Development Only)</summary>
								<pre>
									{this.state.error.toString()}
									{this.state.errorInfo?.componentStack}
								</pre>
							</details>
						)}
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}
