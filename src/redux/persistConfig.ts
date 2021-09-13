import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
// import { createBlacklistFilter } from "redux-persist-transform-filter";

const encryptor = encryptTransform({
    secretKey: "edit-encryption-key",
    onError(error: any) {
        console.log("createEncryptor error ", error);
    },
});

// const blacklist = createBlacklistFilter("auth");

const PersistConfig = {
    key: "root",
    storage,
    transforms: [
        // blacklist, 
        encryptor],
};

export default PersistConfig;
