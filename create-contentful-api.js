const client = createClient({
  space: process.env._ee9CRrs8kcqO6ytx3EjTf_PUDesIH3IzZdg35YKJiwCONTENTFUL_SPACE_ID,
  accessToken: process.env._ee9CRrs8kcqO6ytx3EjTf_PUDesIH3IzZdg35YKJiwIS_PREVIEW === "true" ?
    process.env._ee9CRrs8kcqO6ytx3EjTf_PUDesIH3IzZdg35YKJiwCONTENTFUL_PREVIEW_TOKEN :
    process.env._ee9CRrs8kcqO6ytx3EjTf_PUDesIH3IzZdg35YKJiwCONTENTFUL_DELIVERY_TOKEN
})

// Alternatively you can use the CDN API as follows...
const baseUrl = process.env._ee9CRrs8kcqO6ytx3EjTf_PUDesIH3IzZdg35YKJiwIS_PREVIEW === "true" ? "preview.contentful.com" : "cdn.contentful.com"
