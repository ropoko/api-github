export interface Repo {
	name: string;
	description: string;
	html_url: string;
	created_at: Date;
	stargazers_count: number;
	open_issues: number;
	license?: string;
	language?: string;
}
