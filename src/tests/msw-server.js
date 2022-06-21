import { setupServer } from "msw/node";
import { handlers } from "./hotels/handlers";

export const mswServer = setupServer(...handlers);
