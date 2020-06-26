export function update(changes: any, existing: any): any {
    // create a new record
    let updated: any = {};

    // copy the attribute structure from the existing
    Object.keys(existing).forEach(attribute => {
        // copy the changed attributes if present, otherwise use the existing
        updated[attribute] = changes[attribute] || existing[attribute];
    });

    return updated;
}