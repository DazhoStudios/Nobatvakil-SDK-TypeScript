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
import { FaqListRequest, NobatvakilServerSdk } from 'nobatvakil-server-sdk';

(async () => {
  const nobatvakilServerSdk = new NobatvakilServerSdk({});

  const faqListRequest: FaqListRequest = {
    category: 'family',
    city: 'karaj',
    page: 'home',
    cityId: '1',
    perPage: '100',
  };

  const data = await nobatvakilServerSdk.faq.faqList(faqListRequest);

  console.log(data);
})();
```
