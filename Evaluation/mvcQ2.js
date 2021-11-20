const View = (() => {
    const domstr = {
        table: "#table",
        regionBox: "#regionBox",
        modelBox: "#modelBox"
    };

    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };

    const createFilter = (arr) => {
        let tmp = ``;

        arr.forEach(ele => {
            tmp += `<option value=${ele}>
            ${ele}
            </option>`
        });

        return tmp;
    }

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
        createFilter,
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

    class StateRegion {
        #regList = [];
        constructor() { };

        get regList() {
            return this.#regList;
        }

        set regList(newArr) {
            this.#regList = newArr;
            const ele = document.querySelector(view.domstr.regionBox);
            const tmp = view.createFilter(this.#regList);
            view.render(ele, tmp);
        }
    }

    class StateModel {
        #modList = [];
        constructor() { };

        get modList() {
            return this.#modList;
        }

        set modList(newArr) {
            this.#modList = newArr;
            const ele = document.querySelector(view.domstr.modelBox);
            const tmp = view.createFilter(this.#modList);
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

    let set = new Set();
    set.add("all");
    data.forEach(obj => {
        set.add(obj["region"]);
    });
    const regions = Array.from(set);

    set.clear();
    set.add("all");
    data.forEach(obj => {
        set.add(obj["model"]);
    });
    const models = Array.from(set);

    return {
        State,
        StateRegion,
        StateModel,
        data,
        regions,
        models
    }
})(View);





const Controller = ((view, model) => {
    const state = new model.State();
    const stateRegion = new model.StateRegion();
    const stateModel = new model.StateModel();

    const initList = () => {
        state.list = model.data;
        stateRegion.regList = model.regions;
        stateModel.modList = model.models;
        document.querySelector(view.domstr.regionBox).addEventListener("change", () => sync());
        document.querySelector(view.domstr.modelBox).addEventListener("change", () => sync());
    
    };

    const sync = () => {
        let b1 = document.getElementById("regionBox");
        let b2 = document.getElementById("modelBox");

        if (b1.value === "all" && b2.value === "all") {
            state.list = model.data;
        } else if (b1.value === "all") {
            state.list = model.data.filter(ele => ele["model"] === b2.value);
        } else if (b2.value === "all") {
            state.list = model.data.filter(ele => ele["region"] === b1.value);
        } else {
            state.list = model.data.filter(ele => ele["model"] === b2.value).filter(ele => ele["region"] === b1.value);
        }
    }

    const init = () => {
        initList();
    };

    return {
        init
    }
})(View, Model);

Controller.init();