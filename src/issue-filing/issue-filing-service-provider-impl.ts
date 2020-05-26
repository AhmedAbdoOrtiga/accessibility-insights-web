// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { IssueFilingServiceProvider } from './issue-filing-service-provider';
import { getAzureBoardsIssueFilingService } from './services/azure-boards/azure-boards-issue-filing-service';
import { getGitHubIssueFilingService } from './services/github/github-issue-filing-service';
import { NullIssueFilingService } from './services/null-issue-filing-service/null-issue-filing-service';
import { createIssueDetailsBuilder } from 'issue-filing/common/create-issue-details-builder';
import { MarkdownFormatter } from 'issue-filing/common/markup/markdown-formatter';
import { HTMLFormatter } from 'issue-filing/common/markup/html-formatter';


export const IssueFilingServiceProviderImpl = new IssueFilingServiceProvider([
    NullIssueFilingService,
    getGitHubIssueFilingService(createIssueDetailsBuilder(MarkdownFormatter)),
    getAzureBoardsIssueFilingService(createIssueDetailsBuilder(HTMLFormatter)),
]);
