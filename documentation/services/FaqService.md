# FaqService

A list of all methods in the `FaqService` service. Click on the method name to view detailed information about that method.

| Methods             | Description |
| :------------------ | :---------- |
| [faqList](#faqlist) |             |

## faqList

- HTTP Method: `POST`
- Endpoint: `/api/faqs`

**Parameters**

| Name | Type                                          | Required | Description       |
| :--- | :-------------------------------------------- | :------- | :---------------- |
| body | [FaqListRequest](../models/FaqListRequest.md) | ✅       | The request body. |

**Return Type**

`any`

**Example Usage Code Snippet**

```typescript
import { FaqListRequest, ServerSdk } from 'server-sdk';

(async () => {
  const serverSdk = new ServerSdk({
    token: 'YOUR_TOKEN',
  });

  const faqListRequest: FaqListRequest = {
    category: 'family',
    city: 'karaj',
    page: 'home',
    cityId: '1',
    perPage: '100',
  };

  const data = await serverSdk.faq.faqList(faqListRequest);

  console.log(data);
})();
```
