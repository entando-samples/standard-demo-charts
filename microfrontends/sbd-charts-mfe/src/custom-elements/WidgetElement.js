import './public-path';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from '../App';
import callTheApi from "../integration";

const ATTRIBUTES = {
    config: 'config'
};

class WidgetElement extends HTMLElement {

    static get observedAttributes() {
        return Object.values(ATTRIBUTES);
    }

    connectedCallback() {

        window.addEventListener("keycloak",(evt)=>{
            if(evt.detail.eventType==="onReady"){
                this.mountPoint = document.createElement('div');
                this.appendChild(this.mountPoint);
                this.root = createRoot(this.mountPoint);
                this.render();
            }
        })
    }

    attributeChangedCallback(attribute, oldValue, newValue) {
        if (!WidgetElement.observedAttributes.includes(attribute)) {
            throw new Error(`Untracked changed attributes: ${attribute}`)
        }
        if (this.mountPoint && newValue !== oldValue) {
            this.render();
        }
    }

    render() {
        const attributeConfig = this.getAttribute(ATTRIBUTES.config);
        const config = attributeConfig && JSON.parse(attributeConfig);
        const {systemParams} = config || {};
        const { api } = systemParams || {};
        const url = api && api["be-api"].url

        callTheApi(url).then(response => {
            if (response.status === 200) {
                response.json().then(json=>{
                    this.root.render(
                        <App config={config} dataToRender={json.payload}/>
                    );
                    document.getElementById("chart-card").style.removeProperty("display");
                })
            }
        })

    }
}

customElements.define('sbd-charts-mfe', WidgetElement);
