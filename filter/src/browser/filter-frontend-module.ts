/**
 * Generated using theia-extension-generator
 */
import { FilterCommandContribution } from './filter-contribution';
import { FilterContribution } from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(FilterContribution).to(FilterCommandContribution);
});
