import { injectable } from 'inversify';
import {
	ContributionFilterRegistry,
	Filter,
	FilterContribution,
} from '@theia/core/lib/common';

@injectable()
export class FilterCommandContribution implements FilterContribution {
	registerContributionFilters(registry: ContributionFilterRegistry): void {
		registry.addFilters('*', [
			// Filter out whole MenuBar (in browser)
			// filterClassName((name) => name !== 'BrowserMenuBarContribution'),

			// Bottom Left Problems and Warnings
			filterClassName((name) => name !== 'ProblemContribution'),

			// Bottom right Notifications
			filterClassName((name) => name !== 'NotificationsContribution'),

			// Terminal filter
			filterClassName((name) => name !== 'TerminalFrontendContribution'),
			filterClassName((name) => name !== 'TerminalWidget'),
			filterClassName((name) => name !== 'ConsoleWidget'),

			// Filter OutlineView (widget on the right)
			filterClassName((name) => name !== 'OutlineViewContribution'),
			filterClassName((name) => name !== 'OutlineViewService'),

			// // QuickInput is deactivated -> ctrl+shift+p does open Widget but
			// filterClassName((name) => name !== 'QuickInputFrontendContribution'),
			// filterClassName((name) => name !== 'QuickOpenFrontendContribution'),
			// filterClassName((name) => name !== 'QuickCommandFrontendContribution'),

			// Filter out Colors
			// filterClassName((name) => name !== 'ColorApplicationContribution'),
		]);
	}
}

function filterClassName(filter: Filter<string>): Filter<Object> {
	return (object) => {
		const className = object?.constructor?.name;
		return className ? filter(className) : false;
	};
}
