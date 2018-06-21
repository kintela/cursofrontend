import { PLATFORM } from "aurelia-pal";
import { FrameworkConfiguration } from "aurelia-framework";

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName("./elements/message"),
    PLATFORM.moduleName("./elements/navBar"),
    PLATFORM.moduleName("./value-converters/formatDateValueConverter"),
    PLATFORM.moduleName("./value-converters/formatNumberValueConverter")
  ]);
}
