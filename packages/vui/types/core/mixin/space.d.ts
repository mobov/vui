import { Vue } from 'vue-property-decorator';
import { size } from '../constant';
export default class space extends Vue {
    marginLeft: size | string | number | undefined;
    marginRight: size | string | number | undefined;
    marginTop: size | string | number | undefined;
    marginBottom: size | string | number | undefined;
    marginX: size | string | number | undefined;
    marginY: size | string | number | undefined;
    margin: size | string | number | undefined;
    paddingLeft: size | string | number | undefined;
    paddingRight: size | string | number | undefined;
    paddingTop: size | string | number | undefined;
    paddingBottom: size | string | number | undefined;
    paddingX: size | string | number | undefined;
    paddingY: size | string | number | undefined;
    padding: size | string | number | undefined;
}
