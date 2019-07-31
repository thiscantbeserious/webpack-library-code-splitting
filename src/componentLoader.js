import * as utils from "./utils";

let components = {};

export function loadComponent(name) {
  if(hasComponent(name)
    && utils.isObject(components[name])) {
    return components[name];
  }
  return null;
}

export function hasComponent(name) {
  return components.hasOwnProperty(name);
}

export function registerComponent(name) {
  if(hasComponent(name)) {
    console.error("component",name,"already registered.");
    return;
  }
  components[name] = { template:'<div class="component">${name}</div>' };
}

export function unregisterComponent(name) {
  if(!hasComponent(name)) {
    console.warn("component",name,"wasn't registered, can't unregister");
  }
  delete components[name];
}
