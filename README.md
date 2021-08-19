## Diffme JS

This SDK is to interact with the diffme API and track changes/deltas for your documents/database rows. 

You can use this SDK to easily communicate with a hosted diffme server as it provides a clean wrapper around 
the snapshot and change APIs. 

The library also has full TS support for those of you that like that :)

```typescript
import diffmeSDK from "diffme"

const diffme = diffmeSDK({ 
    domain: "https://your-hosted-domain",
    apiKey: "your api key"
})

const document = { name: "Chaga", price: 10.50, id: "1"}

diffme.snapshots.created({
    reference_id: document.id,
    data: document,
    editor: "andrew",
})

// edit the documents name
document.name = "Chagachino"

// this would create a diff saying the name was changed 
// from "Chaga" to "Chagachino" by olivia
diffme.snapshots.create({
    reference_id: document.id,
    data: document,
    editor: "olivia",
}) 

// get the changes for this document over time
diffme.changes.forReferenceId(document.id)

// or search for them!
diffme.changes.search({
    editor: "andrew", // optional
    field: "name", // optional
    value: "ch", // optional as you type!
})
```

If you have any questions you can email andrew.j.duca@gmail with a subject of "Diffme questions". Feedback is welcome.