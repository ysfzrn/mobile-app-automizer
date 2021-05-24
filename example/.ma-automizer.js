module.exports = {
  ios: {
    path: {
      root: 'ios/',
      workspace: 'ios/how_to_integrate_with_react_native.xcworkspace',
      archive: 'ios/archive/how_to_integrate_with_react_native.xcarchive',
      firebase: 'ios/firebase',
      export: 'ios/export',
      exportOptionsPlist: 'ios/exportOptions.plist',
      manifestPlist: 'ios/export/manifest.plist',
      infoPlist: 'ios/how_to_integrate_with_react_native/Info.plist',
      ipa: {
        production: 'ios/export/how_to_integrate_with_react_native.ipa',
        stage: 'ios/export/how_to_integrate_with_react_native(staging).ipa',
      },
    },
    version: true,
    build: {
      enabled: true,
      firebase: false,
      scheme: {
        production: 'how_to_integrate_with_react_native',
        stage: 'how_to_integrate_with_react_native(staging)',
      },
    },
    upload: {
      enabled: true,
      method: 'app-store',
      bundleIdentifier: {
        production: 'com.automizer.app',
        stage: 'com.automizer.app.staging',
      },
      cdn: {
        title: {
          production: 'YOUR_PRODUCTION_APP_TITLE',
          stage: 'YOUR_STAGE_APP_TITLE',
        },
        uploadIpa: async (ipaPath, env, buildNumber) => {
          const ipaFileUrl = await YOUR_UPLOAD_METHOD({
            ipaPath,
            env,
            buildNumber,
          });
          return ipaFileUrl;
        },
        uploadManifest: async (
          manifestPath,
          env,
          buildNumber,
          downloadLinkPrefix,
        ) => {
          const manifestFileUrl = await YOUR_UPLOAD_METHOD({
            manifestPath,
            env,
            buildNumber,
          });
          console.log(
            `iOS Download Link: ${downloadLinkPrefix}${manifestFileUrl}`,
          );
        },
      },
    },
  },
  android: {
    path: {
      root: 'android/',
      gradle: 'android/app/build.gradle',
      apk: {
        production:
          'android/app/build/outputs/apk/production/release/app-production-release.apk',
        stage:
          'android/app/build/outputs/apk/staging/release/app-staging-release.apk',
      },
    },
    version: false,
    build: {
      enabled: false,
    },
    upload: {
      enabled: false,
      method: '*',
      cdn: {
        uploadApk: async (apkPath, env, buildNumber) => {
          const apkFileUrl = await YOUR_UPLOAD_METHOD({
            apkPath,
            env,
            buildNumber,
          });
          console.log(`Android Download Link: ${apkFileUrl}`);
        },
      },
    },
  },
};
