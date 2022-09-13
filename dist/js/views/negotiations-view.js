export class NegotiationsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>VALUE</th>
                </tr>
            </thead>
            <tbody>
                ${model.list().map(negotiation => {
            return `
                    <tr>
                        <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
                        <td>${negotiation.amount}</td>
                        <td>${negotiation.value}</td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = this.template(model);
    }
}
