/**
 * メール系を集約するためのソース
 */

namespace mail {
    export function createDraft(): void {

        let recipient = "きり丸<nainaistar@gmail.com>";
        let subject = "タイトル";
        let body = "ここは本文です";

        let options = {
            cc: recipient, // 仮
            bcc: recipient // 仮
        };

        GmailApp.createDraft(recipient, subject, body, options);

    }
}