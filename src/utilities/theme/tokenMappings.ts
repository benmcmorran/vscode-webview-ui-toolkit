import {CSSDesignToken} from '@microsoft/fast-foundation';
import {
	badgePrimaryBackground,
	badgePrimaryForeground,
	badgeSecondaryBackground,
	badgeSecondaryForeground,
	breadcrumbItemForeground,
	breadcrumbItemForegroundHover,
	buttonPrimaryBackgroundColor,
	buttonPrimaryForegroundColor,
	buttonPrimaryHoverBackgroundColor,
	buttonSecondaryBackgroundColor,
	buttonSecondaryForegroundColor,
	buttonSecondaryHoverBackgroundColor,
	checkboxBackgroundColor,
	checkboxBorderColor,
	checkboxForegroundColor,
	dropdownBackgroundColor,
	dropdownBorderColor,
	dropdownForegroundColor,
	focusBorder,
	inputBackgroundColor,
	inputBorderColor,
	inputForegroundColor,
	inputPlaceholderForegroundColor,
	optionBackgroundFocusColor,
	panelTabActiveBorderColor,
	panelTabActiveForegroundColor,
	panelTabForegroundColor,
	panelViewBackgroundColor,
	panelViewBorderColor,
	progressBackgroundColor,
	textLinkForegroundColor,
} from '../../design-tokens';

/**
 * A mapping of all the VS Code theme CSS variables mapped to the
 * toolkit design tokens.
 */
export const tokenMappings: {[index: string]: CSSDesignToken<string>} = {
	// ---- Base Colors ----
	'--vscode-focusBorder': focusBorder,
	// ---- Contrast Colors ----
	// ---- Breadcrumbs ----
	'--vscode-breadcrumb-foreground': breadcrumbItemForeground,
	'--vscode-breadcrumb-focusForeground': breadcrumbItemForegroundHover,
	// ---- Badges ----
	'--vscode-activityBarBadge-background': badgePrimaryBackground,
	'--vscode-activityBarBadge-foreground': badgePrimaryForeground,
	'--vscode-badge-foreground': badgeSecondaryForeground,
	'--vscode-badge-background': badgeSecondaryBackground,
	// ---- Buttons ----
	'--vscode-button-background': buttonPrimaryBackgroundColor,
	'--vscode-button-foreground': buttonPrimaryForegroundColor,
	'--vscode-button-hoverBackground': buttonPrimaryHoverBackgroundColor,
	'--vscode-button-secondaryBackground': buttonSecondaryBackgroundColor,
	'--vscode-button-secondaryForeground': buttonSecondaryForegroundColor,
	'--vscode-button-secondaryHoverBackground': buttonSecondaryHoverBackgroundColor,
	// ---- Links ----
	'--vscode-textLink-foreground': textLinkForegroundColor,
	// ---- Checkboxes ----
	'--vscode-checkbox-background': checkboxBackgroundColor,
	'--vscode-checkbox-foreground': checkboxForegroundColor,
	'--vscode-checkbox-border': checkboxBorderColor,
	// ---- Dropdowns ----
	'--vscode-dropdown-background': dropdownBackgroundColor,
	'--vscode-dropdown-foreground': dropdownForegroundColor,
	'--vscode-dropdown-border': dropdownBorderColor,
	// ---- Dropdown Options ----
	'--vscode-list-focusBackground': optionBackgroundFocusColor,
	// ---- Text Fields & Areas ----
	'--vscode-input-background': inputBackgroundColor,
	'--vscode-input-foreground': inputForegroundColor,
	'--vscode-input-border': inputBorderColor,
	'--vscode-input-placeholderForeground': inputPlaceholderForegroundColor,
	// ---- Progress Bars & Rings ----
	'--vscode-progressBar-background': progressBackgroundColor,
	// ---- Panels ----
	'--vscode-panelTitle-inactiveForeground': panelTabForegroundColor,
	'--vscode-panelTitle-activeForeground': panelTabActiveForegroundColor,
	'--vscode-panelTitle-activeBorder': panelTabActiveBorderColor,
	'--vscode-panel-background': panelViewBackgroundColor,
	'--vscode-panel-border': panelViewBorderColor,
	// "--vscode-panelSectionHeader-background": "?"
	// "--vscode-panelSectionHeader-foreground": "?"
	// "--vscode-panelSectionHeader-border": "?"
	// ---- Symbol & Debug Icons ----
};
