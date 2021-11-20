
const View = (() => {
    const domstr = {
        table: "#table"
    };

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };

    const createTheTmp = (arr) => {
        let tmp = `<tr>
        <th>region</th>
        <th>model</th>
        <th>sales</th>
        </tr>`;

        arr.forEach(ele => {
            tmp += `<tr>
            <td>
            ${ele["region"]}
            </td>
            <td>
            ${ele["model"]}
            </td>
            <td>
            ${ele["sales"]}
            </td>
            </tr>`
        });

        return tmp;
    };

    return {
        domstr,
        render,
        createTheTmp
    }
})();





const Model = ((view) => {
    class State {
        #list = [];
        constructor() { };

        get list() {
            return this.#list;
        }

        set list(newArr) {
            this.#list = newArr;
            const tmp = view.createTheTmp(this.#list);
            const ele = document.querySelector(view.domstr.table);
            view.render(ele, tmp);
        }
    }

    const data = [
        { region: 'US', model: 'A', sales: 150 },
        { region: 'US', model: 'B', sales: 120 },
        { region: 'US', model: 'C', sales: 350 },
        { region: 'EU', model: 'A', sales: 200 },
        { region: 'EU', model: 'B', sales: 100 },
        { region: 'EU', model: 'C', sales: 250 },
        { region: 'CA', model: 'A', sales: 200 },
        { region: 'CA', model: 'B', sales: 100 },
        { region: 'CA', model: 'C', sales: 230 },
        { region: 'CA', model: 'D', sales: 400 },
    ];

    return {
        State,
        data
    }
})(View);





const Controller = ((view, model) => {
    const state = new model.State();

    const initList = () => {
        const res = [];
        const data = model.data;

        // Calculate and store the total sales of each region
        const map = new Map();
        data.forEach(ele => {
            let region = ele["region"];
            let sales = ele["sales"];
            map.set(region, (map.has(region) ? map.get(region) + sales : sales))
        });

        const visited = new Set();
        data.forEach(ele => {
            let region = ele["region"];
            // Adding the row of sum
            if (!visited.has(region)) {
                res.push({ region: region, model: "sum", sales: map.get(region) });
                visited.add(region);
            }

            res.push(ele);
        });

        state.list = res;
    };

    const init = () => {
        initList();
    };

    return {
        init
    }
})(View, Model);

Controller.init();