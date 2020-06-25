export function element(name: string, content: string = "", attributes: any = {}): string {
    return `<${name} ${Object.keys(attributes).map(key => key + "='" + attributes[key] + "'" ).join(" ")}>${content}</${name}>`;
}
