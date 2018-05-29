// THIS FILE IS GENERATED AUTOMATICALLY BY generate.js

/* eslint-disable */

/**
 * This file will be inserted before the Tricount script, it builds a JSDom home
 * for the script.
 */
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><head>
</head>
<body>
  <table>
    <tbody>
      <td id='slot1'></td> <!-- The controller needs this node -->
    </tbody>
  </table>
</body>
`, {
  url: "https://api.tricount.com", // Necessary for cross-site
  referrer: "https://api.tricount.com", // Necessary for cross-site
  contentType: "text/html",
  userAgent: "safari",
  includeNodeLocations: true
});

var $wnd = dom.window

$wnd.com_tribab_tricount_Application = {
  __sendStats: function () {},
  __moduleBase: "https://api.tricount.com/com.tribab.tricount.Application/",
  __moduleName: 'com.tribab.tricount.Application'

}

$wnd.encodeURI = function () {
  return ''
}

navigator = {
  userAgent: 'safari'
}

const document = dom.window.document


var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.com_tribab_tricount_Application;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = '34F0AEDC550E2A5D086804F4E309FE5B';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = 3.141592653589793, $intern_2 = {3:1, 5:1}, $intern_3 = {3:1, 19:1}, $intern_4 = {3:1, 22:1, 19:1}, $intern_5 = {3:1, 5:1, 683:1}, $intern_6 = {26:1, 25:1, 3:1, 8:1, 7:1}, $intern_7 = {25:1, 74:1, 3:1, 8:1, 7:1}, $intern_8 = {25:1, 75:1, 3:1, 8:1, 7:1}, $intern_9 = {25:1, 76:1, 3:1, 8:1, 7:1}, $intern_10 = {45:1, 3:1, 8:1, 7:1}, $intern_11 = {25:1, 63:1, 3:1, 8:1, 7:1}, $intern_12 = 65535, $intern_13 = {120:1, 3:1, 22:1, 19:1}, $intern_14 = {85:1, 3:1, 22:1, 19:1}, $intern_15 = {3:1}, $intern_16 = 1900, $intern_17 = {60:1, 3:1}, $intern_18 = {3:1, 8:1, 18:1}, $intern_19 = -2147483648, $intern_20 = 4194303, $intern_21 = 1048575, $intern_22 = 524288, $intern_23 = 4194304, $intern_24 = 17592186044416, $intern_25 = -9223372036854775808, $intern_26 = {31:1, 686:1}, $intern_27 = {240:1, 31:1}, $intern_28 = {143:1, 31:1}, $intern_29 = 65536, $intern_30 = 1048576, $intern_31 = 16777216, $intern_32 = 33554432, $intern_33 = 67108864, $intern_34 = {41:1, 3:1, 8:1, 7:1}, $intern_35 = {13:1, 11:1, 12:1, 10:1, 14:1, 9:1, 6:1}, $intern_36 = {13:1, 11:1, 12:1, 10:1, 43:1, 14:1, 9:1, 6:1}, $intern_37 = {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 9:1, 6:1}, $intern_38 = {13:1, 11:1, 12:1, 10:1, 43:1, 14:1, 114:1, 9:1, 6:1}, $intern_39 = {688:1, 692:1, 690:1, 691:1, 689:1, 31:1}, $intern_40 = {36:1, 55:1}, $intern_41 = {3:1, 36:1, 55:1}, $intern_42 = {187:1, 31:1}, $intern_43 = {681:1, 31:1}, $intern_44 = {13:1, 11:1, 12:1, 10:1, 43:1, 14:1, 133:1, 9:1, 6:1}, $intern_45 = {156:1, 31:1}, $intern_46 = {81:1, 3:1, 8:1, 7:1}, $intern_47 = {13:1, 11:1, 12:1, 10:1, 14:1, 9:1, 6:1, 93:1}, $intern_48 = {129:1}, $intern_49 = {27:1}, $intern_50 = {35:1}, $intern_51 = {113:1}, $intern_52 = {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 9:1, 6:1, 140:1}, $intern_53 = {142:1}, $intern_54 = {48:1, 3:1, 8:1, 7:1}, $intern_55 = {91:1, 3:1, 8:1, 7:1}, $intern_56 = {36:1, 69:1}, $intern_57 = {3:1, 58:1}, $intern_58 = {3:1, 36:1, 69:1}, $intern_59 = {3:1, 36:1, 55:1, 34:1}, $intern_60 = {3:1, 8:1, 7:1, 86:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals_1(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + toUnsignedRadixString(hashCode__I__devirtual$(this), 16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 682:1, 8:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(189, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_26(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 189);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.wasStarted && $onComplete(this$static);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + Math.cos($intern_1 + progress * $intern_1)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.offsetHeight = $getOffsetHeight(this$static.curPanel);
    this$static.offsetWidth = $getOffsetWidth(this$static.curPanel);
    $setPropertyImpl($getElement(this$static.curPanel).style, 'overflow', 'hidden');
    $onUpdate(this$static, (1 + Math.cos($intern_1)) / 2);
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    $onComplete(this$static);
    return false;
  }
  return true;
}

function Animation(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(214, 1, {});
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 214);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(525, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 525);
defineClass(728, 1, {});
var instance_0;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 728);
defineClass(172, 1, {172:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 172);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(668, 728, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 668);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(669, 172, {172:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel_0(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 669);
function $cancelAnimationFrame(this$static, requestId){
  $remove_5(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {755:1, 3:1, 5:1}, 185, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray_1(this$static.animationRequests, curAnimations), 755);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_5(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(670, 728, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_5(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 670);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf_1(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(206, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 206);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(671, 206, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 671);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(185, 172, {172:1, 185:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_1(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 185);
function $set(this$static, element){
  $setAttribute(element, 'role', this$static.roleName);
}

function RoleImpl(roleName){
  this.roleName = roleName;
}

defineClass(17, 1, {});
var Lcom_google_gwt_aria_client_RoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RoleImpl', 17);
function AlertRoleImpl(){
  RoleImpl.call(this, 'alert');
}

defineClass(406, 17, {}, AlertRoleImpl);
var Lcom_google_gwt_aria_client_AlertRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertRoleImpl', 406);
function AlertdialogRoleImpl(){
  RoleImpl.call(this, 'alertdialog');
}

defineClass(405, 17, {}, AlertdialogRoleImpl);
var Lcom_google_gwt_aria_client_AlertdialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertdialogRoleImpl', 405);
function ApplicationRoleImpl(){
  RoleImpl.call(this, 'application');
}

defineClass(407, 17, {}, ApplicationRoleImpl);
var Lcom_google_gwt_aria_client_ApplicationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ApplicationRoleImpl', 407);
function $getAriaValue(value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_3($append_3(buf, dynamicCast(item_0, 241).getAriaValue()), ' ');
  }
  return $trim(buf.string);
}

function $set_0(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(238, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 238);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(49, 238, {}, AriaValueAttribute);
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 49);
function ArticleRoleImpl(){
  RoleImpl.call(this, 'article');
}

defineClass(408, 17, {}, ArticleRoleImpl);
var Lcom_google_gwt_aria_client_ArticleRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ArticleRoleImpl', 408);
function BannerRoleImpl(){
  RoleImpl.call(this, 'banner');
}

defineClass(409, 17, {}, BannerRoleImpl);
var Lcom_google_gwt_aria_client_BannerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'BannerRoleImpl', 409);
function $setAriaPressedState(element, value_0){
  $set_0(($clinit_State() , PRESSED), element, initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_PressedValue_2_classLit, 1), $intern_2, 104, 0, [value_0]));
}

function ButtonRoleImpl(){
  RoleImpl.call(this, 'button');
}

defineClass(410, 17, {}, ButtonRoleImpl);
var Lcom_google_gwt_aria_client_ButtonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ButtonRoleImpl', 410);
function CheckboxRoleImpl(){
  RoleImpl.call(this, 'checkbox');
}

defineClass(411, 17, {}, CheckboxRoleImpl);
var Lcom_google_gwt_aria_client_CheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'CheckboxRoleImpl', 411);
function ColumnheaderRoleImpl(){
  RoleImpl.call(this, 'columnheader');
}

defineClass(412, 17, {}, ColumnheaderRoleImpl);
var Lcom_google_gwt_aria_client_ColumnheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ColumnheaderRoleImpl', 412);
function ComboboxRoleImpl(){
  RoleImpl.call(this, 'combobox');
}

defineClass(413, 17, {}, ComboboxRoleImpl);
var Lcom_google_gwt_aria_client_ComboboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComboboxRoleImpl', 413);
function ComplementaryRoleImpl(){
  RoleImpl.call(this, 'complementary');
}

defineClass(414, 17, {}, ComplementaryRoleImpl);
var Lcom_google_gwt_aria_client_ComplementaryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComplementaryRoleImpl', 414);
function ContentinfoRoleImpl(){
  RoleImpl.call(this, 'contentinfo');
}

defineClass(415, 17, {}, ContentinfoRoleImpl);
var Lcom_google_gwt_aria_client_ContentinfoRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ContentinfoRoleImpl', 415);
function DefinitionRoleImpl(){
  RoleImpl.call(this, 'definition');
}

defineClass(416, 17, {}, DefinitionRoleImpl);
var Lcom_google_gwt_aria_client_DefinitionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DefinitionRoleImpl', 416);
function DialogRoleImpl(){
  RoleImpl.call(this, 'dialog');
}

defineClass(417, 17, {}, DialogRoleImpl);
var Lcom_google_gwt_aria_client_DialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DialogRoleImpl', 417);
function DirectoryRoleImpl(){
  RoleImpl.call(this, 'directory');
}

defineClass(418, 17, {}, DirectoryRoleImpl);
var Lcom_google_gwt_aria_client_DirectoryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DirectoryRoleImpl', 418);
function DocumentRoleImpl(){
  RoleImpl.call(this, 'document');
}

defineClass(419, 17, {}, DocumentRoleImpl);
var Lcom_google_gwt_aria_client_DocumentRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DocumentRoleImpl', 419);
function FormRoleImpl(){
  RoleImpl.call(this, 'form');
}

defineClass(420, 17, {}, FormRoleImpl);
var Lcom_google_gwt_aria_client_FormRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'FormRoleImpl', 420);
function GridRoleImpl(){
  RoleImpl.call(this, 'grid');
}

defineClass(422, 17, {}, GridRoleImpl);
var Lcom_google_gwt_aria_client_GridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridRoleImpl', 422);
function $setAriaSelectedState(element, value_0){
  $set_0(($clinit_State() , SELECTED), element, initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_SelectedValue_2_classLit, 1), $intern_2, 122, 0, [value_0]));
}

function GridcellRoleImpl(){
  RoleImpl.call(this, 'gridcell');
}

defineClass(421, 17, {}, GridcellRoleImpl);
var Lcom_google_gwt_aria_client_GridcellRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridcellRoleImpl', 421);
function GroupRoleImpl(){
  RoleImpl.call(this, 'group');
}

defineClass(423, 17, {}, GroupRoleImpl);
var Lcom_google_gwt_aria_client_GroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GroupRoleImpl', 423);
function HeadingRoleImpl(){
  RoleImpl.call(this, 'heading');
}

defineClass(424, 17, {}, HeadingRoleImpl);
var Lcom_google_gwt_aria_client_HeadingRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'HeadingRoleImpl', 424);
function $init(this$static, elementId){
  this$static.id_0 = elementId;
}

function Id(element){
  $init(this, element.id);
}

defineClass(164, 1, {241:1, 164:1}, Id);
_.getAriaValue = function getAriaValue(){
  return this.id_0;
}
;
var Lcom_google_gwt_aria_client_Id_2_classLit = createForClass('com.google.gwt.aria.client', 'Id', 164);
function ImgRoleImpl(){
  RoleImpl.call(this, 'img');
}

defineClass(425, 17, {}, ImgRoleImpl);
var Lcom_google_gwt_aria_client_ImgRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ImgRoleImpl', 425);
function LinkRoleImpl(){
  RoleImpl.call(this, 'link');
}

defineClass(426, 17, {}, LinkRoleImpl);
var Lcom_google_gwt_aria_client_LinkRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LinkRoleImpl', 426);
function ListRoleImpl(){
  RoleImpl.call(this, 'list');
}

defineClass(429, 17, {}, ListRoleImpl);
var Lcom_google_gwt_aria_client_ListRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListRoleImpl', 429);
function ListboxRoleImpl(){
  RoleImpl.call(this, 'listbox');
}

defineClass(427, 17, {}, ListboxRoleImpl);
var Lcom_google_gwt_aria_client_ListboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListboxRoleImpl', 427);
function ListitemRoleImpl(){
  RoleImpl.call(this, 'listitem');
}

defineClass(428, 17, {}, ListitemRoleImpl);
var Lcom_google_gwt_aria_client_ListitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListitemRoleImpl', 428);
function LogRoleImpl(){
  RoleImpl.call(this, 'log');
}

defineClass(430, 17, {}, LogRoleImpl);
var Lcom_google_gwt_aria_client_LogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LogRoleImpl', 430);
function MainRoleImpl(){
  RoleImpl.call(this, 'main');
}

defineClass(431, 17, {}, MainRoleImpl);
var Lcom_google_gwt_aria_client_MainRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MainRoleImpl', 431);
function MarqueeRoleImpl(){
  RoleImpl.call(this, 'marquee');
}

defineClass(432, 17, {}, MarqueeRoleImpl);
var Lcom_google_gwt_aria_client_MarqueeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MarqueeRoleImpl', 432);
function MathRoleImpl(){
  RoleImpl.call(this, 'math');
}

defineClass(433, 17, {}, MathRoleImpl);
var Lcom_google_gwt_aria_client_MathRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MathRoleImpl', 433);
function MenuRoleImpl(){
  RoleImpl.call(this, 'menu');
}

defineClass(438, 17, {}, MenuRoleImpl);
var Lcom_google_gwt_aria_client_MenuRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuRoleImpl', 438);
function $setAriaActivedescendantProperty(element, value_0){
  $set_0(($clinit_Property() , ACTIVEDESCENDANT), element, initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_Id_2_classLit, 1), $intern_2, 164, 0, [value_0]));
}

function MenubarRoleImpl(){
  RoleImpl.call(this, 'menubar');
}

defineClass(434, 17, {}, MenubarRoleImpl);
var Lcom_google_gwt_aria_client_MenubarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenubarRoleImpl', 434);
function MenuitemRoleImpl(){
  RoleImpl.call(this, 'menuitem');
}

defineClass(437, 17, {}, MenuitemRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemRoleImpl', 437);
function MenuitemcheckboxRoleImpl(){
  RoleImpl.call(this, 'menuitemcheckbox');
}

defineClass(435, 17, {}, MenuitemcheckboxRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemcheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemcheckboxRoleImpl', 435);
function MenuitemradioRoleImpl(){
  RoleImpl.call(this, 'menuitemradio');
}

defineClass(436, 17, {}, MenuitemradioRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemradioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemradioRoleImpl', 436);
function NavigationRoleImpl(){
  RoleImpl.call(this, 'navigation');
}

defineClass(439, 17, {}, NavigationRoleImpl);
var Lcom_google_gwt_aria_client_NavigationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NavigationRoleImpl', 439);
function NoteRoleImpl(){
  RoleImpl.call(this, 'note');
}

defineClass(440, 17, {}, NoteRoleImpl);
var Lcom_google_gwt_aria_client_NoteRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NoteRoleImpl', 440);
function OptionRoleImpl(){
  RoleImpl.call(this, 'option');
}

defineClass(441, 17, {}, OptionRoleImpl);
var Lcom_google_gwt_aria_client_OptionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'OptionRoleImpl', 441);
function PresentationRoleImpl(){
  RoleImpl.call(this, 'presentation');
}

defineClass(442, 17, {}, PresentationRoleImpl);
var Lcom_google_gwt_aria_client_PresentationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'PresentationRoleImpl', 442);
function $compareTo(this$static, other){
  return this$static.ordinal - other.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(7, 1, {3:1, 8:1, 7:1});
_.compareTo = function compareTo(other){
  return $compareTo(this, dynamicCast(other, 7));
}
;
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_1(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 7);
function $clinit_PressedValue(){
  $clinit_PressedValue = emptyMethod;
  TRUE = new PressedValue('TRUE', 0);
  FALSE = new PressedValue('FALSE', 1);
  MIXED = new PressedValue('MIXED', 2);
  UNDEFINED = new PressedValue('UNDEFINED', 3);
}

function PressedValue(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_PressedValue();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_PressedValue_2_classLit, 1), $intern_2, 104, 0, [TRUE, FALSE, MIXED, UNDEFINED]);
}

defineClass(104, 7, {241:1, 104:1, 3:1, 8:1, 7:1}, PressedValue);
_.getAriaValue = function getAriaValue_0(){
  switch (this.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'mixed';
    case 3:
      return 'undefined';
  }
  return null;
}
;
var FALSE, MIXED, TRUE, UNDEFINED;
var Lcom_google_gwt_aria_client_PressedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'PressedValue', 104, Ljava_lang_Enum_2_classLit, values_0);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(52, 238, {}, PrimitiveValueAttribute);
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 52);
function ProgressbarRoleImpl(){
  RoleImpl.call(this, 'progressbar');
}

defineClass(443, 17, {}, ProgressbarRoleImpl);
var Lcom_google_gwt_aria_client_ProgressbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ProgressbarRoleImpl', 443);
function $clinit_Property(){
  $clinit_Property = emptyMethod;
  ACTIVEDESCENDANT = new AriaValueAttribute('aria-activedescendant');
  new PrimitiveValueAttribute('aria-atomic');
  new AriaValueAttribute('aria-autocomplete');
  new AriaValueAttribute('aria-controls');
  new AriaValueAttribute('aria-describedby');
  new AriaValueAttribute('aria-dropeffect');
  new AriaValueAttribute('aria-flowto');
  new PrimitiveValueAttribute('aria-haspopup');
  new PrimitiveValueAttribute('aria-label');
  new AriaValueAttribute('aria-labelledby');
  new PrimitiveValueAttribute('aria-level');
  new AriaValueAttribute('aria-live');
  new PrimitiveValueAttribute('aria-multiline');
  new PrimitiveValueAttribute('aria-multiselectable');
  new AriaValueAttribute('aria-orientation');
  new AriaValueAttribute('aria-owns');
  new PrimitiveValueAttribute('aria-posinset');
  new PrimitiveValueAttribute('aria-readonly');
  new AriaValueAttribute('aria-relevant');
  new PrimitiveValueAttribute('aria-required');
  new PrimitiveValueAttribute('aria-setsize');
  new AriaValueAttribute('aria-sort');
  new PrimitiveValueAttribute('aria-valuemax');
  new PrimitiveValueAttribute('aria-valuemin');
  new PrimitiveValueAttribute('aria-valuenow');
  new PrimitiveValueAttribute('aria-valuetext');
}

var ACTIVEDESCENDANT;
function RadioRoleImpl(){
  RoleImpl.call(this, 'radio');
}

defineClass(445, 17, {}, RadioRoleImpl);
var Lcom_google_gwt_aria_client_RadioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadioRoleImpl', 445);
function RadiogroupRoleImpl(){
  RoleImpl.call(this, 'radiogroup');
}

defineClass(444, 17, {}, RadiogroupRoleImpl);
var Lcom_google_gwt_aria_client_RadiogroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadiogroupRoleImpl', 444);
function RegionRoleImpl(){
  RoleImpl.call(this, 'region');
}

defineClass(446, 17, {}, RegionRoleImpl);
var Lcom_google_gwt_aria_client_RegionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RegionRoleImpl', 446);
function $clinit_Roles(){
  $clinit_Roles = emptyMethod;
  ALERTDIALOG = new AlertdialogRoleImpl;
  ALERT = new AlertRoleImpl;
  APPLICATION = new ApplicationRoleImpl;
  ARTICLE = new ArticleRoleImpl;
  BANNER = new BannerRoleImpl;
  BUTTON = new ButtonRoleImpl;
  CHECKBOX = new CheckboxRoleImpl;
  COLUMNHEADER = new ColumnheaderRoleImpl;
  COMBOBOX = new ComboboxRoleImpl;
  COMPLEMENTARY = new ComplementaryRoleImpl;
  CONTENTINFO = new ContentinfoRoleImpl;
  DEFINITION = new DefinitionRoleImpl;
  DIALOG = new DialogRoleImpl;
  DIRECTORY = new DirectoryRoleImpl;
  DOCUMENT = new DocumentRoleImpl;
  FORM = new FormRoleImpl;
  GRIDCELL = new GridcellRoleImpl;
  GRID = new GridRoleImpl;
  GROUP = new GroupRoleImpl;
  HEADING = new HeadingRoleImpl;
  IMG = new ImgRoleImpl;
  LINK = new LinkRoleImpl;
  LISTBOX = new ListboxRoleImpl;
  LISTITEM = new ListitemRoleImpl;
  LIST = new ListRoleImpl;
  LOG = new LogRoleImpl;
  MAIN = new MainRoleImpl;
  MARQUEE = new MarqueeRoleImpl;
  MATH = new MathRoleImpl;
  MENUBAR = new MenubarRoleImpl;
  MENUITEMCHECKBOX = new MenuitemcheckboxRoleImpl;
  MENUITEMRADIO = new MenuitemradioRoleImpl;
  MENUITEM = new MenuitemRoleImpl;
  MENU = new MenuRoleImpl;
  NAVIGATION = new NavigationRoleImpl;
  NOTE = new NoteRoleImpl;
  OPTION = new OptionRoleImpl;
  PRESENTATION = new PresentationRoleImpl;
  PROGRESSBAR = new ProgressbarRoleImpl;
  RADIOGROUP = new RadiogroupRoleImpl;
  RADIO = new RadioRoleImpl;
  REGION = new RegionRoleImpl;
  ROWGROUP = new RowgroupRoleImpl;
  ROWHEADER = new RowheaderRoleImpl;
  ROW = new RowRoleImpl;
  SCROLLBAR = new ScrollbarRoleImpl;
  SEARCH = new SearchRoleImpl;
  SEPARATOR = new SeparatorRoleImpl;
  SLIDER = new SliderRoleImpl;
  SPINBUTTON = new SpinbuttonRoleImpl;
  STATUS = new StatusRoleImpl;
  TABLIST = new TablistRoleImpl;
  TABPANEL = new TabpanelRoleImpl;
  TAB = new TabRoleImpl;
  TEXTBOX = new TextboxRoleImpl;
  TIMER = new TimerRoleImpl;
  TOOLBAR = new ToolbarRoleImpl;
  TOOLTIP = new TooltipRoleImpl;
  TREEGRID = new TreegridRoleImpl;
  TREEITEM = new TreeitemRoleImpl;
  TREE = new TreeRoleImpl;
  ROLES_MAP = new HashMap;
  ROLES_MAP.put('region', REGION);
  ROLES_MAP.put('alert', ALERT);
  ROLES_MAP.put('dialog', DIALOG);
  ROLES_MAP.put('alertdialog', ALERTDIALOG);
  ROLES_MAP.put('application', APPLICATION);
  ROLES_MAP.put('document', DOCUMENT);
  ROLES_MAP.put('article', ARTICLE);
  ROLES_MAP.put('banner', BANNER);
  ROLES_MAP.put('button', BUTTON);
  ROLES_MAP.put('checkbox', CHECKBOX);
  ROLES_MAP.put('gridcell', GRIDCELL);
  ROLES_MAP.put('columnheader', COLUMNHEADER);
  ROLES_MAP.put('group', GROUP);
  ROLES_MAP.put('combobox', COMBOBOX);
  ROLES_MAP.put('complementary', COMPLEMENTARY);
  ROLES_MAP.put('contentinfo', CONTENTINFO);
  ROLES_MAP.put('definition', DEFINITION);
  ROLES_MAP.put('list', LIST);
  ROLES_MAP.put('directory', DIRECTORY);
  ROLES_MAP.put('form', FORM);
  ROLES_MAP.put('grid', GRID);
  ROLES_MAP.put('heading', HEADING);
  ROLES_MAP.put('img', IMG);
  ROLES_MAP.put('link', LINK);
  ROLES_MAP.put('listbox', LISTBOX);
  ROLES_MAP.put('listitem', LISTITEM);
  ROLES_MAP.put('log', LOG);
  ROLES_MAP.put('main', MAIN);
  ROLES_MAP.put('marquee', MARQUEE);
  ROLES_MAP.put('math', MATH);
  ROLES_MAP.put('menu', MENU);
  ROLES_MAP.put('menubar', MENUBAR);
  ROLES_MAP.put('menuitem', MENUITEM);
  ROLES_MAP.put('menuitemcheckbox', MENUITEMCHECKBOX);
  ROLES_MAP.put('option', OPTION);
  ROLES_MAP.put('radio', RADIO);
  ROLES_MAP.put('menuitemradio', MENUITEMRADIO);
  ROLES_MAP.put('navigation', NAVIGATION);
  ROLES_MAP.put('note', NOTE);
  ROLES_MAP.put('presentation', PRESENTATION);
  ROLES_MAP.put('progressbar', PROGRESSBAR);
  ROLES_MAP.put('radiogroup', RADIOGROUP);
  ROLES_MAP.put('row', ROW);
  ROLES_MAP.put('rowgroup', ROWGROUP);
  ROLES_MAP.put('rowheader', ROWHEADER);
  ROLES_MAP.put('search', SEARCH);
  ROLES_MAP.put('separator', SEPARATOR);
  ROLES_MAP.put('scrollbar', SCROLLBAR);
  ROLES_MAP.put('slider', SLIDER);
  ROLES_MAP.put('spinbutton', SPINBUTTON);
  ROLES_MAP.put('status', STATUS);
  ROLES_MAP.put('tab', TAB);
  ROLES_MAP.put('tablist', TABLIST);
  ROLES_MAP.put('tabpanel', TABPANEL);
  ROLES_MAP.put('textbox', TEXTBOX);
  ROLES_MAP.put('timer', TIMER);
  ROLES_MAP.put('toolbar', TOOLBAR);
  ROLES_MAP.put('tooltip', TOOLTIP);
  ROLES_MAP.put('tree', TREE);
  ROLES_MAP.put('treegrid', TREEGRID);
  ROLES_MAP.put('treeitem', TREEITEM);
}

var ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENUITEM, MENUITEMCHECKBOX, MENUITEMRADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROLES_MAP, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TABLIST, TABPANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM;
function RowRoleImpl(){
  RoleImpl.call(this, 'row');
}

defineClass(449, 17, {}, RowRoleImpl);
var Lcom_google_gwt_aria_client_RowRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowRoleImpl', 449);
function RowgroupRoleImpl(){
  RoleImpl.call(this, 'rowgroup');
}

defineClass(447, 17, {}, RowgroupRoleImpl);
var Lcom_google_gwt_aria_client_RowgroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowgroupRoleImpl', 447);
function RowheaderRoleImpl(){
  RoleImpl.call(this, 'rowheader');
}

defineClass(448, 17, {}, RowheaderRoleImpl);
var Lcom_google_gwt_aria_client_RowheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowheaderRoleImpl', 448);
function ScrollbarRoleImpl(){
  RoleImpl.call(this, 'scrollbar');
}

defineClass(450, 17, {}, ScrollbarRoleImpl);
var Lcom_google_gwt_aria_client_ScrollbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ScrollbarRoleImpl', 450);
function SearchRoleImpl(){
  RoleImpl.call(this, 'search');
}

defineClass(451, 17, {}, SearchRoleImpl);
var Lcom_google_gwt_aria_client_SearchRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SearchRoleImpl', 451);
function $clinit_SelectedValue(){
  $clinit_SelectedValue = emptyMethod;
  TRUE_0 = new SelectedValue('TRUE', 0);
  FALSE_0 = new SelectedValue('FALSE', 1);
  UNDEFINED_0 = new SelectedValue('UNDEFINED', 2);
}

function SelectedValue(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_SelectedValue();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_SelectedValue_2_classLit, 1), $intern_2, 122, 0, [TRUE_0, FALSE_0, UNDEFINED_0]);
}

defineClass(122, 7, {241:1, 122:1, 3:1, 8:1, 7:1}, SelectedValue);
_.getAriaValue = function getAriaValue_1(){
  switch (this.ordinal) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'undefined';
  }
  return null;
}
;
var FALSE_0, TRUE_0, UNDEFINED_0;
var Lcom_google_gwt_aria_client_SelectedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'SelectedValue', 122, Ljava_lang_Enum_2_classLit, values_1);
function SeparatorRoleImpl(){
  RoleImpl.call(this, 'separator');
}

defineClass(452, 17, {}, SeparatorRoleImpl);
var Lcom_google_gwt_aria_client_SeparatorRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SeparatorRoleImpl', 452);
function SliderRoleImpl(){
  RoleImpl.call(this, 'slider');
}

defineClass(453, 17, {}, SliderRoleImpl);
var Lcom_google_gwt_aria_client_SliderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SliderRoleImpl', 453);
function SpinbuttonRoleImpl(){
  RoleImpl.call(this, 'spinbutton');
}

defineClass(454, 17, {}, SpinbuttonRoleImpl);
var Lcom_google_gwt_aria_client_SpinbuttonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SpinbuttonRoleImpl', 454);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  PRESSED = new AriaValueAttribute('aria-pressed');
  SELECTED = new AriaValueAttribute('aria-selected');
}

var PRESSED, SELECTED;
function StatusRoleImpl(){
  RoleImpl.call(this, 'status');
}

defineClass(455, 17, {}, StatusRoleImpl);
var Lcom_google_gwt_aria_client_StatusRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'StatusRoleImpl', 455);
function TabRoleImpl(){
  RoleImpl.call(this, 'tab');
}

defineClass(458, 17, {}, TabRoleImpl);
var Lcom_google_gwt_aria_client_TabRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabRoleImpl', 458);
function TablistRoleImpl(){
  RoleImpl.call(this, 'tablist');
}

defineClass(456, 17, {}, TablistRoleImpl);
var Lcom_google_gwt_aria_client_TablistRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TablistRoleImpl', 456);
function TabpanelRoleImpl(){
  RoleImpl.call(this, 'tabpanel');
}

defineClass(457, 17, {}, TabpanelRoleImpl);
var Lcom_google_gwt_aria_client_TabpanelRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabpanelRoleImpl', 457);
function TextboxRoleImpl(){
  RoleImpl.call(this, 'textbox');
}

defineClass(459, 17, {}, TextboxRoleImpl);
var Lcom_google_gwt_aria_client_TextboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TextboxRoleImpl', 459);
function TimerRoleImpl(){
  RoleImpl.call(this, 'timer');
}

defineClass(460, 17, {}, TimerRoleImpl);
var Lcom_google_gwt_aria_client_TimerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TimerRoleImpl', 460);
function ToolbarRoleImpl(){
  RoleImpl.call(this, 'toolbar');
}

defineClass(461, 17, {}, ToolbarRoleImpl);
var Lcom_google_gwt_aria_client_ToolbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ToolbarRoleImpl', 461);
function TooltipRoleImpl(){
  RoleImpl.call(this, 'tooltip');
}

defineClass(462, 17, {}, TooltipRoleImpl);
var Lcom_google_gwt_aria_client_TooltipRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TooltipRoleImpl', 462);
function TreeRoleImpl(){
  RoleImpl.call(this, 'tree');
}

defineClass(465, 17, {}, TreeRoleImpl);
var Lcom_google_gwt_aria_client_TreeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeRoleImpl', 465);
function TreegridRoleImpl(){
  RoleImpl.call(this, 'treegrid');
}

defineClass(463, 17, {}, TreegridRoleImpl);
var Lcom_google_gwt_aria_client_TreegridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreegridRoleImpl', 463);
function TreeitemRoleImpl(){
  RoleImpl.call(this, 'treeitem');
}

defineClass(464, 17, {}, TreeitemRoleImpl);
var Lcom_google_gwt_aria_client_TreeitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeitemRoleImpl', 464);
function $elapsedMillis(this$static){
  return now_1() - this$static.start_0;
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(165, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 165);
function isScript(){
  return true;
}

function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
  return this$static;
}

function $initCause(this$static, cause){
  checkState_0(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTrace(this$static){
  var element$array, element$index, element$max, t, stackTrace;
  for (t = this$static; t; t = t.cause) {
    for (element$array = (t.stackTrace == null && (t.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(t) , dropInternalFrames(stackTrace))) , t.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
    ;
  }
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(19, 1, $intern_3);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_2(){
  var className, msg;
  return className = $getName(this.___clazz$) , msg = this.getMessage() , msg != null?className + ': ' + msg:className;
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 19);
function Exception(){
  $fillInStackTrace(this);
}

function Exception_0(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(22, 19, $intern_4, Exception);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 22);
function RuntimeException(){
  Exception.call(this);
}

function RuntimeException_0(message){
  Exception_0.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(33, 22, $intern_4, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 33);
defineClass(266, 33, $intern_4);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 266);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(72, 266, {72:1, 3:1, 22:1, 19:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 72);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $setDate(this$static, dayOfMonth){
  this$static.setDate(dayOfMonth);
  return this$static.getTime();
}

function $setFullYear(this$static, year){
  this$static.setFullYear(year);
  return this$static.getTime();
}

function $setFullYear_0(this$static, year, month, day){
  this$static.setFullYear(year, month, day);
  return this$static.getTime();
}

function $setHours(this$static, hours){
  this$static.setHours(hours);
  return this$static.getTime();
}

function $setHours_0(this$static, hours, mins, secs, ms){
  this$static.setHours(hours, mins, secs, ms);
  return this$static.getTime();
}

function $setMinutes(this$static, minutes){
  this$static.setMinutes(minutes);
  return this$static.getTime();
}

function $setMonth(this$static, month){
  this$static.setMonth(month);
  return this$static.getTime();
}

function $setSeconds(this$static, seconds){
  this$static.setSeconds(seconds);
  return this$static.getTime();
}

function $setTime(this$static, milliseconds){
  this$static.setTime(milliseconds);
  return this$static.getTime();
}

function create(milliseconds){
  return new Date(milliseconds);
}

function create_0(year, month, dayOfMonth, hours, minutes, seconds, millis){
  return new Date(year, month, dayOfMonth, hours, minutes, seconds, millis);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(697, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 697);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function getModuleBaseURL(){
  var key_0 = '__gwtDevModeHook:' + $moduleName + ':moduleBase';
  var global = $wnd || self;
  return global[key_0] || $moduleBase;
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 19)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 72)?dynamicCast(e, 72).getThrown():e);
      }
       else
        throw unwrap($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(402, 697, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 402);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(403, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 403);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(404, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 404);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_0(stackTrace.length, 5);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals_1(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return dynamicCast((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 683);
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

var collector;
defineClass(709, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 709);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(267, 709, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_5, 89, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 267);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_1(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_2(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals_1(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(710, 709, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_5, 89, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_1(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 710);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(268, 710, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 268);
function checkArrayType(expression, errorMessage){
  if (!expression) {
    throw new ArrayStoreException_0('' + errorMessage);
  }
}

function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalArgument_0(expression, errorMessageArgs){
  if (!expression) {
    throw new IllegalArgumentException_0(format_0('%s > %s', errorMessageArgs));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (reference == null) {
    throw new NullPointerException;
  }
  return reference;
}

function checkNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw new NullPointerException_0('' + errorMessage);
  }
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_0(expression){
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function format_0(template, args){
  var builder, i, placeholderStart, templateStart;
  template = '' + template;
  builder = new StringBuilder_0(template.length + 16 * args.length);
  templateStart = 0;
  i = 0;
  while (i < args.length) {
    placeholderStart = template.indexOf('%s', templateStart);
    if (placeholderStart == -1) {
      break;
    }
    $append_3(builder, template.substr(templateStart, placeholderStart - templateStart));
    $append_2(builder, args[i++]);
    templateStart = placeholderStart + 2;
  }
  $append_3(builder, __substr(template, templateStart, template.length - templateStart));
  if (i < args.length) {
    builder.string += ' [';
    $append_2(builder, args[i++]);
    while (i < args.length) {
      builder.string += ', ';
      $append_2(builder, args[i++]);
    }
    builder.string += ']';
  }
  return builder.string;
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeAllChildren(this$static){
  while (this$static.lastChild) {
    this$static.removeChild(this$static.lastChild);
  }
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getSubPixelScrollWidth(this$static){
  return this$static.scrollWidth || 0;
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyInt(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $setHref(this$static, href_0){
  this$static.href = href_0;
}

function $setTarget(this$static, target){
  this$static.target = target;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt){
  return !!evt.shiftKey;
}

function $eventGetSubPixelClientX(evt){
  return evt.clientX || 0;
}

function $eventGetSubPixelClientY(evt){
  return evt.clientY || 0;
}

function $eventStopPropagation(evt){
  evt.stopPropagation();
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $getSubPixelScrollLeft(elem){
  return elem.scrollLeft || 0;
}

function $selectAdd(select, option, before){
  select.add(option, before);
}

function $touchGetSubPixelPageX(touch){
  return touch.pageX || 0;
}

function $touchGetSubPixelPageY(touch){
  return touch.pageY || 0;
}

function $createMouseEvent(doc, type_0, canBubble, cancelable, detail, screenX_0, screenY_0, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
  button == 1?(button = 0):button == 4?(button = 1):(button = 2);
  var evt = doc.createEvent('MouseEvents');
  evt.initMouseEvent(type_0, canBubble, cancelable, null, detail, screenX_0, screenY_0, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget);
  return evt;
}

function $dispatchEvent(target, evt){
  target.dispatchEvent(evt);
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $eventPreventDefault(evt){
  evt.preventDefault();
}

function $isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}

function $setInnerText(elem, text_0){
  elem.textContent = text_0 || '';
}

function $eventGetCurrentTarget(event_0){
  return event_0.currentTarget || $wnd;
}

function $getAbsoluteLeft(elem){
  var left, rect;
  rect = getBoundingClientRect(elem);
  left = rect?rect.left + $getScrollLeft_0(elem.ownerDocument.body):getAbsoluteLeftUsingOffsets(elem);
  return left | 0;
}

function $getAbsoluteTop(elem){
  var rect, top_0, top_1;
  rect = getBoundingClientRect(elem);
  top_0 = rect?rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(elem);
  return top_0 | 0;
}

function $getScrollLeft(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem){
  if (!$equalsIgnoreCase('body', elem.tagName) && $isRTL(elem)) {
    return ($getSubPixelScrollLeft(elem) | 0) - (($getSubPixelScrollWidth(elem) | 0) - (elem.clientWidth | 0));
  }
  return $getSubPixelScrollLeft(elem) | 0;
}

function $getScrollTop(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function $getTabIndex(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}

function $isRTL(elem){
  return elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl';
}

function $setScrollLeft(elem, left){
  !$equalsIgnoreCase('body', elem.tagName) && $isRTL(elem) && (left += ($getSubPixelScrollWidth(elem) | 0) - (elem.clientWidth | 0));
  elem.scrollLeft = left;
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function getBoundingClientRect(element){
  return element.getBoundingClientRect && element.getBoundingClientRect();
}

function $eventGetTarget(evt){
  var target = evt.target;
  target && target.nodeType == 3 && (target = target.parentNode);
  return target;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getClientHeight(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollHeight(this$static){
  return (($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function $getScrollWidth(this$static){
  return (($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $isChecked(this$static){
  return !!this$static.checked;
}

function $isDefaultChecked(this$static){
  return !!this$static.defaultChecked;
}

function $setChecked(this$static, checked){
  this$static.checked = checked;
}

function $setDefaultChecked(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function $setHtmlFor(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function $setSelectedIndex(this$static, index_0){
  this$static.selectedIndex = index_0;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Display();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_2, 26, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL]);
}

defineClass(26, 7, $intern_6);
var BLOCK, INITIAL, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 26, Ljava_lang_Enum_2_classLit, values_2);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(360, 26, $intern_6, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 360, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(369, 26, $intern_6, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 369, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(370, 26, $intern_6, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 370, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(371, 26, $intern_6, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 371, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(372, 26, $intern_6, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 372, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(373, 26, $intern_6, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 373, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(374, 26, $intern_6, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 374, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(375, 26, $intern_6, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 375, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(376, 26, $intern_6, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 376, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(361, 26, $intern_6, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 361, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(362, 26, $intern_6, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 362, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(363, 26, $intern_6, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 363, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(364, 26, $intern_6, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 364, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(365, 26, $intern_6, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 365, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(366, 26, $intern_6, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 366, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(367, 26, $intern_6, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 367, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(368, 26, $intern_6, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 368, Lcom_google_gwt_dom_client_Style$Display_2_classLit, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_2, 74, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(74, 7, $intern_7);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 74, Ljava_lang_Enum_2_classLit, values_3);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(377, 74, $intern_7, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 377, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(378, 74, $intern_7, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 378, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(379, 74, $intern_7, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 379, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(380, 74, $intern_7, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 380, Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_2, 75, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(75, 7, $intern_8);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 75, Ljava_lang_Enum_2_classLit, values_4);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(381, 75, $intern_8, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 381, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(382, 75, $intern_8, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 382, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(383, 75, $intern_8, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 383, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(384, 75, $intern_8, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 384, Lcom_google_gwt_dom_client_Style$Position_2_classLit, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_2, 76, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(76, 7, $intern_9);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 76, Ljava_lang_Enum_2_classLit, values_5);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(385, 76, $intern_9, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 385, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(386, 76, $intern_9, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 386, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(387, 76, $intern_9, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 387, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(388, 76, $intern_9, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 388, Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_2, 45, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(45, 7, $intern_10);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 45, Ljava_lang_Enum_2_classLit, values_6);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(351, 45, $intern_10, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 351, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(352, 45, $intern_10, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 352, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(353, 45, $intern_10, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 353, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(354, 45, $intern_10, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 354, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(355, 45, $intern_10, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 355, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(356, 45, $intern_10, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 356, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(357, 45, $intern_10, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 357, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(358, 45, $intern_10, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 358, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(359, 45, $intern_10, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 359, Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$WhiteSpace();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_2, 63, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(63, 7, $intern_11);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 63, Ljava_lang_Enum_2_classLit, values_7);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(389, 63, $intern_11, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 389, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(390, 63, $intern_11, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 390, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(391, 63, $intern_11, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 391, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(392, 63, $intern_11, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 392, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(393, 63, $intern_11, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 393, Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, null);
defineClass(718, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 718);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(719, 718, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 719);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 55);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), 47);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(727, 719, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 727);
function $clinit_BlurEvent(){
  $clinit_BlurEvent = emptyMethod;
  TYPE = new DomEvent$Type('blur', new BlurEvent);
}

function BlurEvent(){
}

defineClass(667, 727, {}, BlurEvent);
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 694).onBlur(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'BlurEvent', 667);
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('change', new ChangeEvent);
}

function ChangeEvent(){
}

defineClass(637, 727, {}, ChangeEvent);
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 156).onChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ChangeEvent', 637);
defineClass(729, 727, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 729);
function $getX(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ($eventGetSubPixelClientX(e) | 0) - $getAbsoluteLeft(relativeElem) + $getScrollLeft_0(relativeElem) + $getScrollLeft(relativeElem.ownerDocument);
  }
  return $eventGetSubPixelClientX(this$static.nativeEvent) | 0;
}

function $getY(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , ($eventGetSubPixelClientY(e) | 0) - $getAbsoluteTop(relativeElem) + ((relativeElem.scrollTop || 0) | 0) + $getScrollTop(relativeElem.ownerDocument);
  }
  return $eventGetSubPixelClientY(this$static.nativeEvent) | 0;
}

defineClass(730, 729, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 730);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(552, 730, {}, ClickEvent);
_.dispatch = function dispatch_1(handler){
  dynamicCast(handler, 187).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 552);
defineClass(329, 1, {});
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 329);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(62, 329, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 62);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 55);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_0(this);
  this.name_0 = eventName;
}

defineClass(47, 62, {47:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 47);
function $clinit_FocusEvent(){
  $clinit_FocusEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('focus', new FocusEvent_0);
}

function $dispatch(handler){
  handler.this$01.allowDPShow && !handler.this$01.popup.showing && $showDatePicker(handler.this$01);
}

function FocusEvent_0(){
}

defineClass(666, 727, {}, FocusEvent_0);
_.dispatch = function dispatch_2(handler){
  $dispatch(dynamicCast(handler, 749));
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'FocusEvent', 666);
defineClass(739, 727, {});
var Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyEvent', 739);
defineClass(740, 739, {});
var Lcom_google_gwt_event_dom_client_KeyCodeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyCodeEvent', 740);
function $clinit_KeyDownEvent(){
  $clinit_KeyDownEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('keydown', new KeyDownEvent);
}

function KeyDownEvent(){
}

defineClass(646, 740, {}, KeyDownEvent);
_.dispatch = function dispatch_3(handler){
  dynamicCast(handler, 188).onKeyDown(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_KeyDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyDownEvent', 646);
function $clinit_KeyPressEvent(){
  $clinit_KeyPressEvent = emptyMethod;
  TYPE_4 = new DomEvent$Type('keypress', new KeyPressEvent);
}

function $dispatch_0(this$static, handler){
  dynamicCast(handler.listener, 113).onKeyPress(!handler.source?dynamicCast(this$static.source, 6):handler.source, $eventGetKeyCode(this$static.nativeEvent) & $intern_12, getKeyboardModifiers(this$static.nativeEvent));
}

function KeyPressEvent(){
}

defineClass(648, 739, {}, KeyPressEvent);
_.dispatch = function dispatch_4(handler){
  $dispatch_0(this, dynamicCast(handler, 750));
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyPressEvent', 648);
function $clinit_KeyUpEvent(){
  $clinit_KeyUpEvent = emptyMethod;
  TYPE_5 = new DomEvent$Type('keyup', new KeyUpEvent);
}

function KeyUpEvent(){
}

defineClass(647, 740, {}, KeyUpEvent);
_.dispatch = function dispatch_5(handler){
  dynamicCast(handler, 695).onKeyUp(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_6(){
  return TYPE_5;
}
;
var TYPE_5;
var Lcom_google_gwt_event_dom_client_KeyUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'KeyUpEvent', 647);
function $clinit_MouseDownEvent(){
  $clinit_MouseDownEvent = emptyMethod;
  TYPE_6 = new DomEvent$Type('mousedown', new MouseDownEvent);
}

function MouseDownEvent(){
}

defineClass(544, 730, {}, MouseDownEvent);
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, 688).onMouseDown(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseDownEvent', 544);
function $clinit_MouseMoveEvent(){
  $clinit_MouseMoveEvent = emptyMethod;
  TYPE_7 = new DomEvent$Type('mousemove', new MouseMoveEvent);
}

function MouseMoveEvent(){
}

defineClass(546, 730, {}, MouseMoveEvent);
_.dispatch = function dispatch_7(handler){
  dynamicCast(handler, 692).onMouseMove(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_8(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseMoveEvent', 546);
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = emptyMethod;
  TYPE_8 = new DomEvent$Type('mouseout', new MouseOutEvent);
}

function MouseOutEvent(){
}

defineClass(548, 730, {}, MouseOutEvent);
_.dispatch = function dispatch_8(handler){
  dynamicCast(handler, 690).onMouseOut(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOutEvent', 548);
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = emptyMethod;
  TYPE_9 = new DomEvent$Type('mouseover', new MouseOverEvent);
}

function MouseOverEvent(){
}

defineClass(547, 730, {}, MouseOverEvent);
_.dispatch = function dispatch_9(handler){
  dynamicCast(handler, 691).onMouseOver(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_10(){
  return TYPE_9;
}
;
var TYPE_9;
var Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOverEvent', 547);
function $clinit_MouseUpEvent(){
  $clinit_MouseUpEvent = emptyMethod;
  TYPE_10 = new DomEvent$Type('mouseup', new MouseUpEvent);
}

function MouseUpEvent(){
}

defineClass(545, 730, {}, MouseUpEvent);
_.dispatch = function dispatch_10(handler){
  dynamicCast(handler, 689).onMouseUp(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_11(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseUpEvent', 545);
function $unsafeGet(this$static, key_0){
  return this$static.map_0[key_0];
}

function $unsafePut(this$static, key_0, value_0){
  this$static.map_0[key_0] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(526, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 526);
defineClass(732, 729, {});
var impl;
var Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent', 732);
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = emptyMethod;
  TYPE_11 = new DomEvent$Type('touchcancel', new TouchCancelEvent);
}

function TouchCancelEvent(){
}

defineClass(614, 732, {}, TouchCancelEvent);
_.dispatch = function dispatch_11(handler){
  $onTouchEnd(dynamicCast(handler, 754).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_12(){
  return TYPE_11;
}
;
var TYPE_11;
var Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchCancelEvent', 614);
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = emptyMethod;
  TYPE_12 = new DomEvent$Type('touchend', new TouchEndEvent);
}

function TouchEndEvent(){
}

defineClass(613, 732, {}, TouchEndEvent);
_.dispatch = function dispatch_12(handler){
  $onTouchEnd(dynamicCast(handler, 753).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_13(){
  return TYPE_12;
}
;
var TYPE_12;
var Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEndEvent', 613);
function TouchEvent$TouchSupportDetector(){
  var elem;
  this.isSupported = (elem = document.createElement('div') , elem.setAttribute('ontouchstart', 'return;') , typeof elem.ontouchstart == 'function');
}

defineClass(611, 1, {}, TouchEvent$TouchSupportDetector);
_.isSupported = false;
var Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent/TouchSupportDetector', 611);
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = emptyMethod;
  TYPE_13 = new DomEvent$Type('touchmove', new TouchMoveEvent);
}

function $dispatch_1(this$static, handler){
  $onTouchMove(handler.this$01, this$static);
}

function TouchMoveEvent(){
}

defineClass(612, 732, {}, TouchMoveEvent);
_.dispatch = function dispatch_13(handler){
  $dispatch_1(this, dynamicCast(handler, 752));
}
;
_.getAssociatedType_0 = function getAssociatedType_14(){
  return TYPE_13;
}
;
var TYPE_13;
var Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchMoveEvent', 612);
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = emptyMethod;
  TYPE_14 = new DomEvent$Type('touchstart', new TouchStartEvent);
}

function $dispatch_2(this$static, handler){
  $onTouchStart(handler.this$01, this$static);
}

function TouchStartEvent(){
}

defineClass(610, 732, {}, TouchStartEvent);
_.dispatch = function dispatch_14(handler){
  $dispatch_2(this, dynamicCast(handler, 751));
}
;
_.getAssociatedType_0 = function getAssociatedType_15(){
  return TYPE_14;
}
;
var TYPE_14;
var Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchStartEvent', 610);
function $dispatch_3(this$static, handler){
  this$static.attached?$setupBustClickHandler(handler.this$01):$removeBustClickHandler(handler.this$01);
}

function AttachEvent(attached){
  this.attached = attached;
}

function fire_0(source, attached){
  var event_0;
  if (TYPE_15) {
    event_0 = new AttachEvent(attached);
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(471, 719, {}, AttachEvent);
_.dispatch = function dispatch_15(handler){
  $dispatch_3(this, dynamicCast(handler, 746));
}
;
_.getAssociatedType = function getAssociatedType_16(){
  return TYPE_15;
}
;
_.attached = false;
var TYPE_15;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 471);
function fire_1(){
  return null;
}

function CloseEvent_0(){
}

function fire_2(source){
  var event_0;
  if (TYPE_16) {
    event_0 = new CloseEvent_0;
    source.fireEvent(event_0);
  }
}

defineClass(470, 719, {}, CloseEvent_0);
_.dispatch = function dispatch_16(handler){
  dynamicCast(handler, 684).onClose(this);
}
;
_.getAssociatedType = function getAssociatedType_17(){
  return TYPE_16;
}
;
var TYPE_16;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 470);
defineClass(733, 719, {});
_.dispatch = function dispatch_17(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_18(){
  return TYPE_17;
}
;
var TYPE_17;
var Lcom_google_gwt_event_logical_shared_HighlightEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'HighlightEvent', 733);
function ResizeEvent(width_0){
  this.width_0 = width_0;
}

function fire_3(source, width_0){
  var event_0;
  if (TYPE_18) {
    event_0 = new ResizeEvent(width_0);
    $fireEvent(source, event_0);
  }
}

defineClass(542, 719, {}, ResizeEvent);
_.dispatch = function dispatch_18(handler){
  dynamicCast(handler, 240).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_19(){
  return TYPE_18;
}
;
_.width_0 = 0;
var TYPE_18;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 542);
function SelectionEvent(selectedItem){
  this.selectedItem = selectedItem;
}

function fire_4(source, selectedItem){
  var event_0;
  if (TYPE_19) {
    event_0 = new SelectionEvent(selectedItem);
    source.fireEvent(event_0);
  }
}

defineClass(394, 719, {}, SelectionEvent);
_.dispatch = function dispatch_19(handler){
  dynamicCast(handler, 681).onSelection(this);
}
;
_.getAssociatedType = function getAssociatedType_20(){
  return TYPE_19;
}
;
var TYPE_19;
var Lcom_google_gwt_event_logical_shared_SelectionEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'SelectionEvent', 394);
function ValueChangeEvent(value_0){
  this.value_0 = value_0;
}

function fire_5(source, value_0){
  var event_0;
  if (TYPE_20) {
    event_0 = new ValueChangeEvent(value_0);
    source.fireEvent(event_0);
  }
}

function fireIfNotEqual(source, oldValue, newValue){
  var event_0;
  if (!!TYPE_20 && oldValue != newValue && (!oldValue || !(!!newValue && newValue.value_0 == oldValue.value_0))) {
    event_0 = new ValueChangeEvent(newValue);
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(167, 719, {}, ValueChangeEvent);
_.dispatch = function dispatch_20(handler){
  dynamicCast(handler, 143).onValueChange(this);
}
;
_.getAssociatedType = function getAssociatedType_21(){
  return TYPE_20;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
var TYPE_20;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 167);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 120)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else
      throw unwrap($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(121, 1, {11:1}, HandlerManager, HandlerManager_0);
_.fireEvent = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 121);
defineClass(720, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 720);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_5(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  if (!handler) {
    throw new NullPointerException_0('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(dynamicCast(handler, 31));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 19)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_12(causes, e);
        }
         else
          throw unwrap($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_1(handler);
  removed && l.isEmpty() && (sourceMap = dynamicCast(this$static.map_0.get_1(type_0), 58) , dynamicCast(sourceMap.remove_3(source), 55) , sourceMap.isEmpty() && this$static.map_0.remove_3(type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_1(type_0), 58);
  if (!sourceMap) {
    sourceMap = new HashMap;
    this$static.map_0.put(type_0, sourceMap);
  }
  handlers = dynamicCast(sourceMap.get_1(source), 55);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0, null);
  return directHandlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast(this$static.map_0.get_1(type_0), 58);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(sourceMap.get_1(source), 55);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_0(c$iterator.last = c$iterator.i++), 685));
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return this$static.map_0.containsKey(eventKey);
}

defineClass(330, 720, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 330);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(331, 330, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 331);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(469, 1, {745:1}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 469);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next_0(), 19);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next_0(), 19);
    first?(first = false):(b.string += '; ' , b);
    $append_3(b, t.getMessage());
  }
  return b.string;
}

defineClass(120, 33, $intern_13, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 120);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(193, 120, $intern_13, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 193);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new ResponseImpl(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  $onError(this$static.callback, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (!callback) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(496, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 496);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(498, 206, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 498);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 72)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else
      throw unwrap($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 72)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else
      throw unwrap($e1);
  }
  return request;
}

function $setHeader(this$static, header, value_0){
  throwIfEmptyOrNull('header', header);
  throwIfEmptyOrNull('value', value_0);
  !this$static.headers && (this$static.headers = new HashMap);
  this$static.headers.put(header, value_0);
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_1() > 0) {
    for (header$iterator = this$static.headers.entrySet().iterator(); header$iterator.hasNext();) {
      header = dynamicCast(header$iterator.next_0(), 32);
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCastToString(header.getKey()), dynamicCastToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 72)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        }
         else
          throw unwrap($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(168, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 168);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(503, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 503);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(136, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 136);
function RequestException(message){
  Exception_0.call(this, message);
}

defineClass(85, 22, $intern_14, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 85);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(514, 85, $intern_14, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 514);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(592, 85, $intern_14, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 592);
defineClass(725, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 725);
function ResponseImpl(xmlHttpRequest){
  this.xmlHttpRequest = xmlHttpRequest;
}

defineClass(497, 725, {}, ResponseImpl);
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 497);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = emptyMethod;
  new HashMap;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.string.length > 0) {
    $add_5(this$static.patternParts, new DateTimeFormat$PatternPart(buf.string, count));
    oldLength = buf.string.length;
    0 < oldLength?(buf.string = $substring_0(buf.string, 0, 0)):0 > oldLength && (buf.string += valueOf_5(initDim(C_classLit, $intern_15, 0, -oldLength, 7, 1)));
  }
}

function $format(this$static, date, timeZone){
  var ch_0, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  !timeZone && (timeZone = createTimeZone(date.jsdate.getTimezoneOffset()));
  diff = (date.jsdate.getTimezoneOffset() - timeZone.standardOffset) * 60000;
  keepDate = new Date_2(add_1(date.getTime_0(), fromInt(diff)));
  keepTime = keepDate;
  if (keepDate.jsdate.getTimezoneOffset() != date.jsdate.getTimezoneOffset()) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = new Date_2(add_1(date.getTime_0(), fromInt(diff)));
  }
  toAppendTo = new StringBuilder_0;
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch_0 = $charAt_0(this$static.pattern, i);
    if (ch_0 >= 97 && ch_0 <= 122 || ch_0 >= 65 && ch_0 <= 90) {
      for (j = i + 1; j < n && $charAt_0(this$static.pattern, j) == ch_0; ++j)
      ;
      $subFormat(toAppendTo, ch_0, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch_0 == 39) {
      ++i;
      if (i < n && $charAt_0(this$static.pattern, i) == 39) {
        toAppendTo.string += "'";
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && $charAt_0(this$static.pattern, j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw new IllegalArgumentException_0("Missing trailing '");
        }
        j + 1 < n && $charAt_0(this$static.pattern, j + 1) == 39?++j:(trailQuote = true);
        $append_3(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      toAppendTo.string += charToString(ch_0);
      ++i;
    }
  }
  return toAppendTo.string;
}

function $formatFractionalSeconds(buf, count, date){
  var time, value_0;
  time = date.getTime_0();
  if (lt(time, {l:0, m:0, h:0})) {
    value_0 = 1000 - toInt(mod(neg(time), {l:1000, m:0, h:0}));
    value_0 == 1000 && (value_0 = 0);
  }
   else {
    value_0 = toInt(mod(time, {l:1000, m:0, h:0}));
  }
  if (count == 1) {
    value_0 = ~~((value_0 + 50) / 100) < 9?~~((value_0 + 50) / 100):9;
    $append_1(buf, 48 + value_0 & $intern_12);
  }
   else if (count == 2) {
    value_0 = ~~((value_0 + 5) / 10) < 99?~~((value_0 + 5) / 10):99;
    $zeroPaddingNumber(buf, value_0, 2);
  }
   else {
    $zeroPaddingNumber(buf, value_0, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(buf, count, date){
  var value_0;
  value_0 = date.getMonth_0();
  switch (count) {
    case 5:
      $append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_0]);
      break;
    case 4:
      $append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_0]);
      break;
    case 3:
      $append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_0]);
      break;
    default:$zeroPaddingNumber(buf, value_0 + 1, count);
  }
}

function $formatYear(buf, count, date){
  var value_0;
  value_0 = date.getYear() + $intern_16;
  value_0 < 0 && (value_0 = -value_0);
  switch (count) {
    case 1:
      buf.string += value_0;
      break;
    case 2:
      $zeroPaddingNumber(buf, value_0 % 100, 2);
      break;
    default:$zeroPaddingNumber(buf, value_0, count);
  }
}

function $getNextCharCountInPattern(pattern, start_0){
  var ch_0, next;
  ch_0 = pattern.charCodeAt(start_0);
  next = start_0 + 1;
  while (next < pattern.length && pattern.charCodeAt(next) == ch_0) {
    ++next;
  }
  return next - start_0;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.array.length;
  for (i = 0; i < len; i++) {
    if ($isNumeric(dynamicCast($get_0(this$static.patternParts, i), 127))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_0(this$static.patternParts, i + 1), 127))) {
        abut = true;
        dynamicCast($get_0(this$static.patternParts, i), 127).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = $indexOf_2('MLydhHmsSDkK', fromCodePoint(part.text_0.charCodeAt(0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $matchString(text_0, start_0, data_0, pos){
  var bestMatch, bestMatchLength, count, i, length_0, textInLowerCase;
  count = data_0.length;
  bestMatchLength = 0;
  bestMatch = -1;
  textInLowerCase = __substr(text_0, start_0, text_0.length - start_0).toLowerCase();
  for (i = 0; i < count; ++i) {
    length_0 = data_0[i].length;
    if (length_0 > bestMatchLength && $startsWith(textInLowerCase, data_0[i].toLowerCase())) {
      bestMatch = i;
      bestMatchLength = length_0;
    }
  }
  bestMatch >= 0 && (pos[0] = start_0 + bestMatchLength);
  return bestMatch;
}

function $parse_0(this$static, text_0, date){
  var abutPass, abutPat, abutStart, cal, count, i, parsePos, part, s;
  cal = new DateRecord;
  parsePos = initValues(getClassLiteralForArray(I_classLit, 1), $intern_17, 0, 7, [0]);
  abutPat = -1;
  abutStart = 0;
  abutPass = 0;
  for (i = 0; i < this$static.patternParts.array.length; ++i) {
    part = dynamicCast($get_0(this$static.patternParts, i), 127);
    if (part.count > 0) {
      if (abutPat < 0 && part.abutStart) {
        abutPat = i;
        abutStart = parsePos[0];
        abutPass = 0;
      }
      if (abutPat >= 0) {
        count = part.count;
        if (i == abutPat) {
          count -= abutPass++;
          if (count == 0) {
            return 0;
          }
        }
        if (!$subParse(text_0, parsePos, part, count, cal)) {
          i = abutPat - 1;
          parsePos[0] = abutStart;
          continue;
        }
      }
       else {
        abutPat = -1;
        if (!$subParse(text_0, parsePos, part, 0, cal)) {
          return 0;
        }
      }
    }
     else {
      abutPat = -1;
      if (part.text_0.charCodeAt(0) == 32) {
        s = parsePos[0];
        $skipSpace(text_0, parsePos);
        if (parsePos[0] > s) {
          continue;
        }
      }
       else if ($startsWith_0(text_0, part.text_0, parsePos[0])) {
        parsePos[0] += part.text_0.length;
        continue;
      }
      return 0;
    }
  }
  if (!$calcDate(cal, date)) {
    return 0;
  }
  return parsePos[0];
}

function $parse_1(this$static, text_0){
  var charsConsumed, curDate, date;
  curDate = new Date_0;
  date = new Date_1(curDate.getYear(), curDate.getMonth_0(), curDate.getDate_0());
  charsConsumed = $parse_0(this$static, text_0, date);
  if (charsConsumed == 0 || charsConsumed < text_0.length) {
    throw new IllegalArgumentException_0(text_0);
  }
  return date;
}

function $parseInt(text_0, pos){
  var ch_0, ind, ret;
  ret = 0;
  ind = pos[0];
  if (ind >= text_0.length) {
    return -1;
  }
  ch_0 = text_0.charCodeAt(ind);
  while (ch_0 >= 48 && ch_0 <= 57) {
    ret = ret * 10 + (ch_0 - 48);
    ++ind;
    if (ind >= text_0.length) {
      break;
    }
    ch_0 = text_0.charCodeAt(ind);
  }
  ind > pos[0]?(pos[0] = ind):(ret = -1);
  return ret;
}

function $parsePattern(this$static, pattern){
  var buf, ch_0, count, i, inQuote;
  buf = new StringBuilder_0;
  inQuote = false;
  for (i = 0; i < pattern.length; i++) {
    ch_0 = pattern.charCodeAt(i);
    if (ch_0 == 32) {
      $addPart(this$static, buf, 0);
      buf.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch_0 == 39) {
        if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
          buf.string += "'";
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.string += charToString(ch_0);
      }
      continue;
    }
    if ($indexOf_2('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch_0)) > 0) {
      $addPart(this$static, buf, 0);
      buf.string += charToString(ch_0);
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch_0 == 39) {
      if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
        buf.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.string += charToString(ch_0);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $parseTimeZoneOffset(text_0, pos, cal){
  var offset, sign, st, value_0;
  if (pos[0] >= text_0.length) {
    cal.tzOffset = 0;
    return true;
  }
  switch (text_0.charCodeAt(pos[0])) {
    case 43:
      sign = 1;
      break;
    case 45:
      sign = -1;
      break;
    default:cal.tzOffset = 0;
      return true;
  }
  ++pos[0];
  st = pos[0];
  value_0 = $parseInt(text_0, pos);
  if (value_0 == 0 && pos[0] == st) {
    return false;
  }
  if (pos[0] < text_0.length && text_0.charCodeAt(pos[0]) == 58) {
    offset = value_0 * 60;
    ++pos[0];
    st = pos[0];
    value_0 = $parseInt(text_0, pos);
    if (value_0 == 0 && pos[0] == st) {
      return false;
    }
    offset += value_0;
  }
   else {
    offset = value_0;
    value_0 < 24 && pos[0] - st <= 2?(offset *= 60):(offset = value_0 % 100 + ~~(value_0 / 100) * 60);
  }
  offset *= sign;
  cal.tzOffset = -offset;
  return true;
}

function $skipSpace(text_0, pos){
  while (pos[0] < text_0.length && $indexOf_2(' \t\r\n', fromCodePoint(text_0.charCodeAt(pos[0]))) >= 0) {
    ++pos[0];
  }
}

function $subFormat(buf, ch_0, count, adjustedDate, adjustedTime, timezone){
  var value_0, value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8, value_9, value_10, value_11;
  switch (ch_0) {
    case 71:
      value_0 = adjustedDate.getYear() >= -1900?1:0;
      count >= 4?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Before Christ', 'Anno Domini'])[value_0]):$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['BC', 'AD'])[value_0]);
      break;
    case 121:
      $formatYear(buf, count, adjustedDate);
      break;
    case 77:
      $formatMonth(buf, count, adjustedDate);
      break;
    case 107:
      value_1 = adjustedTime.getHours_0();
      value_1 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value_1, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value_2 = adjustedDate.getDay_0();
      count == 5?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_2]):count == 4?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_2]):$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_2]);
      break;
    case 97:
      adjustedTime.getHours_0() >= 12 && adjustedTime.getHours_0() < 24?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['AM', 'PM'])[1]):$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['AM', 'PM'])[0]);
      break;
    case 104:
      value_3 = adjustedTime.getHours_0() % 12;
      value_3 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value_3, count);
      break;
    case 75:
      value_4 = adjustedTime.getHours_0() % 12;
      $zeroPaddingNumber(buf, value_4, count);
      break;
    case 72:
      value_5 = adjustedTime.getHours_0();
      $zeroPaddingNumber(buf, value_5, count);
      break;
    case 99:
      value_6 = adjustedDate.getDay_0();
      count == 5?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_6]):count == 4?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_6]):count == 3?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_6]):$zeroPaddingNumber(buf, value_6, 1);
      break;
    case 76:
      value_7 = adjustedDate.getMonth_0();
      count == 5?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_7]):count == 4?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_7]):count == 3?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_7]):$zeroPaddingNumber(buf, value_7 + 1, count);
      break;
    case 81:
      value_8 = ~~(adjustedDate.getMonth_0() / 3);
      count < 4?$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Q1', 'Q2', 'Q3', 'Q4'])[value_8]):$append_3(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value_8]);
      break;
    case 100:
      value_9 = adjustedDate.getDate_0();
      $zeroPaddingNumber(buf, value_9, count);
      break;
    case 109:
      value_10 = adjustedTime.getMinutes_0();
      $zeroPaddingNumber(buf, value_10, count);
      break;
    case 115:
      value_11 = adjustedTime.getSeconds_0();
      $zeroPaddingNumber(buf, value_11, count);
      break;
    case 122:
      count < 4?$append_3(buf, timezone.tzNames[0]):$append_3(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_3(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_3(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_3(buf, $getISOTimeZoneString(timezone)):$append_3(buf, composeGMTString(timezone.standardOffset));
      break;
    default:return false;
  }
  return true;
}

function $subParse(text_0, pos, part, digitCount, cal){
  var ch_0, start_0, value_0;
  $skipSpace(text_0, pos);
  start_0 = pos[0];
  ch_0 = part.text_0.charCodeAt(0);
  value_0 = -1;
  if ($isNumeric(part)) {
    if (digitCount > 0) {
      if (start_0 + digitCount > text_0.length) {
        return false;
      }
      value_0 = $parseInt(text_0.substr(0, start_0 + digitCount), pos);
    }
     else {
      value_0 = $parseInt(text_0, pos);
    }
  }
  switch (ch_0) {
    case 71:
      value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Before Christ', 'Anno Domini']), pos);
      cal.era = value_0;
      return true;
    case 77:
      return $subParseMonth(text_0, pos, cal, value_0, start_0);
    case 76:
      return $subParseStandaloneMonth(text_0, pos, cal, value_0, start_0);
    case 69:
      return $subParseDayOfWeek(text_0, pos, start_0, cal);
    case 99:
      return $subParseStandaloneDay(text_0, pos, start_0, cal);
    case 97:
      value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['AM', 'PM']), pos);
      cal.ampm = value_0;
      return true;
    case 121:
      return $subParseYear(text_0, pos, start_0, value_0, part, cal);
    case 100:
      if (value_0 <= 0) {
        return false;
      }

      cal.dayOfMonth = value_0;
      return true;
    case 83:
      if (value_0 < 0) {
        return false;
      }

      return $subParseFractionalSeconds(value_0, start_0, pos[0], cal);
    case 104:
      value_0 == 12 && (value_0 = 0);
    case 75:
    case 72:
      if (value_0 < 0) {
        return false;
      }

      cal.hours = value_0;
      cal.midnightIs24 = false;
      return true;
    case 107:
      if (value_0 < 0) {
        return false;
      }

      cal.hours = value_0;
      cal.midnightIs24 = true;
      return true;
    case 109:
      if (value_0 < 0) {
        return false;
      }

      cal.minutes = value_0;
      return true;
    case 115:
      if (value_0 < 0) {
        return false;
      }

      cal.seconds = value_0;
      return true;
    case 90:
      if (start_0 < text_0.length && text_0.charCodeAt(start_0) == 90) {
        ++pos[0];
        cal.tzOffset = 0;
        return true;
      }

    case 122:
    case 118:
      return $subParseTimeZoneInGMT(text_0, start_0, pos, cal);
    default:return false;
  }
}

function $subParseDayOfWeek(text_0, pos, start_0, cal){
  var value_0;
  value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value_0 < 0 && (value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value_0 < 0) {
    return false;
  }
  cal.dayOfWeek = value_0;
  return true;
}

function $subParseFractionalSeconds(value_0, start_0, end, cal){
  var a, i;
  i = end - start_0;
  if (i < 3) {
    while (i < 3) {
      value_0 *= 10;
      ++i;
    }
  }
   else {
    a = 1;
    while (i > 3) {
      a *= 10;
      --i;
    }
    value_0 = ~~((value_0 + (a >> 1)) / a);
  }
  cal.milliseconds = value_0;
  return true;
}

function $subParseMonth(text_0, pos, cal, value_0, start_0){
  if (value_0 < 0) {
    value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value_0 < 0 && (value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value_0 < 0) {
      return false;
    }
    cal.month = value_0;
    return true;
  }
   else if (value_0 > 0) {
    cal.month = value_0 - 1;
    return true;
  }
  return false;
}

function $subParseStandaloneDay(text_0, pos, start_0, cal){
  var value_0;
  value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']), pos);
  value_0 < 0 && (value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']), pos));
  if (value_0 < 0) {
    return false;
  }
  cal.dayOfWeek = value_0;
  return true;
}

function $subParseStandaloneMonth(text_0, pos, cal, value_0, start_0){
  if (value_0 < 0) {
    value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']), pos);
    value_0 < 0 && (value_0 = $matchString(text_0, start_0, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']), pos));
    if (value_0 < 0) {
      return false;
    }
    cal.month = value_0;
    return true;
  }
   else if (value_0 > 0) {
    cal.month = value_0 - 1;
    return true;
  }
  return false;
}

function $subParseTimeZoneInGMT(text_0, start_0, pos, cal){
  if (start_0 >= 0 && $equals_1(text_0.substr(start_0, 3), 'GMT')) {
    pos[0] = start_0 + 3;
    return $parseTimeZoneOffset(text_0, pos, cal);
  }
  if (start_0 >= 0 && $equals_1(text_0.substr(start_0, 3), 'UTC')) {
    pos[0] = start_0 + 3;
    return $parseTimeZoneOffset(text_0, pos, cal);
  }
  return $parseTimeZoneOffset(text_0, pos, cal);
}

function $subParseYear(text_0, pos, start_0, value_0, part, cal){
  var ambiguousTwoDigitYear, ch_0, date, defaultCenturyStartYear;
  ch_0 = 32;
  if (value_0 < 0) {
    if (pos[0] >= text_0.length) {
      return false;
    }
    ch_0 = text_0.charCodeAt(pos[0]);
    if (ch_0 != 43 && ch_0 != 45) {
      return false;
    }
    ++pos[0];
    value_0 = $parseInt(text_0, pos);
    if (value_0 < 0) {
      return false;
    }
    ch_0 == 45 && (value_0 = -value_0);
  }
  if (ch_0 == 32 && pos[0] - start_0 == 2 && part.count == 2) {
    date = new Date_0;
    defaultCenturyStartYear = date.getYear() + $intern_16 - 80;
    ambiguousTwoDigitYear = defaultCenturyStartYear % 100;
    cal.ambiguousYear = value_0 == ambiguousTwoDigitYear;
    value_0 += ~~(defaultCenturyStartYear / 100) * 100 + (value_0 < ambiguousTwoDigitYear?100:0);
  }
  cal.year = value_0;
  return true;
}

function $zeroPaddingNumber(buf, value_0, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; i++) {
    value_0 < b && (buf.string += '0' , buf);
    b *= 10;
  }
  buf.string += value_0;
}

defineClass(539, 1, {});
var Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat', 539);
function $clinit_DateTimeFormat_0(){
  $clinit_DateTimeFormat_0 = emptyMethod;
  $clinit_DateTimeFormat();
  cache = new HashMap;
}

function DateTimeFormat(pattern){
  $clinit_DateTimeFormat();
  this.patternParts = new ArrayList;
  this.pattern = pattern;
  $parsePattern(this, pattern);
}

function getFormat(predef){
  $clinit_DateTimeFormat_0();
  var dtfi, pattern, pattern0;
  if (usesFixedEnglishStrings(predef)) {
    switch (predef.ordinal) {
      case 1:
        pattern0 = 'EEE, d MMM yyyy HH:mm:ss Z';
        break;
      case 0:
        pattern0 = "yyyy-MM-dd'T'HH:mm:ss.SSSZZZ";
        break;
      default:throw new IllegalStateException_0('Unexpected predef type ' + predef);
    }
    return getFormat_0(pattern0, new DateTimeFormatInfoImpl_en);
  }
  dtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  switch (predef.ordinal) {
    case 2:
      pattern = dtfi.dateFormatFull();
      break;
    case 3:
      pattern = dtfi.dateFormatLong();
      break;
    case 4:
      pattern = dtfi.dateFormatMedium();
      break;
    case 5:
      pattern = dtfi.dateFormatShort();
      break;
    case 10:
      pattern = dtfi.dateTimeFull(dtfi.timeFormatFull(), dtfi.dateFormatFull());
      break;
    case 11:
      pattern = dtfi.dateTimeLong(dtfi.timeFormatLong(), dtfi.dateFormatLong());
      break;
    case 12:
      pattern = dtfi.dateTimeMedium(dtfi.timeFormatMedium(), dtfi.dateFormatMedium());
      break;
    case 13:
      pattern = dtfi.dateTimeShort(dtfi.timeFormatShort(), dtfi.dateFormatShort());
      break;
    case 14:
      pattern = 'd';
      break;
    case 17:
      pattern = 'HH:mm';
      break;
    case 18:
      pattern = 'HH:mm:ss';
      break;
    case 15:
      pattern = 'h:mm a';
      break;
    case 16:
      pattern = 'h:mm:ss a';
      break;
    case 19:
      pattern = 'mm:ss';
      break;
    case 20:
      pattern = 'LLLL';
      break;
    case 21:
      pattern = 'LLL';
      break;
    case 22:
      pattern = 'MMM d';
      break;
    case 23:
      pattern = 'MMMM d';
      break;
    case 24:
      pattern = dtfi.formatMonthNumDay();
      break;
    case 25:
      pattern = dtfi.formatMonthFullWeekdayDay();
      break;
    case 6:
      pattern = dtfi.timeFormatFull();
      break;
    case 7:
      pattern = dtfi.timeFormatLong();
      break;
    case 8:
      pattern = dtfi.timeFormatMedium();
      break;
    case 9:
      pattern = dtfi.timeFormatShort();
      break;
    case 26:
      pattern = 'y';
      break;
    case 27:
      pattern = dtfi.formatYearMonthFull();
      break;
    case 28:
      pattern = dtfi.formatYearMonthAbbrev();
      break;
    case 29:
      pattern = dtfi.formatYearMonthAbbrevDay();
      break;
    case 30:
      pattern = dtfi.formatYearMonthFullDay();
      break;
    case 31:
      pattern = dtfi.formatYearMonthNum();
      break;
    case 32:
      pattern = dtfi.formatYearMonthNumDay();
      break;
    case 33:
      pattern = dtfi.formatYearMonthWeekdayDay();
      break;
    case 34:
      pattern = dtfi.formatYearQuarterFull();
      break;
    case 35:
      pattern = dtfi.formatYearQuarterShort();
      break;
    default:throw new IllegalArgumentException_0('Unexpected predefined format ' + predef);
  }
  return getFormat_0(pattern, dtfi);
}

function getFormat_0(pattern, dtfi){
  $clinit_DateTimeFormat_0();
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  dtf = null;
  dtfi == defaultDtfi && (dtf = dynamicCast(cache.get_1(pattern), 176));
  if (!dtf) {
    dtf = new DateTimeFormat(pattern);
    dtfi == defaultDtfi && cache.put(pattern, dtf);
  }
  return dtf;
}

function usesFixedEnglishStrings(predef){
  switch (predef.ordinal) {
    case 0:
    case 1:
      return true;
    default:return false;
  }
}

defineClass(176, 539, {176:1}, DateTimeFormat);
var cache;
var Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'DateTimeFormat', 176);
function $clinit_DateTimeFormat$PredefinedFormat(){
  $clinit_DateTimeFormat$PredefinedFormat = emptyMethod;
  ISO_8601 = new DateTimeFormat$PredefinedFormat('ISO_8601', 0);
  RFC_2822 = new DateTimeFormat$PredefinedFormat('RFC_2822', 1);
  DATE_FULL = new DateTimeFormat$PredefinedFormat('DATE_FULL', 2);
  DATE_LONG = new DateTimeFormat$PredefinedFormat('DATE_LONG', 3);
  DATE_MEDIUM = new DateTimeFormat$PredefinedFormat('DATE_MEDIUM', 4);
  DATE_SHORT = new DateTimeFormat$PredefinedFormat('DATE_SHORT', 5);
  TIME_FULL = new DateTimeFormat$PredefinedFormat('TIME_FULL', 6);
  TIME_LONG = new DateTimeFormat$PredefinedFormat('TIME_LONG', 7);
  TIME_MEDIUM = new DateTimeFormat$PredefinedFormat('TIME_MEDIUM', 8);
  TIME_SHORT = new DateTimeFormat$PredefinedFormat('TIME_SHORT', 9);
  DATE_TIME_FULL = new DateTimeFormat$PredefinedFormat('DATE_TIME_FULL', 10);
  DATE_TIME_LONG = new DateTimeFormat$PredefinedFormat('DATE_TIME_LONG', 11);
  DATE_TIME_MEDIUM = new DateTimeFormat$PredefinedFormat('DATE_TIME_MEDIUM', 12);
  DATE_TIME_SHORT = new DateTimeFormat$PredefinedFormat('DATE_TIME_SHORT', 13);
  DAY = new DateTimeFormat$PredefinedFormat('DAY', 14);
  HOUR_MINUTE = new DateTimeFormat$PredefinedFormat('HOUR_MINUTE', 15);
  HOUR_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat('HOUR_MINUTE_SECOND', 16);
  HOUR24_MINUTE = new DateTimeFormat$PredefinedFormat('HOUR24_MINUTE', 17);
  HOUR24_MINUTE_SECOND = new DateTimeFormat$PredefinedFormat('HOUR24_MINUTE_SECOND', 18);
  MINUTE_SECOND = new DateTimeFormat$PredefinedFormat('MINUTE_SECOND', 19);
  MONTH = new DateTimeFormat$PredefinedFormat('MONTH', 20);
  MONTH_ABBR = new DateTimeFormat$PredefinedFormat('MONTH_ABBR', 21);
  MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat('MONTH_ABBR_DAY', 22);
  MONTH_DAY = new DateTimeFormat$PredefinedFormat('MONTH_DAY', 23);
  MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat('MONTH_NUM_DAY', 24);
  MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat('MONTH_WEEKDAY_DAY', 25);
  YEAR = new DateTimeFormat$PredefinedFormat('YEAR', 26);
  YEAR_MONTH = new DateTimeFormat$PredefinedFormat('YEAR_MONTH', 27);
  YEAR_MONTH_ABBR = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_ABBR', 28);
  YEAR_MONTH_ABBR_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_ABBR_DAY', 29);
  YEAR_MONTH_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_DAY', 30);
  YEAR_MONTH_NUM = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_NUM', 31);
  YEAR_MONTH_NUM_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_NUM_DAY', 32);
  YEAR_MONTH_WEEKDAY_DAY = new DateTimeFormat$PredefinedFormat('YEAR_MONTH_WEEKDAY_DAY', 33);
  YEAR_QUARTER = new DateTimeFormat$PredefinedFormat('YEAR_QUARTER', 34);
  YEAR_QUARTER_ABBR = new DateTimeFormat$PredefinedFormat('YEAR_QUARTER_ABBR', 35);
}

function DateTimeFormat$PredefinedFormat(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_DateTimeFormat$PredefinedFormat();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit, 1), $intern_2, 24, 0, [ISO_8601, RFC_2822, DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR_MINUTE, HOUR_MINUTE_SECOND, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR]);
}

defineClass(24, 7, {24:1, 3:1, 8:1, 7:1}, DateTimeFormat$PredefinedFormat);
var DATE_FULL, DATE_LONG, DATE_MEDIUM, DATE_SHORT, DATE_TIME_FULL, DATE_TIME_LONG, DATE_TIME_MEDIUM, DATE_TIME_SHORT, DAY, HOUR24_MINUTE, HOUR24_MINUTE_SECOND, HOUR_MINUTE, HOUR_MINUTE_SECOND, ISO_8601, MINUTE_SECOND, MONTH, MONTH_ABBR, MONTH_ABBR_DAY, MONTH_DAY, MONTH_NUM_DAY, MONTH_WEEKDAY_DAY, RFC_2822, TIME_FULL, TIME_LONG, TIME_MEDIUM, TIME_SHORT, YEAR, YEAR_MONTH, YEAR_MONTH_ABBR, YEAR_MONTH_ABBR_DAY, YEAR_MONTH_DAY, YEAR_MONTH_NUM, YEAR_MONTH_NUM_DAY, YEAR_MONTH_WEEKDAY_DAY, YEAR_QUARTER, YEAR_QUARTER_ABBR;
var Lcom_google_gwt_i18n_client_DateTimeFormat$PredefinedFormat_2_classLit = createForEnum('com.google.gwt.i18n.client', 'DateTimeFormat/PredefinedFormat', 24, Ljava_lang_Enum_2_classLit, values_8);
defineClass(734, 1, {});
_.dateFormatFull = function dateFormatFull(){
  return 'y MMMM d, EEEE';
}
;
_.dateFormatLong = function dateFormatLong(){
  return 'y MMMM d';
}
;
_.dateFormatMedium = function dateFormatMedium(){
  return 'y MMM d';
}
;
_.dateFormatShort = function dateFormatShort(){
  return 'y-MM-dd';
}
;
_.dateTimeFull = function dateTimeFull(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}
;
_.dateTimeLong = function dateTimeLong(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}
;
_.dateTimeMedium = function dateTimeMedium(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}
;
_.dateTimeShort = function dateTimeShort(timePattern, datePattern){
  return datePattern + ' ' + timePattern;
}
;
_.firstDayOfTheWeek = function firstDayOfTheWeek(){
  return 1;
}
;
_.formatMonthFullWeekdayDay = function formatMonthFullWeekdayDay(){
  return 'MMMM d, EEEE';
}
;
_.formatMonthNumDay = function formatMonthNumDay(){
  return 'MM-dd';
}
;
_.formatYearMonthAbbrev = function formatYearMonthAbbrev(){
  return 'y MMM';
}
;
_.formatYearMonthAbbrevDay = function formatYearMonthAbbrevDay(){
  return 'y MMM d';
}
;
_.formatYearMonthFull = function formatYearMonthFull(){
  return 'y MMMM';
}
;
_.formatYearMonthFullDay = function formatYearMonthFullDay(){
  return 'y MMMM d';
}
;
_.formatYearMonthNum = function formatYearMonthNum(){
  return 'y-MM';
}
;
_.formatYearMonthNumDay = function formatYearMonthNumDay(){
  return 'y-MM-dd';
}
;
_.formatYearMonthWeekdayDay = function formatYearMonthWeekdayDay(){
  return 'y MMM d, EEE';
}
;
_.formatYearQuarterFull = function formatYearQuarterFull(){
  return 'y QQQQ';
}
;
_.formatYearQuarterShort = function formatYearQuarterShort(){
  return 'y Q';
}
;
_.timeFormatFull = function timeFormatFull(){
  return 'HH:mm:ss zzzz';
}
;
_.timeFormatLong = function timeFormatLong(){
  return 'HH:mm:ss z';
}
;
_.timeFormatMedium = function timeFormatMedium(){
  return 'HH:mm:ss';
}
;
_.timeFormatShort = function timeFormatShort(){
  return 'HH:mm';
}
;
var Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DefaultDateTimeFormatInfo', 734);
defineClass(735, 734, {});
var Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'DefaultDateTimeFormatInfo', 735);
function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_2, 134, 0, [RTL, LTR, DEFAULT]);
}

defineClass(134, 7, {134:1, 3:1, 8:1, 7:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 134, Ljava_lang_Enum_2_classLit, values_9);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance_1 = new LocaleInfo;
}

function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl);
  return this$static.dateTimeFormatInfo;
}

function $getNumberConstants(this$static){
  !this$static.numberConstants && (this$static.numberConstants = new NumberConstantsImpl_);
  return this$static.numberConstants;
}

function LocaleInfo(){
}

defineClass(395, 1, {}, LocaleInfo);
var instance_1;
var Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'LocaleInfo', 395);
function $clinit_NumberFormat(){
  $clinit_NumberFormat = emptyMethod;
  $getNumberConstants(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
}

function $addExponent(this$static, digits){
  var exponentDigits, i;
  digits.string += 'E';
  if (this$static.exponent < 0) {
    this$static.exponent = -this$static.exponent;
    digits.string += '-';
  }
  exponentDigits = '' + this$static.exponent;
  for (i = exponentDigits.length; i < this$static.minExponentDigits; ++i) {
    digits.string += '0';
  }
  digits.string += exponentDigits;
}

function $addZeroAndDecimal(this$static, digits, decimalSeparator){
  if (this$static.digitsLength == 0) {
    digits.string = $substring_0(digits.string, 0, 0) + '0' + $substring(digits.string, 0);
    ++this$static.decimalPosition;
    ++this$static.digitsLength;
  }
  if (this$static.decimalPosition < this$static.digitsLength || this$static.decimalSeparatorAlwaysShown) {
    $insert_4(digits, this$static.decimalPosition, valueOf_4(decimalSeparator));
    ++this$static.digitsLength;
  }
}

function $adjustFractionDigits(this$static, digits){
  var requiredDigits, toRemove;
  requiredDigits = this$static.decimalPosition + this$static.minimumFractionDigits;
  if (this$static.digitsLength < requiredDigits) {
    while (this$static.digitsLength < requiredDigits) {
      digits.string += '0';
      ++this$static.digitsLength;
    }
  }
   else {
    toRemove = this$static.decimalPosition + this$static.maximumFractionDigits;
    toRemove > this$static.digitsLength && (toRemove = this$static.digitsLength);
    while (toRemove > requiredDigits && $charAt_0(digits.string, toRemove - 1) == 48) {
      --toRemove;
    }
    if (toRemove < this$static.digitsLength) {
      $delete(digits, toRemove, this$static.digitsLength);
      this$static.digitsLength = toRemove;
    }
  }
}

function $computeExponent(this$static, digits){
  var remainder, strip;
  strip = 0;
  while (strip < this$static.digitsLength - 1 && $charAt_0(digits.string, strip) == 48) {
    ++strip;
  }
  if (strip > 0) {
    digits.string = $substring_0(digits.string, 0, 0) + '' + $substring(digits.string, strip);
    this$static.digitsLength -= strip;
    this$static.exponent -= strip;
  }
  if (this$static.maximumIntegerDigits > this$static.minimumIntegerDigits && this$static.maximumIntegerDigits > 0) {
    this$static.exponent += this$static.decimalPosition - 1;
    remainder = this$static.exponent % this$static.maximumIntegerDigits;
    remainder < 0 && (remainder += this$static.maximumIntegerDigits);
    this$static.decimalPosition = remainder + 1;
    this$static.exponent -= remainder;
  }
   else {
    this$static.exponent += this$static.decimalPosition - this$static.minimumIntegerDigits;
    this$static.decimalPosition = this$static.minimumIntegerDigits;
  }
  if (this$static.digitsLength == 1 && digits.string.charCodeAt(0) == 48) {
    this$static.exponent = 0;
    this$static.decimalPosition = this$static.minimumIntegerDigits;
  }
}

function $format_0(this$static, number){
  var buf, isNegative, preRound, scale, useExponent, currentGroupingSize;
  if (isNaN_0(number)) {
    return 'NaN';
  }
  isNegative = number < 0 || number == 0 && 1 / number < 0;
  isNegative && (number = -number);
  buf = new StringBuilder;
  if (isInfinite(number)) {
    $append_3(buf, isNegative?this$static.negativePrefix:this$static.positivePrefix);
    buf.string += '\u221E';
    $append_3(buf, isNegative?this$static.negativeSuffix:this$static.positiveSuffix);
    return buf.string;
  }
  number *= this$static.multiplier;
  scale = toScaledString(buf, number);
  preRound = buf.string.length + scale + this$static.maximumFractionDigits + 3;
  if (preRound > 0 && preRound < buf.string.length && $charAt_0(buf.string, preRound) == 57) {
    $propagateCarry(this$static, buf, preRound - 1);
    scale += buf.string.length - preRound;
    $delete(buf, preRound, buf.string.length);
  }
  this$static.exponent = 0;
  this$static.digitsLength = buf.string.length;
  this$static.decimalPosition = this$static.digitsLength + scale;
  useExponent = this$static.useExponentialNotation;
  currentGroupingSize = this$static.groupingSize;
  this$static.decimalPosition > 1024 && (useExponent = true);
  useExponent && $computeExponent(this$static, buf);
  $processLeadingZeros(this$static, buf);
  $roundValue(this$static, buf);
  $insertGroupingSeparators(this$static, buf, 44, currentGroupingSize);
  $adjustFractionDigits(this$static, buf);
  $addZeroAndDecimal(this$static, buf, 46);
  useExponent && $addExponent(this$static, buf);
  $insert_4(buf, 0, isNegative?this$static.negativePrefix:this$static.positivePrefix);
  $append_3(buf, isNegative?this$static.negativeSuffix:this$static.positiveSuffix);
  return buf.string;
}

function $insertGroupingSeparators(this$static, digits, groupingSeparator, g){
  var i;
  if (g > 0) {
    for (i = g; i < this$static.decimalPosition; i += g + 1) {
      $insert_4(digits, this$static.decimalPosition - i, valueOf_4(groupingSeparator));
      ++this$static.decimalPosition;
      ++this$static.digitsLength;
    }
  }
}

function $parseAffix(this$static, pattern, start_0, affix, inNegativePattern){
  var ch_0, inQuote, len, pos;
  $delete(affix, 0, affix.string.length);
  inQuote = false;
  len = pattern.length;
  for (pos = start_0; pos < len; ++pos) {
    ch_0 = pattern.charCodeAt(pos);
    if (ch_0 == 39) {
      if (pos + 1 < len && pattern.charCodeAt(pos + 1) == 39) {
        ++pos;
        affix.string += "'";
      }
       else {
        inQuote = !inQuote;
      }
      continue;
    }
    if (inQuote) {
      affix.string += charToString(ch_0);
    }
     else {
      switch (ch_0) {
        case 35:
        case 48:
        case 44:
        case 46:
        case 59:
          return pos - start_0;
        case 164:
          this$static.isCurrencyFormat = true;
          if (pos + 1 < len && pattern.charCodeAt(pos + 1) == 164) {
            ++pos;
            if (pos < len - 2 && pattern.charCodeAt(pos + 1) == 164 && pattern.charCodeAt(pos + 2) == 164) {
              pos += 2;
              $append_3(affix, $getSimpleCurrencySymbol(this$static.currencyData));
            }
             else {
              $append_3(affix, this$static.currencyData[0]);
            }
          }
           else {
            $append_3(affix, this$static.currencyData[1]);
          }

          break;
        case 37:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw new IllegalArgumentException_0('Too many percent/per mille characters in pattern "' + pattern + '"');
            }
            this$static.multiplier = 100;
          }

          affix.string += '%';
          break;
        case 8240:
          if (!inNegativePattern) {
            if (this$static.multiplier != 1) {
              throw new IllegalArgumentException_0('Too many percent/per mille characters in pattern "' + pattern + '"');
            }
            this$static.multiplier = 1000;
          }

          affix.string += '\u2030';
          break;
        case 45:
          affix.string += '-';
          break;
        default:affix.string += charToString(ch_0);
      }
    }
  }
  return len - start_0;
}

function $parsePattern_0(this$static, pattern){
  var affix, pos;
  pos = 0;
  affix = new StringBuilder;
  pos += $parseAffix(this$static, pattern, 0, affix, false);
  this$static.positivePrefix = affix.string;
  pos += $parseTrunk(this$static, pattern, pos, false);
  pos += $parseAffix(this$static, pattern, pos, affix, false);
  this$static.positiveSuffix = affix.string;
  if (pos < pattern.length && pattern.charCodeAt(pos) == 59) {
    ++pos;
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativePrefix = affix.string;
    pos += $parseTrunk(this$static, pattern, pos, true);
    pos += $parseAffix(this$static, pattern, pos, affix, true);
    this$static.negativeSuffix = affix.string;
  }
   else {
    this$static.negativePrefix = '-' + this$static.positivePrefix;
    this$static.negativeSuffix = this$static.positiveSuffix;
  }
}

function $parseTrunk(this$static, pattern, start_0, ignorePattern){
  var ch_0, decimalPos, digitLeftCount, digitRightCount, effectiveDecimalPos, groupingCount, len, loop, n, pos, totalDigits, zeroDigitCount;
  decimalPos = -1;
  digitLeftCount = 0;
  zeroDigitCount = 0;
  digitRightCount = 0;
  groupingCount = -1;
  len = pattern.length;
  pos = start_0;
  loop = true;
  for (; pos < len && loop; ++pos) {
    ch_0 = pattern.charCodeAt(pos);
    switch (ch_0) {
      case 35:
        zeroDigitCount > 0?++digitRightCount:++digitLeftCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 48:
        if (digitRightCount > 0) {
          throw new IllegalArgumentException_0("Unexpected '0' in pattern \"" + pattern + '"');
        }

        ++zeroDigitCount;
        groupingCount >= 0 && decimalPos < 0 && ++groupingCount;
        break;
      case 44:
        groupingCount = 0;
        break;
      case 46:
        if (decimalPos >= 0) {
          throw new IllegalArgumentException_0('Multiple decimal separators in pattern "' + pattern + '"');
        }

        decimalPos = digitLeftCount + zeroDigitCount + digitRightCount;
        break;
      case 69:
        if (!ignorePattern) {
          if (this$static.useExponentialNotation) {
            throw new IllegalArgumentException_0('Multiple exponential symbols in pattern "' + pattern + '"');
          }
          this$static.useExponentialNotation = true;
          this$static.minExponentDigits = 0;
        }

        while (pos + 1 < len && pattern.charCodeAt(pos + 1) == 48) {
          ++pos;
          ignorePattern || ++this$static.minExponentDigits;
        }

        if (!ignorePattern && digitLeftCount + zeroDigitCount < 1 || this$static.minExponentDigits < 1) {
          throw new IllegalArgumentException_0('Malformed exponential pattern "' + pattern + '"');
        }

        loop = false;
        break;
      default:--pos;
        loop = false;
    }
  }
  if (zeroDigitCount == 0 && digitLeftCount > 0 && decimalPos >= 0) {
    n = decimalPos;
    decimalPos == 0 && ++n;
    digitRightCount = digitLeftCount - n;
    digitLeftCount = n - 1;
    zeroDigitCount = 1;
  }
  if (decimalPos < 0 && digitRightCount > 0 || decimalPos >= 0 && (decimalPos < digitLeftCount || decimalPos > digitLeftCount + zeroDigitCount) || groupingCount == 0) {
    throw new IllegalArgumentException_0('Malformed pattern "' + pattern + '"');
  }
  if (ignorePattern) {
    return pos - start_0;
  }
  totalDigits = digitLeftCount + zeroDigitCount + digitRightCount;
  this$static.maximumFractionDigits = decimalPos >= 0?totalDigits - decimalPos:0;
  if (decimalPos >= 0) {
    this$static.minimumFractionDigits = digitLeftCount + zeroDigitCount - decimalPos;
    this$static.minimumFractionDigits < 0 && (this$static.minimumFractionDigits = 0);
  }
  effectiveDecimalPos = decimalPos >= 0?decimalPos:totalDigits;
  this$static.minimumIntegerDigits = effectiveDecimalPos - digitLeftCount;
  if (this$static.useExponentialNotation) {
    this$static.maximumIntegerDigits = digitLeftCount + this$static.minimumIntegerDigits;
    this$static.maximumFractionDigits == 0 && this$static.minimumIntegerDigits == 0 && (this$static.minimumIntegerDigits = 1);
  }
  this$static.groupingSize = groupingCount > 0?groupingCount:0;
  this$static.decimalSeparatorAlwaysShown = decimalPos == 0 || decimalPos == totalDigits;
  return pos - start_0;
}

function $processLeadingZeros(this$static, digits){
  var i, prefix, strip;
  if (this$static.decimalPosition > this$static.digitsLength) {
    while (this$static.digitsLength < this$static.decimalPosition) {
      digits.string += '0';
      ++this$static.digitsLength;
    }
  }
  if (!this$static.useExponentialNotation) {
    if (this$static.decimalPosition < this$static.minimumIntegerDigits) {
      prefix = new StringBuilder;
      while (this$static.decimalPosition < this$static.minimumIntegerDigits) {
        prefix.string += '0';
        ++this$static.decimalPosition;
        ++this$static.digitsLength;
      }
      $insert_4(digits, 0, prefix.toString$());
    }
     else if (this$static.decimalPosition > this$static.minimumIntegerDigits) {
      strip = this$static.decimalPosition - this$static.minimumIntegerDigits;
      for (i = 0; i < strip; ++i) {
        if ($charAt_0(digits.string, i) != 48) {
          strip = i;
          break;
        }
      }
      if (strip > 0) {
        digits.string = $substring_0(digits.string, 0, 0) + '' + $substring(digits.string, strip);
        this$static.digitsLength -= strip;
        this$static.decimalPosition -= strip;
      }
    }
  }
}

function $propagateCarry(this$static, digits, i){
  var carry, digit;
  carry = true;
  while (carry && i >= 0) {
    digit = $charAt_0(digits.string, i);
    if (digit == 57) {
      $setCharAt(digits, i--, 48);
    }
     else {
      $setCharAt(digits, i, digit + 1 & $intern_12);
      carry = false;
    }
  }
  if (carry) {
    digits.string = $substring_0(digits.string, 0, 0) + '1' + $substring(digits.string, 0);
    ++this$static.decimalPosition;
    ++this$static.digitsLength;
  }
}

function $roundValue(this$static, digits){
  var i;
  if (this$static.digitsLength > this$static.decimalPosition + this$static.maximumFractionDigits && $charAt(digits, this$static.decimalPosition + this$static.maximumFractionDigits) >= 53) {
    i = this$static.decimalPosition + this$static.maximumFractionDigits - 1;
    $propagateCarry(this$static, digits, i);
  }
}

function NumberFormat(cdata, userSuppliedPattern){
  if (!cdata) {
    throw new IllegalArgumentException_0('Unknown currency code');
  }
  this.pattern = '######0.00';
  this.currencyData = cdata;
  $parsePattern_0(this, this.pattern);
  if (!userSuppliedPattern && this.isCurrencyFormat) {
    this.minimumFractionDigits = this.currencyData[2] & 7;
    this.maximumFractionDigits = this.minimumFractionDigits;
  }
}

function NumberFormat_0(cdata){
  $clinit_NumberFormat();
  NumberFormat.call(this, cdata, true);
}

function toScaledString(buf, val){
  var dot, expDigits, expIdx, scale, startLen;
  startLen = buf.string.length;
  $append_3(buf, val.toPrecision(20));
  scale = 0;
  expIdx = $indexOf_3(buf.string, 'e', startLen);
  expIdx < 0 && (expIdx = $indexOf_3(buf.string, 'E', startLen));
  if (expIdx >= 0) {
    expDigits = expIdx + 1;
    expDigits < buf.string.length && $charAt_0(buf.string, expDigits) == 43 && ++expDigits;
    expDigits < buf.string.length && (scale = __parseAndValidateInt($substring(buf.string, expDigits)));
    $delete(buf, expIdx, buf.string.length);
  }
  dot = $indexOf_3(buf.string, '.', startLen);
  if (dot >= 0) {
    buf.string = $substring_0(buf.string, 0, dot) + '' + $substring(buf.string, dot + 1);
    scale -= buf.string.length - dot;
  }
  return scale;
}

defineClass(221, 1, {}, NumberFormat_0);
_.decimalPosition = 0;
_.decimalSeparatorAlwaysShown = false;
_.digitsLength = 0;
_.exponent = 0;
_.groupingSize = 3;
_.isCurrencyFormat = false;
_.maximumFractionDigits = 3;
_.maximumIntegerDigits = 40;
_.minExponentDigits = 0;
_.minimumFractionDigits = 0;
_.minimumIntegerDigits = 1;
_.multiplier = 1;
_.negativePrefix = '-';
_.negativeSuffix = '';
_.positivePrefix = '';
_.positiveSuffix = '';
_.useExponentialNotation = false;
var Lcom_google_gwt_i18n_client_NumberFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'NumberFormat', 221);
function $getISOTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = initValues(getClassLiteralForArray(C_classLit, 1), $intern_15, 0, 7, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ~~(~~(offset / 60) / 10) & $intern_12;
  data_0[2] = data_0[2] + ~~(offset / 60) % 10 & $intern_12;
  data_0[4] = data_0[4] + ~~(offset % 60 / 10) & $intern_12;
  data_0[5] = data_0[5] + offset % 10 & $intern_12;
  return __valueOf(data_0, 0, data_0.length);
}

function $getRFCTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = initValues(getClassLiteralForArray(C_classLit, 1), $intern_15, 0, 7, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ~~(~~(offset / 60) / 10) & $intern_12;
  data_0[2] = data_0[2] + ~~(offset / 60) % 10 & $intern_12;
  data_0[3] = data_0[3] + ~~(offset % 60 / 10) & $intern_12;
  data_0[4] = data_0[4] + offset % 10 & $intern_12;
  return __valueOf(data_0, 0, data_0.length);
}

function TimeZone(){
}

function composeGMTString(offset){
  var data_0;
  data_0 = initValues(getClassLiteralForArray(C_classLit, 1), $intern_15, 0, 7, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data_0[3] = 43;
    offset = -offset;
  }
  data_0[4] = data_0[4] + ~~(~~(offset / 60) / 10) & $intern_12;
  data_0[5] = data_0[5] + ~~(offset / 60) % 10 & $intern_12;
  data_0[7] = data_0[7] + ~~(offset % 60 / 10) & $intern_12;
  data_0[8] = data_0[8] + offset % 10 & $intern_12;
  return __valueOf(data_0, 0, data_0.length);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initDim(Ljava_lang_String_2_classLit, $intern_2, 2, 2, 4, 1);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = ~~(offset / 60);
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + ('' + mins);
}

defineClass(540, 1, {}, TimeZone);
_.standardOffset = 0;
var Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client', 'TimeZone', 540);
function NumberConstantsImpl_(){
}

defineClass(638, 1, {}, NumberConstantsImpl_);
var Lcom_google_gwt_i18n_client_constants_NumberConstantsImpl_1_2_classLit = createForClass('com.google.gwt.i18n.client.constants', 'NumberConstantsImpl_', 638);
function $getSimpleCurrencySymbol(this$static){
  return this$static[4] || this$static[1];
}

function DateTimeFormatInfoImpl(){
}

defineClass(634, 735, {}, DateTimeFormatInfoImpl);
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl', 634);
function DateTimeFormatInfoImpl_en(){
}

defineClass(678, 634, {}, DateTimeFormatInfoImpl_en);
_.dateFormatFull = function dateFormatFull_0(){
  return 'EEEE, MMMM d, y';
}
;
_.dateFormatLong = function dateFormatLong_0(){
  return 'MMMM d, y';
}
;
_.dateFormatMedium = function dateFormatMedium_0(){
  return 'MMM d, y';
}
;
_.dateFormatShort = function dateFormatShort_0(){
  return 'M/d/yy';
}
;
_.dateTimeFull = function dateTimeFull_0(timePattern, datePattern){
  return datePattern + " 'at' " + timePattern;
}
;
_.dateTimeLong = function dateTimeLong_0(timePattern, datePattern){
  return datePattern + " 'at' " + timePattern;
}
;
_.dateTimeMedium = function dateTimeMedium_0(timePattern, datePattern){
  return datePattern + ', ' + timePattern;
}
;
_.dateTimeShort = function dateTimeShort_0(timePattern, datePattern){
  return datePattern + ', ' + timePattern;
}
;
_.firstDayOfTheWeek = function firstDayOfTheWeek_0(){
  return 0;
}
;
_.formatMonthFullWeekdayDay = function formatMonthFullWeekdayDay_0(){
  return 'EEEE, MMMM d';
}
;
_.formatMonthNumDay = function formatMonthNumDay_0(){
  return 'M/d';
}
;
_.formatYearMonthAbbrev = function formatYearMonthAbbrev_0(){
  return 'MMM y';
}
;
_.formatYearMonthAbbrevDay = function formatYearMonthAbbrevDay_0(){
  return 'MMM d, y';
}
;
_.formatYearMonthFull = function formatYearMonthFull_0(){
  return 'MMMM y';
}
;
_.formatYearMonthFullDay = function formatYearMonthFullDay_0(){
  return 'MMMM d, y';
}
;
_.formatYearMonthNum = function formatYearMonthNum_0(){
  return 'M/y';
}
;
_.formatYearMonthNumDay = function formatYearMonthNumDay_0(){
  return 'M/d/y';
}
;
_.formatYearMonthWeekdayDay = function formatYearMonthWeekdayDay_0(){
  return 'EEE, MMM d, y';
}
;
_.formatYearQuarterFull = function formatYearQuarterFull_0(){
  return 'QQQQ y';
}
;
_.formatYearQuarterShort = function formatYearQuarterShort_0(){
  return 'Q y';
}
;
_.timeFormatFull = function timeFormatFull_0(){
  return 'h:mm:ss a zzzz';
}
;
_.timeFormatLong = function timeFormatLong_0(){
  return 'h:mm:ss a z';
}
;
_.timeFormatMedium = function timeFormatMedium_0(){
  return 'h:mm:ss a';
}
;
_.timeFormatShort = function timeFormatShort_0(){
  return 'h:mm a';
}
;
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_1en_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl_en', 678);
function DateTimeFormat$PatternPart(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineClass(127, 1, {127:1}, DateTimeFormat$PatternPart);
_.abutStart = false;
_.count = 0;
var Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat/PatternPart', 127);
function $after(this$static, when){
  return gt(this$static.getTime_0(), when.getTime_0());
}

function $fixDaylightSavings(this$static, requestedHours){
  var badHours, copy, day, hours, newTime, originalTimeInMillis, timeDiff, timeDiffHours, timeDiffMinutes;
  hours = this$static.jsdate.getHours();
  if (hours % 24 != requestedHours % 24) {
    copy = create(this$static.jsdate.getTime());
    $setDate(copy, copy.getDate() + 1);
    timeDiff = this$static.jsdate.getTimezoneOffset() - copy.getTimezoneOffset();
    if (timeDiff > 0) {
      timeDiffHours = ~~(timeDiff / 60);
      timeDiffMinutes = timeDiff % 60;
      day = this$static.jsdate.getDate();
      badHours = this$static.jsdate.getHours();
      badHours + timeDiffHours >= 24 && ++day;
      newTime = create_0(this$static.jsdate.getFullYear(), this$static.jsdate.getMonth(), day, requestedHours + timeDiffHours, this$static.jsdate.getMinutes() + timeDiffMinutes, this$static.jsdate.getSeconds(), this$static.jsdate.getMilliseconds());
      $setTime(this$static.jsdate, newTime.getTime());
    }
    return;
  }
  originalTimeInMillis = this$static.jsdate.getTime();
  $setTime(this$static.jsdate, originalTimeInMillis + 3600000);
  hours != this$static.jsdate.getHours() && $setTime(this$static.jsdate, originalTimeInMillis);
}

function $hashCode(this$static){
  var time;
  time = this$static.getTime_0();
  return toInt(xor(time, shru(time, 32)));
}

function $setTime_0(this$static, time){
  $setTime(this$static.jsdate, toDouble(time));
}

function Date_0(){
  this.jsdate = new Date;
}

function Date_1(year, month, date){
  this.jsdate = new Date;
  $setFullYear_0(this.jsdate, year + $intern_16, month, date);
  $setHours_0(this.jsdate, 0, 0, 0, 0);
  $fixDaylightSavings(this, 0);
}

function Date_2(date){
  this.jsdate = create(toDouble(date));
}

function Date_3(date){
  Date_2.call(this, parse_0(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

function parse_0(s){
  var parsed;
  parsed = Date.parse(s);
  if (isNaN_0(parsed)) {
    throw new IllegalArgumentException;
  }
  return fromDouble(parsed);
}

defineClass(18, 1, $intern_18, Date_0, Date_1, Date_2, Date_3);
_.compareTo = function compareTo_0(other){
  return this.compareTo_0(dynamicCast(other, 18));
}
;
_.compareTo_0 = function compareTo_1(other){
  return compare_8(this.getTime_0(), other.getTime_0());
}
;
_.equals$ = function equals_1(obj){
  return instanceOf(obj, 18) && eq(this.getTime_0(), dynamicCast(obj, 18).getTime_0());
}
;
_.getDate_0 = function getDate(){
  return this.jsdate.getDate();
}
;
_.getDay_0 = function getDay(){
  return this.jsdate.getDay();
}
;
_.getHours_0 = function getHours(){
  return this.jsdate.getHours();
}
;
_.getMinutes_0 = function getMinutes(){
  return this.jsdate.getMinutes();
}
;
_.getMonth_0 = function getMonth(){
  return this.jsdate.getMonth();
}
;
_.getSeconds_0 = function getSeconds(){
  return this.jsdate.getSeconds();
}
;
_.getTime_0 = function getTime(){
  return fromDouble(this.jsdate.getTime());
}
;
_.getYear = function getYear(){
  return this.jsdate.getFullYear() - $intern_16;
}
;
_.hashCode$ = function hashCode_3(){
  return $hashCode(this);
}
;
_.setDate_0 = function setDate(date){
  var hours;
  hours = this.jsdate.getHours();
  $setDate(this.jsdate, date);
  $fixDaylightSavings(this, hours);
}
;
_.setHours_0 = function setHours(hours){
  $setHours(this.jsdate, hours);
  $fixDaylightSavings(this, hours);
}
;
_.setMinutes_0 = function setMinutes(minutes){
  var hours;
  hours = this.getHours_0() + ~~(minutes / 60);
  $setMinutes(this.jsdate, minutes);
  $fixDaylightSavings(this, hours);
}
;
_.setMonth_0 = function setMonth(month){
  var hours;
  hours = this.jsdate.getHours();
  $setMonth(this.jsdate, month);
  $fixDaylightSavings(this, hours);
}
;
_.setSeconds_0 = function setSeconds(seconds){
  var hours;
  hours = this.getHours_0() + ~~(seconds / 3600);
  $setSeconds(this.jsdate, seconds);
  $fixDaylightSavings(this, hours);
}
;
_.setTime_0 = function setTime(time){
  $setTime_0(this, time);
}
;
_.setYear = function setYear(year){
  var hours;
  hours = this.jsdate.getHours();
  $setFullYear(this.jsdate, year + $intern_16);
  $fixDaylightSavings(this, hours);
}
;
_.toString$ = function toString_6(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 18);
function $calcDate(this$static, date){
  var adjustment, daysInCurrentMonth, defaultCenturyStart, offset, orgDayOfMonth, orgMonth, tmp;
  this$static.era == 0 && this$static.year > 0 && (this$static.year = -(this$static.year - 1));
  this$static.year > $intern_19 && date.setYear(this$static.year - $intern_16);
  orgDayOfMonth = date.getDate_0();
  date.setDate_0(1);
  this$static.month >= 0 && date.setMonth_0(this$static.month);
  if (this$static.dayOfMonth >= 0) {
    date.setDate_0(this$static.dayOfMonth);
  }
   else if (this$static.month >= 0) {
    tmp = new Date_1(date.getYear(), date.getMonth_0(), 35);
    daysInCurrentMonth = 35 - tmp.getDate_0();
    date.setDate_0(daysInCurrentMonth < orgDayOfMonth?daysInCurrentMonth:orgDayOfMonth);
  }
   else {
    date.setDate_0(orgDayOfMonth);
  }
  this$static.hours < 0 && (this$static.hours = date.getHours_0());
  this$static.ampm > 0 && this$static.hours < 12 && (this$static.hours += 12);
  date.setHours_0(this$static.hours == 24 && this$static.midnightIs24?0:this$static.hours);
  this$static.minutes >= 0 && date.setMinutes_0(this$static.minutes);
  this$static.seconds >= 0 && date.setSeconds_0(this$static.seconds);
  this$static.milliseconds >= 0 && date.setTime_0(add_1(mul(div_0(date.getTime_0(), {l:1000, m:0, h:0}), {l:1000, m:0, h:0}), fromInt(this$static.milliseconds)));
  if (this$static.ambiguousYear) {
    defaultCenturyStart = new Date_0;
    defaultCenturyStart.setYear(defaultCenturyStart.getYear() - 80);
    lt(date.getTime_0(), defaultCenturyStart.getTime_0()) && date.setYear(defaultCenturyStart.getYear() + 100);
  }
  if (this$static.dayOfWeek >= 0) {
    if (this$static.dayOfMonth == -1) {
      adjustment = (7 + this$static.dayOfWeek - date.getDay_0()) % 7;
      adjustment > 3 && (adjustment -= 7);
      orgMonth = date.getMonth_0();
      date.setDate_0(date.getDate_0() + adjustment);
      date.getMonth_0() != orgMonth && date.setDate_0(date.getDate_0() + (adjustment > 0?-7:7));
    }
     else {
      if (date.getDay_0() != this$static.dayOfWeek) {
        return false;
      }
    }
  }
  if (this$static.tzOffset > $intern_19) {
    offset = date.jsdate.getTimezoneOffset();
    date.setTime_0(add_1(date.getTime_0(), fromInt((this$static.tzOffset - offset) * 60 * 1000)));
  }
  return true;
}

function DateRecord(){
  Date_0.call(this);
  this.era = -1;
  this.ambiguousYear = false;
  this.year = $intern_19;
  this.month = -1;
  this.dayOfMonth = -1;
  this.ampm = -1;
  this.midnightIs24 = false;
  this.hours = -1;
  this.minutes = -1;
  this.seconds = -1;
  this.milliseconds = -1;
  this.dayOfWeek = -1;
  this.tzOffset = $intern_19;
}

defineClass(202, 18, $intern_18, DateRecord);
_.setHours_0 = function setHours_0(hours){
  this.hours = hours;
}
;
_.setMinutes_0 = function setMinutes_0(minutes){
  this.minutes = minutes;
}
;
_.setMonth_0 = function setMonth_0(month){
  this.month = month;
}
;
_.setSeconds_0 = function setSeconds_0(seconds){
  this.seconds = seconds;
}
;
_.setYear = function setYear_0(value_0){
  this.year = value_0;
}
;
_.ambiguousYear = false;
_.ampm = 0;
_.dayOfMonth = 0;
_.dayOfWeek = 0;
_.era = 0;
_.hours = 0;
_.midnightIs24 = false;
_.milliseconds = 0;
_.minutes = 0;
_.month = 0;
_.seconds = 0;
_.tzOffset = 0;
_.year = 0;
var Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit = createForClass('com.google.gwt.i18n.shared.impl', 'DateRecord', 202);
function deserialize(streamReader, instance){
  setAmbiguousYear(instance, $readBoolean(streamReader));
  setAmpm(instance, $readInt(streamReader));
  setDayOfMonth(instance, $readInt(streamReader));
  setDayOfWeek(instance, $readInt(streamReader));
  setEra(instance, $readInt(streamReader));
  setHours_1(instance, $readInt(streamReader));
  setMidnightIs24(instance, $readBoolean(streamReader));
  setMilliseconds(instance, $readInt(streamReader));
  setMinutes_1(instance, $readInt(streamReader));
  setMonth_1(instance, $readInt(streamReader));
  setSeconds_1(instance, $readInt(streamReader));
  setTzOffset(instance, $readInt(streamReader));
  setYear_1(instance, $readInt(streamReader));
}

function instantiate(streamReader){
  return new DateRecord;
}

function serialize(streamWriter, instance){
  $writeBoolean(streamWriter, instance.ambiguousYear);
  $writeInt(streamWriter, instance.ampm);
  $writeInt(streamWriter, instance.dayOfMonth);
  $writeInt(streamWriter, instance.dayOfWeek);
  $writeInt(streamWriter, instance.era);
  $writeInt(streamWriter, instance.hours);
  $writeBoolean(streamWriter, instance.midnightIs24);
  $writeInt(streamWriter, instance.milliseconds);
  $writeInt(streamWriter, instance.minutes);
  $writeInt(streamWriter, instance.month);
  $writeInt(streamWriter, instance.seconds);
  $writeInt(streamWriter, instance.tzOffset);
  $writeInt(streamWriter, instance.year);
  $append(streamWriter, toBase64(fromDouble(instance.jsdate.getTime())));
}

function setAmbiguousYear(instance, value_0){
  instance.ambiguousYear = value_0;
}

function setAmpm(instance, value_0){
  instance.ampm = value_0;
}

function setDayOfMonth(instance, value_0){
  instance.dayOfMonth = value_0;
}

function setDayOfWeek(instance, value_0){
  instance.dayOfWeek = value_0;
}

function setEra(instance, value_0){
  instance.era = value_0;
}

function setHours_1(instance, value_0){
  instance.hours = value_0;
}

function setMidnightIs24(instance, value_0){
  instance.midnightIs24 = value_0;
}

function setMilliseconds(instance, value_0){
  instance.milliseconds = value_0;
}

function setMinutes_1(instance, value_0){
  instance.minutes = value_0;
}

function setMonth_1(instance, value_0){
  instance.month = value_0;
}

function setSeconds_1(instance, value_0){
  instance.seconds = value_0;
}

function setTzOffset(instance, value_0){
  instance.tzOffset = value_0;
}

function setYear_1(instance, value_0){
  instance.year = value_0;
}

function clone(array){
  return cloneSubrange(array, array.length);
}

function cloneSubrange(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function createFrom(array, length_0){
  var result;
  result = initializeArrayElementsWithDefaults(0, length_0);
  initValues(getClass__Ljava_lang_Class___devirtual$(array), array.castableTypeMap$, array.__elementTypeId$, array.__elementTypeCategory$, result);
  return result;
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function nativeArraySplice(src_0, srcOfs, dest, destOfs, len, overwrite){
  if (src_0 === dest) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (var batchStart = srcOfs, end = srcOfs + len; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    Array.prototype.splice.apply(dest, [destOfs, overwrite?len:0].concat(src_0.slice(batchStart, batchEnd)));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap(e){
  var jse;
  if (instanceOf(e, 72)) {
    jse = dynamicCast(e, 72);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 19)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_1(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_20;
  a1 = value_0 >> 22 & $intern_20;
  a2 = value_0 < 0?$intern_21:0;
  return create0(a0, a1, a2);
}

function create_2(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder_0 = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_22 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_22 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_2(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder_0 = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder_0 = neg(a)):(remainder_0 = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_22 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder_0 = create0(0, 0, 0));
    return create_2(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder_0 = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder_0 = neg(a)):(remainder_0 = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder_0 = neg(a);
      aIsMinValue && (remainder_0 = sub_0(remainder_0, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder_0 = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_20;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_20;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_21;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_23 + a.h * $intern_24;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  setL(a, sum0 & $intern_20);
  setM(a, sum1 & $intern_20);
  setH(a, sum2 & $intern_21);
  return true;
}

var remainder_0;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & $intern_20, m:sum1 & $intern_20, h:sum2 & $intern_21};
}

function and(a, b){
  return {l:a.l & b.l, m:a.m & b.m, h:a.h & b.h};
}

function base64Append(sb, digit, haveNonZero){
  var c;
  digit > 0 && (haveNonZero = true);
  if (haveNonZero) {
    digit < 26?(c = 65 + digit):digit < 52?(c = 97 + digit - 26):digit < 62?(c = 48 + digit - 52):digit == 62?(c = 36):(c = 95);
    $append_1(sb, c & $intern_12);
  }
  return haveNonZero;
}

function base64Value(digit){
  if (digit >= 65 && digit <= 90) {
    return digit - 65;
  }
  if (digit >= 97) {
    return digit - 97 + 26;
  }
  if (digit >= 48 && digit <= 57) {
    return digit - 48 + 52;
  }
  if (digit == 36) {
    return 62;
  }
  return 63;
}

function div_0(a, b){
  return divMod(a, b, false);
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN_0(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_25) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_24) {
    a2 = round_int(value_0 / $intern_24);
    value_0 -= a2 * $intern_24;
  }
  a1 = 0;
  if (value_0 >= $intern_23) {
    a1 = round_int(value_0 / $intern_23);
    value_0 -= a1 * $intern_23;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_2, 761, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_1(value_0));
    return result;
  }
  return create_1(value_0);
}

function gt(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l > b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l <= b.l);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function longFromBase64(value_0){
  var len, longVal, pos;
  pos = 0;
  longVal = fromInt(base64Value($charAt_0(value_0, pos++)));
  len = value_0.length;
  while (pos < len) {
    longVal = shl(longVal, 6);
    longVal = or(longVal, fromInt(base64Value($charAt_0(value_0, pos++))));
  }
  return longVal;
}

function lt(a, b){
  return !gte_0(a, b);
}

function mod(a, b){
  divMod(a, b, true);
  return remainder_0;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_20;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_20;
  c2 += c1 >> 22;
  c1 &= $intern_20;
  c2 &= $intern_21;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_20;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_20;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_21;
  return create0(neg0, neg1, neg2);
}

function neq(a, b){
  return a.l != b.l || a.m != b.m || a.h != b.h;
}

function or(a, b){
  return {l:a.l | b.l, m:a.m | b.m, h:a.h | b.h};
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_20, m:res1 & $intern_20, h:res2 & $intern_21};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_22) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_21:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_21:0;
    res1 = negative?$intern_20:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_20, m:res1 & $intern_20, h:res2 & $intern_21};
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_21;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_20, m:res1 & $intern_20, h:res2 & $intern_21};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_20, m:sum1 & $intern_20, h:sum2 & $intern_21};
}

function toBase64(value_0){
  var haveNonZero, high, low, sb, v;
  low = toInt(and(value_0, {l:$intern_20, m:$intern_20, h:$intern_21}));
  high = toInt(shr(value_0, 32));
  sb = new StringBuilder;
  haveNonZero = base64Append(sb, high >> 28 & 15, false);
  haveNonZero = base64Append(sb, high >> 22 & 63, haveNonZero);
  haveNonZero = base64Append(sb, high >> 16 & 63, haveNonZero);
  haveNonZero = base64Append(sb, high >> 10 & 63, haveNonZero);
  haveNonZero = base64Append(sb, high >> 4 & 63, haveNonZero);
  v = (high & 15) << 2 | low >> 30 & 3;
  haveNonZero = base64Append(sb, v, haveNonZero);
  haveNonZero = base64Append(sb, low >> 24 & 63, haveNonZero);
  haveNonZero = base64Append(sb, low >> 18 & 63, haveNonZero);
  haveNonZero = base64Append(sb, low >> 12 & 63, haveNonZero);
  base64Append(sb, low >> 6 & 63, haveNonZero);
  base64Append(sb, low & 63, true);
  return sb.string;
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_25;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_23 + a.h * $intern_24;
}

function toInt(a){
  return a.l | a.m << 22;
}

function toString_7(a){
  var digits, rem, res, tenPowerLong, zeroesNeeded;
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    return '0';
  }
  if (a.h == $intern_22 && a.m == 0 && a.l == 0) {
    return '-9223372036854775808';
  }
  if (a.h >> 19 != 0) {
    return '-' + toString_7(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
    tenPowerLong = fromInt(1000000000);
    rem = divMod(rem, tenPowerLong, true);
    digits = '' + toInt(remainder_0);
    if (!(rem.l == 0 && rem.m == 0 && rem.h == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_20, $intern_20, 524287);
  MIN_VALUE = create0(0, 0, $intern_22);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0(new Application);
}

function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function SafeHtmlString(){
  this.html = '';
}

defineClass(166, 1, {687:1, 166:1, 3:1}, SafeHtmlString);
_.equals$ = function equals_2(obj){
  if (!instanceOf(obj, 687)) {
    return false;
  }
  return $equals_1(this.html, dynamicCast(dynamicCast(obj, 687), 166).html);
}
;
_.hashCode$ = function hashCode_4(){
  return getHashCode_0(this.html);
}
;
_.toString$ = function toString_8(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 166);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  new SafeHtmlString;
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, GT_RE, LT_RE, QUOT_RE, SQUOT_RE;
function SafeUriString(uri_0){
  if (uri_0 == null) {
    throw new NullPointerException_0('uri is null');
  }
  this.uri_0 = uri_0;
}

defineClass(79, 1, {696:1, 79:1}, SafeUriString);
_.equals$ = function equals_3(obj){
  if (!instanceOf(obj, 696)) {
    return false;
  }
  return $equals_1(this.uri_0, dynamicCast(dynamicCast(obj, 696), 79).uri_0);
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode_0(this.uri_0);
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 79);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

defineClass(738, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 738);
function PassthroughParser(){
}

defineClass(640, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 640);
function PassthroughRenderer(){
}

defineClass(639, 738, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 639);
function $calcNewVelocity(initialVelocity, decelFactor, oldVelocity, minDecel){
  var maxVelocityX, minVelocityX, newVelocity;
  newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
    maxVelocityX = 0 > oldVelocity - minDecel?0:oldVelocity - minDecel;
    newVelocity = newVelocity < maxVelocityX?newVelocity:maxVelocityX;
  }
   else {
    minVelocityX = 0 < oldVelocity + minDecel?0:oldVelocity + minDecel;
    newVelocity = newVelocity > minVelocityX?newVelocity:minVelocityX;
  }
  return newVelocity;
}

function $updateState(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = state.elapsedMillis;
  totalEllapsedMillis = state.cumulativeElapsedMillis;
  initialVelocity = state.initialVelocity;
  oldVelocity = state.velocity;
  decelFactor = pow_0(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = $calcNewVelocity(initialVelocity.x_0, decelFactor, oldVelocity.x_0, minDecel);
  newVelocityY = $calcNewVelocity(initialVelocity.y_0, decelFactor, oldVelocity.y_0, minDecel);
  newVelocity = new Point(newVelocityX, newVelocityY);
  state.velocity = newVelocity;
  elapsedMillis = state.elapsedMillis;
  dist = $mult(newVelocity, new Point(elapsedMillis, elapsedMillis));
  position = state.position_0;
  $setPosition(state, new Point(position.x_0 + dist.x_0, position.y_0 + dist.y_0));
  if (abs_1(newVelocity.x_0) < 0.02 && abs_1(newVelocity.y_0) < 0.02) {
    return false;
  }
  return true;
}

function DefaultMomentum(){
}

defineClass(635, 1, {}, DefaultMomentum);
var Lcom_google_gwt_touch_client_DefaultMomentum_2_classLit = createForClass('com.google.gwt.touch.client', 'DefaultMomentum', 635);
function $setCumulativeElapsedMillis(this$static, cumulativeElapsedMillis){
  this$static.cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function $setElapsedMillis(this$static, elapsedMillis){
  this$static.elapsedMillis = elapsedMillis;
}

function $setPosition(this$static, position){
  this$static.position_0 = position;
}

function Momentum$State(initialPosition, initialVelocity){
  this.initialVelocity = initialVelocity;
  this.position_0 = new Point_0(initialPosition);
  this.velocity = new Point_0(initialVelocity);
}

defineClass(636, 1, {}, Momentum$State);
_.cumulativeElapsedMillis = 0;
_.elapsedMillis = 0;
var Lcom_google_gwt_touch_client_Momentum$State_2_classLit = createForClass('com.google.gwt.touch.client', 'Momentum/State', 636);
function $minus(this$static, c){
  return new Point(this$static.x_0 - c.x_0, this$static.y_0 - c.y_0);
}

function $mult(this$static, c){
  return new Point(this$static.x_0 * c.x_0, this$static.y_0 * c.y_0);
}

function $plus(this$static, c){
  return new Point(this$static.x_0 + c.x_0, this$static.y_0 + c.y_0);
}

function Point(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function Point_0(c){
  Point.call(this, c.x_0, c.y_0);
}

defineClass(46, 1, {46:1}, Point, Point_0);
_.equals$ = function equals_4(obj){
  var c;
  if (!instanceOf(obj, 46)) {
    return false;
  }
  c = dynamicCast(obj, 46);
  return this.x_0 == c.x_0 && this.y_0 == c.y_0;
}
;
_.hashCode$ = function hashCode_6(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString$ = function toString_9(){
  return 'Point(' + this.x_0 + ',' + this.y_0 + ')';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_google_gwt_touch_client_Point_2_classLit = createForClass('com.google.gwt.touch.client', 'Point', 46);
function $calculateEndVelocity(from, to){
  var dist, time;
  time = to.time - from.time;
  if (time <= 0) {
    return null;
  }
  dist = $minus(from.point, to.point);
  return new Point(dist.x_0 / time, dist.y_0 / time);
}

function $cancelAll(this$static){
  this$static.touching = false;
  this$static.dragging = false;
  this$static.momentumCommand = null;
}

function $getTouchFromEvent(event_0){
  var touches;
  touches = event_0.nativeEvent.touches;
  return touches.length > 0?touches[0]:null;
}

function $getWidgetScrollPosition(this$static){
  return new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
}

function $hitTest(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new Point(point1.x_0 - point2.x_0, point1.y_0 - point2.y_0);
  absDiffX = abs_1(diff.x_0);
  absDiffY = abs_1(diff.y_0);
  return absDiffX <= 25 && absDiffY <= 25;
}

function $isClickScrollTriggeringTouch(this$static, clickPoint){
  if (this$static.recentScrollTriggeringTouchPosition.point) {
    return $hitTest(clickPoint, this$static.recentScrollTriggeringTouchPosition.point);
  }
  return false;
}

function $isClickTouchPositionDuringMomentum(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = now_1();
  same = false;
  for (point$iterator = new AbstractList$IteratorImpl(this$static.touchPositionsDuringMomentum); point$iterator.i < point$iterator.this$01_0.size_1();) {
    point = (checkCriticalElement(point$iterator.i < point$iterator.this$01_0.size_1()) , dynamicCast(point$iterator.this$01_0.get_0(point$iterator.last = point$iterator.i++), 92));
    if (currentTime - point.time <= 2500 && $hitTest(clickPoint, point.point)) {
      same = true;
      break;
    }
  }
  return same;
}

function $onDragEnd(this$static){
  var endVelocity;
  if (!this$static.momentum) {
    return;
  }
  endVelocity = $calculateEndVelocity(this$static.recentTouchPosition, this$static.lastTouchPosition);
  if (endVelocity) {
    this$static.momentumCommand = new TouchScroller$MomentumCommand(this$static, endVelocity);
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumCommand), 16);
  }
}

function $onTouchEnd(this$static){
  if (!this$static.touching) {
    return;
  }
  this$static.touching = false;
  if (this$static.dragging) {
    this$static.dragging = false;
    $onDragEnd(this$static);
  }
}

function $onTouchMove(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, trackingTime, vMax, vPosition, diff_0, curScrollPosition;
  if (!this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  touchPoint = new Point($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  touchTime = now_1();
  $setTemporalPoint(this$static.lastTouchPosition, touchPoint, touchTime);
  if (!this$static.dragging) {
    diff = $minus(touchPoint, this$static.startTouchPosition);
    absDiffX = abs_1(diff.x_0);
    absDiffY = abs_1(diff.y_0);
    if (absDiffX > 5 || absDiffY > 5) {
      $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, this$static.recentTouchPosition.point, this$static.recentTouchPosition.time);
      if (absDiffX > absDiffY) {
        hPosition = $getHorizontalScrollPosition(this$static.widget);
        hMin = $getMinimumHorizontalScrollPosition_0(this$static.widget);
        hMax = $getMaximumHorizontalScrollPosition_0(this$static.widget);
        if (diff.x_0 < 0 && hMax <= hPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.x_0 > 0 && hMin >= hPosition) {
          $cancelAll(this$static);
          return;
        }
      }
       else {
        vPosition = $getVerticalScrollPosition(this$static.widget);
        vMax = $getMaximumVerticalScrollPosition(this$static.widget);
        if (diff.y_0 < 0 && vMax <= vPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.y_0 > 0 && 0 >= vPosition) {
          $cancelAll(this$static);
          return;
        }
      }
      this$static.dragging = true;
    }
  }
  $eventPreventDefault(event_0.nativeEvent);
  if (this$static.dragging) {
    diff_0 = $minus(this$static.startTouchPosition, this$static.lastTouchPosition.point);
    curScrollPosition = $plus(this$static.startScrollPosition, diff_0);
    $setHorizontalScrollPosition(this$static.widget, round_int(curScrollPosition.x_0));
    $setVerticalScrollPosition(this$static.widget, round_int(curScrollPosition.y_0));
    trackingTime = touchTime - this$static.recentTouchPosition.time;
    if (trackingTime > 200 && !!this$static.recentTouchPositionOnDeck) {
      $setTemporalPoint(this$static.recentTouchPosition, this$static.recentTouchPositionOnDeck.point, this$static.recentTouchPositionOnDeck.time);
      this$static.recentTouchPositionOnDeck = null;
    }
     else
      trackingTime > 100 && !this$static.recentTouchPositionOnDeck && (this$static.recentTouchPositionOnDeck = new TouchScroller$TemporalPoint_0(touchPoint, touchTime));
  }
}

function $onTouchStart(this$static, event_0){
  var startTouchTime, touch;
  $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  this$static.startTouchPosition = new Point($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  startTouchTime = now_1();
  $setTemporalPoint(this$static.recentTouchPosition, this$static.startTouchPosition, startTouchTime);
  $setTemporalPoint(this$static.lastTouchPosition, this$static.startTouchPosition, startTouchTime);
  this$static.recentTouchPositionOnDeck = null;
  if (this$static.momentumCommand) {
    $add_5(this$static.touchPositionsDuringMomentum, new TouchScroller$TemporalPoint_0(this$static.startTouchPosition, startTouchTime));
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumTouchRemovalCommand), 2500);
  }
  this$static.startScrollPosition = new Point($getHorizontalScrollPosition(this$static.widget), $getVerticalScrollPosition(this$static.widget));
  $cancelAll(this$static);
  this$static.touching = true;
}

function $removeAttachHandler(this$static){
  if (this$static.attachHandlerReg) {
    $removeHandler(this$static.attachHandlerReg.real);
    this$static.attachHandlerReg = null;
  }
}

function $removeBustClickHandler(this$static){
  if (this$static.bustClickHandlerReg) {
    $removeHandler(this$static.bustClickHandlerReg.real);
    this$static.bustClickHandlerReg = null;
  }
}

function $setMomentum(this$static, momentum){
  this$static.momentum = momentum;
}

function $setTargetWidget(this$static, widget){
  var reg, reg$iterator;
  if (this$static.widget == widget) {
    return;
  }
  $cancelAll(this$static);
  for (reg$iterator = new AbstractList$IteratorImpl(this$static.handlerRegs); reg$iterator.i < reg$iterator.this$01_0.size_1();) {
    reg = (checkCriticalElement(reg$iterator.i < reg$iterator.this$01_0.size_1()) , dynamicCast(reg$iterator.this$01_0.get_0(reg$iterator.last = reg$iterator.i++), 745));
    $removeHandler(reg.real);
  }
  this$static.handlerRegs.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  $removeAttachHandler(this$static);
  $removeBustClickHandler(this$static);
  this$static.widget = widget;
  widget.attached && ($removeBustClickHandler(this$static) , this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static)));
  this$static.attachHandlerReg = $addHandler_0(widget, new TouchScroller$1(this$static), (!TYPE_15 && (TYPE_15 = new GwtEvent$Type) , TYPE_15));
  $add_5(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$2(this$static), ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_14)));
  $add_5(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$3(this$static), ($clinit_TouchMoveEvent() , $clinit_TouchMoveEvent() , TYPE_13)));
  $add_5(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$4(this$static), ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_12)));
  $add_5(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$5(this$static), ($clinit_TouchCancelEvent() , $clinit_TouchCancelEvent() , TYPE_11)));
}

function $setWidgetScrollPosition(this$static, position){
  $setHorizontalScrollPosition(this$static.widget, round_int(position.x_0));
  $setVerticalScrollPosition(this$static.widget, round_int(position.y_0));
}

function $setupBustClickHandler(this$static){
  $removeBustClickHandler(this$static);
  this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static));
}

function TouchScroller(){
  this.handlerRegs = new ArrayList;
  this.lastTouchPosition = new TouchScroller$TemporalPoint;
  this.recentTouchPosition = new TouchScroller$TemporalPoint;
  this.recentScrollTriggeringTouchPosition = new TouchScroller$TemporalPoint;
  this.touchPositionsDuringMomentum = new ArrayList;
  this.momentumTouchRemovalCommand = new TouchScroller$MomentumTouchRemovalCommand(this);
  $setMomentum(this, new DefaultMomentum);
}

defineClass(566, 1, {}, TouchScroller);
_.dragging = false;
_.touching = false;
var isSupported;
var Lcom_google_gwt_touch_client_TouchScroller_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller', 566);
function TouchScroller$1(this$0){
  this.this$01 = this$0;
}

defineClass(570, 1, {746:1, 31:1}, TouchScroller$1);
var Lcom_google_gwt_touch_client_TouchScroller$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/1', 570);
function TouchScroller$2(this$0){
  this.this$01 = this$0;
}

defineClass(571, 1, {751:1, 31:1}, TouchScroller$2);
var Lcom_google_gwt_touch_client_TouchScroller$2_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/2', 571);
function TouchScroller$3(this$0){
  this.this$01 = this$0;
}

defineClass(572, 1, {752:1, 31:1}, TouchScroller$3);
var Lcom_google_gwt_touch_client_TouchScroller$3_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/3', 572);
function TouchScroller$4(this$0){
  this.this$01 = this$0;
}

defineClass(573, 1, {753:1, 31:1}, TouchScroller$4);
var Lcom_google_gwt_touch_client_TouchScroller$4_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/4', 573);
function TouchScroller$5(this$0){
  this.this$01 = this$0;
}

defineClass(574, 1, {754:1, 31:1}, TouchScroller$5);
var Lcom_google_gwt_touch_client_TouchScroller$5_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/5', 574);
function TouchScroller$6(this$0){
  this.this$01 = this$0;
}

defineClass(218, 1, $intern_26, TouchScroller$6);
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  var clickPoint;
  if (1 == $getTypeInt(event_0.nativeEvent)) {
    clickPoint = new Point($eventGetSubPixelClientX(event_0.nativeEvent) | 0, $eventGetSubPixelClientY(event_0.nativeEvent) | 0);
    if ($isClickScrollTriggeringTouch(this.this$01, clickPoint) || $isClickTouchPositionDuringMomentum(this.this$01, clickPoint)) {
      event_0.isCanceled = true;
      $eventStopPropagation(event_0.nativeEvent);
      $eventPreventDefault(event_0.nativeEvent);
    }
  }
}
;
var Lcom_google_gwt_touch_client_TouchScroller$6_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/6', 218);
function $finish(this$static){
  if (this$static.windowResizeHandler) {
    $removeHandler(this$static.windowResizeHandler.real);
    this$static.windowResizeHandler = null;
  }
  this$static == this$static.this$01.momentumCommand && (this$static.this$01.momentumCommand = null);
}

function TouchScroller$MomentumCommand(this$0, endVelocity){
  this.this$01 = this$0;
  this.duration = new Duration;
  this.initialPosition = $getWidgetScrollPosition(this.this$01);
  this.state = new Momentum$State(this.initialPosition, endVelocity);
  this.windowResizeHandler = addResizeHandler(new TouchScroller$MomentumCommand$1(this));
}

defineClass(567, 1, {}, TouchScroller$MomentumCommand);
_.execute_0 = function execute_3(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vPos;
  if (this != this.this$01.momentumCommand) {
    $finish(this);
    return false;
  }
  cumulativeElapsedMillis = $elapsedMillis(this.duration);
  $setElapsedMillis(this.state, cumulativeElapsedMillis - this.lastElapsedMillis);
  this.lastElapsedMillis = cumulativeElapsedMillis;
  $setCumulativeElapsedMillis(this.state, cumulativeElapsedMillis);
  notDone = $updateState(this.state);
  notDone || $finish(this);
  $setWidgetScrollPosition(this.this$01, this.state.position_0);
  hPos = round_int(this.state.position_0.x_0);
  hMin = $getMinimumHorizontalScrollPosition_0(this.this$01.widget);
  hMax = $getMaximumHorizontalScrollPosition_0(this.this$01.widget);
  vMax = $getMaximumVerticalScrollPosition(this.this$01.widget);
  vPos = round_int(this.state.position_0.y_0);
  if ((vMax <= vPos || 0 >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    $finish(this);
    return false;
  }
  return notDone;
}
;
_.lastElapsedMillis = 0;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand', 567);
function TouchScroller$MomentumCommand$1(this$1){
  this.this$11 = this$1;
}

defineClass(569, 1, $intern_27, TouchScroller$MomentumCommand$1);
_.onResize = function onResize(event_0){
  $finish(this.this$11);
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand/1', 569);
function TouchScroller$MomentumTouchRemovalCommand(this$0){
  this.this$01 = this$0;
}

defineClass(568, 1, {}, TouchScroller$MomentumTouchRemovalCommand);
_.execute_0 = function execute_4(){
  var currentTime, iter, point;
  currentTime = now_1();
  iter = new AbstractList$IteratorImpl(this.this$01.touchPositionsDuringMomentum);
  while (iter.i < iter.this$01_0.size_1()) {
    point = (checkCriticalElement(iter.i < iter.this$01_0.size_1()) , dynamicCast(iter.this$01_0.get_0(iter.last = iter.i++), 92));
    currentTime - point.time >= 2500 && (checkState(iter.last != -1) , iter.this$01_0.remove_2(iter.last) , iter.i = iter.last , iter.last = -1);
  }
  return this.this$01.touchPositionsDuringMomentum.array.length != 0;
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumTouchRemovalCommand', 568);
function $setTemporalPoint(this$static, point, time){
  this$static.point = point;
  this$static.time = time;
}

function TouchScroller$TemporalPoint(){
}

function TouchScroller$TemporalPoint_0(point, time){
  this.point = point;
  this.time = time;
}

defineClass(92, 1, {92:1}, TouchScroller$TemporalPoint, TouchScroller$TemporalPoint_0);
_.time = 0;
var Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/TemporalPoint', 92);
function BaseListenerWrapper(listener){
  this.listener = listener;
}

defineClass(196, 1, {31:1});
var Lcom_google_gwt_user_client_BaseListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client', 'BaseListenerWrapper', 196);
function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem){
  $clinit_DOM();
  var eventListener;
  eventListener = getEventListener(elem);
  if (!eventListener) {
    return false;
  }
  dispatchEvent_1(evt, elem, eventListener);
  return true;
}

function dispatchEvent_1(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $clinit_DOM();
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  $clinit_DOM();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  $clinit_DOM();
  var ret;
  ret = fire_6(handlers_0, evt);
  if (!ret && !!evt) {
    $eventStopPropagation(evt);
    $eventPreventDefault(evt);
  }
  return ret;
}

function releaseCapture(elem){
  $clinit_DOM();
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  ($clinit_DOMImplStandard() , captureElem) == elem && (captureElem = null);
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setCapture(elem){
  $clinit_DOM();
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  $clinit_DOMImplStandard();
  captureElem = elem;
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_1(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_1('CSS1Compat', allowedModes[0]) && $equals_1('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function $getTypeInt(this$static){
  return $clinit_DOM() , $eventGetTypeInt(this$static.type);
}

function addNativePreviewHandler(handler){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  !TYPE_21 && (TYPE_21 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_21, handler);
}

function getEventsSunk(elem){
  return $clinit_DOM() , elem.__eventBits || 0;
}

function getTypeInt(typeName){
  return $eventGetTypeInt(($clinit_DOM() , typeName));
}

function setEventListener(elem, listener){
  $clinit_DOM();
  setEventListener_0(elem, listener);
}

function sinkEvents_0(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var handlers_0;
function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_6(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_21 && !!handlers && $isEventHandled(handlers, TYPE_21)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(350, 719, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_21(handler){
  dynamicCast(handler, 686).onPreviewNativeEvent(this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType = function getAssociatedType_22(){
  return TYPE_21;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_21, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 350);
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImpl;
  historyEventSource = new History$HistoryEventSource;
  token_0 = getDecodedHash();
}

function addValueChangeHandler(handler){
  $clinit_History();
  return $addValueChangeHandler(historyEventSource, handler);
}

function getDecodedHash(){
  var hashToken;
  hashToken = $wnd.location.hash;
  if (hashToken == null || !hashToken.length) {
    return '';
  }
  return $decodeHistoryToken(__substr(hashToken, 1, hashToken.length - 1));
}

function newItem(historyToken){
  $clinit_History();
  var updateToken;
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_1(historyToken, token_0)) {
    token_0 = historyToken;
    updateToken = $encodeHistoryToken(historyToken);
    $wnd.location.hash = updateToken;
    fire_5(historyEventSource, historyToken);
  }
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals_1(hashToken, token_0)) {
    token_0 = hashToken;
    fire_5(historyEventSource, hashToken);
  }
}

var historyEventSource, token_0;
function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, (!TYPE_20 && (TYPE_20 = new GwtEvent$Type) , TYPE_20), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(325, 1, {11:1}, History$HistoryEventSource);
_.fireEvent = function fireEvent_0(event_0){
  $fireEvent(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 325);
function $decodeHistoryToken(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

function $encodeHistoryToken(historyToken){
  return $wnd.encodeURI(historyToken).replace('#', '%23');
}

function History$HistoryImpl(){
  var handler;
  handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}

defineClass(326, 1, {}, History$HistoryImpl);
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 326);
function History$WrapHistory(listener){
  BaseListenerWrapper.call(this, listener);
}

defineClass(327, 196, $intern_28, History$WrapHistory);
_.onValueChange = function onValueChange(event_0){
  $onHistoryChanged(dynamicCast(this.listener, 743), dynamicCastToString(event_0.getValue()));
}
;
var Lcom_google_gwt_user_client_History$WrapHistory_2_classLit = createForClass('com.google.gwt.user.client', 'History/WrapHistory', 327);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_16?TYPE_16:(TYPE_16 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function confirm_0(msg){
  return $wnd.confirm(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initWindowResizeHandler();
    resizeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize_0(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_3((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), width_0);
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_22 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(328, 719, {}, Window$ClosingEvent);
_.dispatch = function dispatch_22(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_23(){
  return TYPE_22;
}
;
var TYPE_22;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 328);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(162, 121, {11:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 162);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_29;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_22;
    case 'touchstart':
      return $intern_30;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_23;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_31;
    case 'gesturechange':
      return $intern_32;
    case 'gestureend':
      return $intern_33;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 12)?maybeListener:null;
}

function setEventListener_0(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_3, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $eventGetFromElement(evt){
  if ($equals_1(evt.type, 'mouseover')) {
    return evt.relatedTarget;
  }
  if ($equals_1(evt.type, 'mouseout')) {
    return $eventGetTarget(evt);
  }
  return null;
}

function $eventGetToElement(evt){
  if ($equals_1(evt.type, 'mouseover')) {
    return $eventGetTarget(evt);
  }
  if ($equals_1(evt.type, 'mouseout')) {
    return evt.relatedTarget;
  }
  return null;
}

function $getChild(elem, index_0){
  var count = 0, child = elem.firstChild;
  while (child) {
    if (child.nodeType == 1) {
      if (index_0 == count)
        return child;
      ++count;
    }
    child = child.nextSibling;
  }
  return null;
}

function $getChildCount(elem){
  var count = 0, child = elem.firstChild;
  while (child) {
    child.nodeType == 1 && ++count;
    child = child.nextSibling;
  }
  return count;
}

function $initEventSystem(){
  dispatchEvent_2 = $entry(dispatchEvent_3);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $insertChild(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function $sinkBitlessEvent(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_2:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_2:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_2:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_2:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_2:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_2:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_2:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_2:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_2:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_2:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_2:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_2:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_2:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_2:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_2:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_29 && (elem.onerror = bits & $intern_29?dispatchEvent_2:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_2:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_2:null);
  chMask & $intern_22 && (elem.onpaste = bits & $intern_22?dispatchEvent_2:null);
  chMask & $intern_30 && (elem.ontouchstart = bits & $intern_30?dispatchEvent_2:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?dispatchEvent_2:null);
  chMask & $intern_23 && (elem.ontouchend = bits & $intern_23?dispatchEvent_2:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_2:null);
  chMask & $intern_31 && (elem.ongesturestart = bits & $intern_31?dispatchEvent_2:null);
  chMask & $intern_32 && (elem.ongesturechange = bits & $intern_32?dispatchEvent_2:null);
  chMask & $intern_33 && (elem.ongestureend = bits & $intern_33?dispatchEvent_2:null);
}

function dispatchCapturedEvent(evt){
  previewEvent(evt);
}

function dispatchCapturedMouseEvent(evt){
  var cancelled;
  cancelled = !previewEvent(evt);
  if (cancelled || !captureElem) {
    return;
  }
  dispatchEvent_0(evt, captureElem) && $eventStopPropagation(evt);
}

function dispatchDragEvent(evt){
  $eventPreventDefault(evt);
  dispatchEvent_3(evt);
}

function dispatchEvent_3(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_1(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = $eventGetCurrentTarget(evt);
  $setPropertyString(element, '__gwtLastUnhandledEvent', evt.type);
  dispatchEvent_3(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = $eventGetCurrentTarget(evt);
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureElem, captureEventDispatchers, dispatchEvent_2, dispatchUnhandledEvent;
function $get(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  if (index_0 < 0) {
    return null;
  }
  return dynamicCast($get_0(this$static.uiObjectList, index_0), 9);
}

function $put(this$static, uiObject){
  var index_0;
  if (!this$static.freeList) {
    index_0 = this$static.uiObjectList.array.length;
    $add_5(this$static.uiObjectList, uiObject);
  }
   else {
    index_0 = this$static.freeList.index_0;
    $set_1(this$static.uiObjectList, index_0, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  ($clinit_DOM() , uiObject.element)['__uiObjectID'] = index_0;
}

function $removeByElement(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  elem['__uiObjectID'] = null;
  $set_1(this$static.uiObjectList, index_0, null);
  this$static.freeList = new ElementMapperImpl$FreeNode(index_0, this$static.freeList);
}

function ElementMapperImpl(){
  this.uiObjectList = new ArrayList;
}

function getIndex(elem){
  var index_0 = elem['__uiObjectID'];
  return index_0 == null?-1:index_0;
}

defineClass(239, 1, {}, ElementMapperImpl);
_.freeList = null;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl', 239);
function ElementMapperImpl$FreeNode(index_0, next){
  this.index_0 = index_0;
  this.next = next;
}

defineClass(679, 1, {}, ElementMapperImpl$FreeNode);
_.index_0 = 0;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl/FreeNode', 679);
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire_2((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

function $initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      onResize_0();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}

function IncompatibleRemoteServiceException(){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser.');
}

function IncompatibleRemoteServiceException_0(msg){
  RuntimeException_0.call(this, 'This application is out of date, please click the refresh button on your browser. ( ' + msg + ' )');
}

function IncompatibleRemoteServiceException_1(cause){
  RuntimeException_1.call(this, 'The response could not be deserialized', cause);
}

defineClass(149, 33, $intern_4, IncompatibleRemoteServiceException, IncompatibleRemoteServiceException_0, IncompatibleRemoteServiceException_1);
var Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'IncompatibleRemoteServiceException', 149);
function deserialize_0(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_0(streamReader){
  return new IncompatibleRemoteServiceException;
}

function serialize_0(streamWriter, instance){
  $writeString(streamWriter, instance.detailMessage);
}

function InvocationException(s){
  RuntimeException_1.call(this, s, null);
}

function InvocationException_0(s, cause){
  RuntimeException_1.call(this, s, cause);
}

defineClass(135, 33, $intern_4, InvocationException, InvocationException_0);
var Lcom_google_gwt_user_client_rpc_InvocationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'InvocationException', 135);
function $create(this$static, serviceEntryPoint){
  this$static.builder = this$static.doCreate(serviceEntryPoint);
  return this$static;
}

function $doFinish(rb){
  $setHeader(rb, 'X-GWT-Permutation', $strongName);
  $setHeader(rb, 'X-GWT-Module-Base', getModuleBaseURL());
}

function $doSetCallback(rb, callback){
  throwIfNull('callback', callback);
  rb.callback = callback;
}

function $doSetRequestData(rb, data_0){
  rb.requestData = data_0;
}

function $finish_0(this$static){
  try {
    $doFinish(this$static.builder);
    return this$static.builder;
  }
   finally {
    this$static.builder = null;
  }
}

function $setCallback(this$static, callback){
  $doSetCallback(this$static.builder, callback);
  return this$static;
}

function $setContentType(this$static){
  $setHeader(this$static.builder, 'Content-Type', 'text/x-gwt-rpc; charset=utf-8');
  return this$static;
}

function $setRequestData(this$static, data_0){
  $doSetRequestData(this$static.builder, data_0);
  return this$static;
}

function RpcRequestBuilder(){
}

defineClass(348, 1, {}, RpcRequestBuilder);
_.doCreate = function doCreate(serviceEntryPoint){
  return new RequestBuilder(($clinit_RequestBuilder() , POST), serviceEntryPoint);
}
;
var Lcom_google_gwt_user_client_rpc_RpcRequestBuilder_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcRequestBuilder', 348);
function RpcTokenException(){
  RuntimeException_0.call(this, 'Invalid RPC token');
}

defineClass(474, 33, $intern_4, RpcTokenException);
var Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'RpcTokenException', 474);
function deserialize_1(streamReader, instance){
  setDetailMessage(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_1(streamReader){
  return new RpcTokenException;
}

function SerializationException(msg){
  Exception_0.call(this, msg);
}

defineClass(53, 22, {53:1, 3:1, 22:1, 19:1}, SerializationException);
var Lcom_google_gwt_user_client_rpc_SerializationException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'SerializationException', 53);
function ServiceDefTarget$NoServiceEntryPointSpecifiedException(){
  InvocationException.call(this, 'Service implementation URL not specified');
}

defineClass(466, 135, $intern_4, ServiceDefTarget$NoServiceEntryPointSpecifiedException);
var Lcom_google_gwt_user_client_rpc_ServiceDefTarget$NoServiceEntryPointSpecifiedException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'ServiceDefTarget/NoServiceEntryPointSpecifiedException', 466);
function StatusCodeException(statusCode, statusText, encodedResponse){
  InvocationException.call(this, statusCode + ' ' + statusText + ' ' + encodedResponse);
}

defineClass(543, 135, $intern_4, StatusCodeException);
var Lcom_google_gwt_user_client_rpc_StatusCodeException_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'StatusCodeException', 543);
function serialize_1(streamWriter, instance){
  $writeString(streamWriter, instance.nullField);
}

function deserialize_2(streamReader, instance){
}

function instantiate_2(streamReader){
  return $clinit_Boolean() , $readBoolean(streamReader)?TRUE_1:FALSE_1;
}

function serialize_2(streamWriter, instance){
  $writeBoolean(streamWriter, instance.value_0);
}

function deserialize_3(streamReader, instance){
}

function instantiate_3(streamReader){
  return valueOf_1($readInt(streamReader));
}

function serialize_3(streamWriter, instance){
  $writeInt(streamWriter, instance.value_0);
}

function deserialize_4(streamReader, instance){
  var itemIndex;
  for (itemIndex = 0; itemIndex < instance.length; ++itemIndex) {
    setCheck(instance, itemIndex, $readObject(streamReader));
  }
}

function serialize_4(streamWriter, instance){
  var itemCount, itemIndex;
  itemCount = instance.length;
  append(streamWriter.encodeBuffer, '' + itemCount);
  for (itemIndex = 0; itemIndex < itemCount; ++itemIndex) {
    $writeObject(streamWriter, instance[itemIndex]);
  }
}

function deserialize_5(streamReader, instance){
  var i, n;
  for (i = 0 , n = instance.length; i < n; ++i) {
    instance[i] = $getString(streamReader, $readInt(streamReader));
  }
}

function instantiate_4(streamReader){
  var size_0;
  size_0 = $readInt(streamReader);
  return initDim(Ljava_lang_String_2_classLit, $intern_2, 2, size_0, 4, 1);
}

function serialize_5(streamWriter, instance){
  var i, n;
  $writeInt(streamWriter, instance.length);
  for (i = 0 , n = instance.length; i < n; ++i) {
    $writeString(streamWriter, instance[i]);
  }
}

function deserialize_6(streamReader, instance){
}

function instantiate_5(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}

function serialize_6(streamWriter, instance){
  $writeInt(streamWriter, $addString(streamWriter, instance));
}

function setDetailMessage(instance, value_0){
  instance.detailMessage = value_0;
}

function deserialize_7(streamReader, instance){
}

function instantiate_6(streamReader){
  return new Date_4($readLong(streamReader));
}

function serialize_7(streamWriter, instance){
  $append(streamWriter, toBase64(fromDouble(instance.jsdate.getTime())));
}

function deserialize_8(streamReader, instance){
}

function instantiate_7(streamReader){
  return new Time($readLong(streamReader));
}

function serialize_8(streamWriter, instance){
  $append(streamWriter, toBase64(fromDouble(instance.jsdate.getTime())));
}

function deserialize_9(streamReader, instance){
  $setNanos(instance, $readInt(streamReader));
}

function instantiate_8(streamReader){
  return new Timestamp($readLong(streamReader));
}

function serialize_9(streamWriter, instance){
  $append(streamWriter, toBase64(fromDouble(instance.jsdate.getTime())));
  $writeInt(streamWriter, instance.nanos);
}

function deserialize_10(streamReader, instance){
  deserialize_12(streamReader, instance);
}

function serialize_10(streamWriter, instance){
  serialize_12(streamWriter, instance);
}

function instantiate_9(streamReader){
  return new ArrayList;
}

function deserialize_11(streamReader, instance){
}

function instantiate_10(streamReader){
  var array;
  array = dynamicCast($readObject(streamReader), 5);
  return new Arrays$ArrayList(array);
}

function serialize_11(streamWriter, instance){
  var array;
  array = instance.array;
  $writeObject(streamWriter, array);
}

function deserialize_12(streamReader, instance){
  var i, obj, size_0;
  size_0 = $readInt(streamReader);
  for (i = 0; i < size_0; ++i) {
    obj = $readObject(streamReader);
    instance.add_0(obj);
  }
}

function serialize_12(streamWriter, instance){
  var obj, obj$iterator, size_0;
  size_0 = instance.size_1();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (obj$iterator = instance.iterator(); obj$iterator.hasNext();) {
    obj = obj$iterator.next_0();
    $writeObject(streamWriter, obj);
  }
}

function deserialize_13(streamReader, instance){
}

function instantiate_11(streamReader){
  return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
}

function serialize_13(streamWriter, instance){
}

function deserialize_14(streamReader, instance){
}

function instantiate_12(streamReader){
  return $clinit_Collections() , $clinit_Collections() , EMPTY_MAP;
}

function serialize_14(streamWriter, instance){
}

function deserialize_15(streamReader, instance){
}

function instantiate_13(streamReader){
  return $clinit_Collections() , $clinit_Collections() , EMPTY_SET;
}

function serialize_15(streamWriter, instance){
}

function deserialize_16(streamReader, instance){
}

function instantiate_14(streamReader){
  return $clinit_Collections() , new Collections$SingletonList($readObject(streamReader));
}

function serialize_16(streamWriter, instance){
  $writeObject(streamWriter, instance.get_0(0));
}

function deserialize_17(streamReader, instance){
}

function instantiate_15(streamReader){
  return new Date_2($readLong(streamReader));
}

function serialize_17(streamWriter, instance){
  $append(streamWriter, toBase64(instance.getTime_0()));
}

function deserialize_18(streamReader, instance){
  deserialize_24(streamReader, instance);
}

function serialize_18(streamWriter, instance){
  serialize_24(streamWriter, instance);
}

function instantiate_16(streamReader){
  return new HashMap;
}

function deserialize_19(streamReader, instance){
  deserialize_12(streamReader, instance);
}

function serialize_19(streamWriter, instance){
  serialize_12(streamWriter, instance);
}

function instantiate_17(streamReader){
  return new HashSet;
}

function deserialize_20(streamReader, instance){
  deserialize_24(streamReader, instance);
}

function serialize_20(streamWriter, instance){
  serialize_24(streamWriter, instance);
}

function instantiate_18(streamReader){
  return new IdentityHashMap;
}

function deserialize_21(streamReader, instance){
  deserialize_24(streamReader, instance);
}

function instantiate_19(streamReader){
  var accessOrder;
  accessOrder = $readBoolean(streamReader);
  return new LinkedHashMap_0(accessOrder);
}

function serialize_21(streamWriter, instance){
  $writeBoolean(streamWriter, instance.accessOrder);
  serialize_24(streamWriter, instance);
}

function deserialize_22(streamReader, instance){
  deserialize_12(streamReader, instance);
}

function serialize_22(streamWriter, instance){
  serialize_12(streamWriter, instance);
}

function instantiate_20(streamReader){
  return new LinkedHashSet;
}

function deserialize_23(streamReader, instance){
  deserialize_12(streamReader, instance);
}

function serialize_23(streamWriter, instance){
  serialize_12(streamWriter, instance);
}

function instantiate_21(streamReader){
  return new LinkedList;
}

function deserialize_24(streamReader, instance){
  var i, key_0, size_0, value_0;
  size_0 = $readInt(streamReader);
  for (i = 0; i < size_0; ++i) {
    key_0 = $readObject(streamReader);
    value_0 = $readObject(streamReader);
    instance.put(key_0, value_0);
  }
}

function serialize_24(streamWriter, instance){
  var entry, entry$iterator, size_0;
  size_0 = instance.size_1();
  append(streamWriter.encodeBuffer, '' + size_0);
  for (entry$iterator = instance.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 32);
    $writeObject(streamWriter, entry.getKey());
    $writeObject(streamWriter, entry.getValue());
  }
}

function deserialize_25(streamReader, instance){
  deserialize_12(streamReader, instance);
}

function instantiate_22(streamReader){
  return new Stack;
}

function serialize_25(streamWriter, instance){
  serialize_12(streamWriter, instance);
}

function deserialize_26(streamReader, instance){
  deserialize_24(streamReader, instance);
}

function instantiate_23(streamReader){
  return new TreeMap(dynamicCast($readObject(streamReader), 129));
}

function serialize_26(streamWriter, instance){
  $writeObject(streamWriter, $comparator(instance));
  serialize_24(streamWriter, instance);
}

function deserialize_27(streamReader, instance){
  deserialize_12(streamReader, instance);
}

function instantiate_24(streamReader){
  return new TreeSet(dynamicCast($readObject(streamReader), 129));
}

function serialize_27(streamWriter, instance){
  $writeObject(streamWriter, $comparator(instance.map_0));
  serialize_12(streamWriter, instance);
}

function deserialize_28(streamReader, instace){
}

function instantiate_25(streamReader){
  var e;
  try {
    return fromString($getString(streamReader, $readInt(streamReader)));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 22)) {
      e = $e0;
      throw new SerializationException(e.___clazz$ + ':' + e);
    }
     else
      throw unwrap($e0);
  }
}

function serialize_28(streamWriter, instance){
  $writeString(streamWriter, instance.uuidValue);
}

function deserialize_29(streamReader, instance){
  deserialize_12(streamReader, instance);
}

function serialize_29(streamWriter, instance){
  serialize_12(streamWriter, instance);
}

function instantiate_26(streamReader){
  return new Vector;
}

function $setFlags(this$static, flags){
  this$static.flags = flags;
}

function $setVersion(this$static, version){
  this$static.version = version;
}

defineClass(208, 1, {});
_.flags = 0;
_.version = 7;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStream_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStream', 208);
function $readObject(this$static){
  var token, typeSignature, id_0, instance;
  token = $readInt(this$static);
  if (token < 0) {
    return $get_0(this$static.seenArray, -(token + 1));
  }
  typeSignature = $getString(this$static, token);
  if (typeSignature == null) {
    return null;
  }
  return id_0 = ($add_5(this$static.seenArray, null) , this$static.seenArray.array.length) , instance = $instantiate(this$static.serializer, this$static, typeSignature) , $set_1(this$static.seenArray, id_0 - 1, instance) , $deserialize(this$static.serializer, this$static, instance, typeSignature) , instance;
}

defineClass(550, 208, {});
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamReader', 550);
function $addString(this$static, string){
  var index_0, o;
  if (string == null) {
    return 0;
  }
  o = dynamicCast(this$static.stringMap.get_1(string), 44);
  if (o) {
    return o.value_0;
  }
  $add_5(this$static.stringTable, string);
  index_0 = this$static.stringTable.array.length;
  this$static.stringMap.put(string, valueOf_1(index_0));
  return index_0;
}

function $writeBoolean(this$static, fieldValue){
  append(this$static.encodeBuffer, fieldValue?'1':'0');
}

function $writeDouble(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeInt(this$static, fieldValue){
  append(this$static.encodeBuffer, '' + fieldValue);
}

function $writeObject(this$static, instance){
  var objIndex, typeSignature;
  if (instance == null) {
    $writeInt(this$static, $addString(this$static, null));
    return;
  }
  objIndex = $containsKey(this$static.objectMap, instance)?dynamicCast($get_2(this$static.objectMap, instance), 44).value_0:-1;
  if (objIndex >= 0) {
    append(this$static.encodeBuffer, '' + -(objIndex + 1));
    return;
  }
  $put_0(this$static.objectMap, instance, valueOf_1(this$static.objectCount++));
  typeSignature = $getObjectTypeSignature(this$static, instance);
  if (typeSignature == null) {
    throw new SerializationException('could not get type signature for ' + getClass__Ljava_lang_Class___devirtual$(instance));
  }
  $writeInt(this$static, $addString(this$static, typeSignature));
  $serialize(this$static.serializer, this$static, instance, typeSignature);
}

function $writeString(this$static, value_0){
  $writeInt(this$static, $addString(this$static, value_0));
}

defineClass(501, 208, {});
_.objectCount = 0;
var Lcom_google_gwt_user_client_rpc_impl_AbstractSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'AbstractSerializationStreamWriter', 501);
function $getString(this$static, index_0){
  return index_0 > 0?this$static.stringTable[index_0 - 1]:null;
}

function $prepareToRead(this$static, encoded){
  this$static.results = eval(encoded);
  this$static.index_0 = this$static.results.length;
  this$static.seenArray.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  $setVersion(this$static, $readInt(this$static));
  $setFlags(this$static, $readInt(this$static));
  if (this$static.version != 7) {
    throw new IncompatibleRemoteServiceException_0('Expecting version 7 from server, got ' + this$static.version + '.');
  }
  if (((this$static.flags | 3) ^ 3) != 0) {
    throw new IncompatibleRemoteServiceException_0('Got an unknown flag from server: ' + this$static.flags);
  }
  this$static.stringTable = this$static.results[--this$static.index_0];
}

function $readBoolean(this$static){
  return !!this$static.results[--this$static.index_0];
}

function $readDouble(this$static){
  return this$static.results[--this$static.index_0];
}

function $readInt(this$static){
  return this$static.results[--this$static.index_0];
}

function $readLong(this$static){
  var s = this$static.results[--this$static.index_0];
  return longFromBase64(s);
}

function ClientSerializationStreamReader(serializer){
  this.seenArray = new ArrayList;
  this.serializer = serializer;
}

defineClass(551, 550, {}, ClientSerializationStreamReader);
_.index_0 = 0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamReader_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamReader', 551);
function $clinit_ClientSerializationStreamWriter(){
  $clinit_ClientSerializationStreamWriter = emptyMethod;
  regex_0 = getQuotingRegex();
}

function $append(this$static, token){
  append(this$static.encodeBuffer, token);
}

function $getObjectTypeSignature(this$static, o){
  var clazz, e, clazz_0, superclass;
  clazz = getClass__Ljava_lang_Class___devirtual$(o);
  if (instanceOf(o, 7)) {
    e = dynamicCast(o, 7);
    clazz = (clazz_0 = e.___clazz$ , superclass = clazz_0.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?clazz_0:superclass);
  }
  return $getSerializationSignature(this$static.serializer, clazz);
}

function $toString(this$static){
  var buffer;
  buffer = new StringBuilder;
  append(buffer, '' + this$static.version);
  append(buffer, '' + this$static.flags);
  $writeStringTable(this$static, buffer);
  $append_3(buffer, this$static.encodeBuffer.string);
  return buffer.string;
}

function $writeStringTable(this$static, buffer){
  var s, s$iterator, stringTable;
  stringTable = this$static.stringTable;
  append(buffer, '' + stringTable.array.length);
  for (s$iterator = new AbstractList$IteratorImpl(stringTable); s$iterator.i < s$iterator.this$01_0.size_1();) {
    s = (checkCriticalElement(s$iterator.i < s$iterator.this$01_0.size_1()) , dynamicCastToString(s$iterator.this$01_0.get_0(s$iterator.last = s$iterator.i++)));
    append(buffer, quoteString(s));
  }
  return buffer;
}

function ClientSerializationStreamWriter(serializer, moduleBaseURL, serializationPolicyStrongName){
  $clinit_ClientSerializationStreamWriter();
  this.objectMap = new IdentityHashMap;
  this.stringMap = new HashMap;
  this.stringTable = new ArrayList;
  this.serializer = serializer;
  this.moduleBaseURL = moduleBaseURL;
  this.serializationPolicyStrongName = serializationPolicyStrongName;
}

function append(sb, token){
  $clinit_ClientSerializationStreamWriter();
  sb.string += token;
  sb.string += '|';
}

function getQuotingRegex(){
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('android') != -1) {
    return /[\u0000\|\\\u0080-\uFFFF]/g;
  }
   else if (ua.indexOf('chrome/11') != -1) {
    return /[\u0000\|\\\u0300-\uFFFF]/g;
  }
   else if (ua.indexOf('webkit') != -1) {
    return /[\u0000\|\\\u0300-\u03ff\u0590-\u05FF\u0600-\u06ff\u0730-\u074A\u07eb-\u07f3\u0940-\u0963\u0980-\u09ff\u0a00-\u0a7f\u0b00-\u0b7f\u0e00-\u0e7f\u0f00-\u0fff\u1900-\u194f\u1a00-\u1a1f\u1b00-\u1b7f\u1cda-\u1cdc\u1dc0-\u1dff\u1f00-\u1fff\u2000-\u206f\u20d0-\u20ff\u2100-\u214f\u2300-\u23ff\u2a00-\u2aff\u3000-\u303f\uaab2-\uaab4\uD800-\uFFFF]/g;
  }
   else {
    return /[\u0000\|\\\uD800-\uFFFF]/g;
  }
}

function quoteString(str){
  var regex = regex_0;
  var idx = 0;
  var out = '';
  var result;
  while ((result = regex.exec(str)) != null) {
    out += str.substring(idx, result.index);
    idx = result.index + 1;
    var ch_0 = result[0].charCodeAt(0);
    if (ch_0 == 0) {
      out += '\\0';
    }
     else if (ch_0 == 92) {
      out += '\\\\';
    }
     else if (ch_0 == 124) {
      out += '\\!';
    }
     else {
      var hex = ch_0.toString(16);
      out += '\\u0000'.substring(0, 6 - hex.length) + hex;
    }
  }
  return out + str.substring(idx);
}

defineClass(502, 501, {}, ClientSerializationStreamWriter);
_.toString$ = function toString_10(){
  return $toString(this);
}
;
var regex_0;
var Lcom_google_gwt_user_client_rpc_impl_ClientSerializationStreamWriter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'ClientSerializationStreamWriter', 502);
function $createStreamReader(this$static, encoded){
  var clientSerializationStreamReader;
  clientSerializationStreamReader = new ClientSerializationStreamReader(this$static.serializer);
  $prepareToRead(clientSerializationStreamReader, getEncodedInstance(encoded));
  return clientSerializationStreamReader;
}

function $doInvoke(this$static, responseReader, methodName, statsContext, requestData, callback){
  var ex, iex, rb;
  rb = $doPrepareRequestBuilderImpl(this$static, responseReader, methodName, statsContext, requestData, callback);
  try {
    return throwIfNull('callback', rb.callback) , $doSend(rb, rb.requestData, rb.callback);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 85)) {
      ex = $e0;
      iex = new InvocationException_0('Unable to initiate the asynchronous service invocation (' + methodName + ') -- check the network connection', ex);
      callback.onFailure(iex);
    }
     else
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable() && $stats_0($bytesStat(statsContext, methodName, requestData.length, 'requestSent'));
  }
  return null;
}

function $doPrepareRequestBuilderImpl(this$static, responseReader, methodName, statsContext, requestData, callback){
  var responseHandler;
  if (this$static.remoteServiceURL == null) {
    throw new ServiceDefTarget$NoServiceEntryPointSpecifiedException;
  }
  responseHandler = new RequestCallbackAdapter(this$static, methodName, statsContext, callback, responseReader);
  !this$static.rpcRequestBuilder && (this$static.rpcRequestBuilder = new RpcRequestBuilder);
  $create(this$static.rpcRequestBuilder, this$static.remoteServiceURL);
  $setCallback(this$static.rpcRequestBuilder, responseHandler);
  $setContentType(this$static.rpcRequestBuilder);
  $setRequestData(this$static.rpcRequestBuilder, requestData);
  return $finish_0(this$static.rpcRequestBuilder);
}

function $setRpcRequestBuilder(this$static, builder){
  this$static.rpcRequestBuilder = builder;
}

function RemoteServiceProxy(moduleBaseURL, serializer){
  this.moduleBaseURL = moduleBaseURL;
  this.serializer = serializer;
  this.serializationPolicyName = '19506E22A5860B69D4736859C20452B1';
}

function getEncodedInstance(encodedResponse){
  if ($equals_1(encodedResponse.substr(0, 4), '//OK') || $equals_1(encodedResponse.substr(0, 4), '//EX')) {
    return __substr(encodedResponse, 4, encodedResponse.length - 4);
  }
  return encodedResponse;
}

defineClass(467, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy', 467);
function $finish_1(this$static, callback, responseHeader){
  var payload;
  payload = $toString(this$static.streamWriter);
  $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.fullServiceName, 'requestSerialized'));
  return $doInvoke(this$static.this$01, responseHeader, this$static.fullServiceName, this$static.statsContext, payload, callback);
}

function RemoteServiceProxy$ServiceHelper(this$0, methodName){
  this.this$01 = this$0;
  this.fullServiceName = 'TricountComm_Proxy.' + methodName;
  this.methodName = methodName;
  this.statsContext = new RpcStatsContext;
}

defineClass(70, 1, {}, RemoteServiceProxy$ServiceHelper);
var Lcom_google_gwt_user_client_rpc_impl_RemoteServiceProxy$ServiceHelper_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RemoteServiceProxy/ServiceHelper', 70);
function $onError(this$static, exception){
  this$static.callback.onFailure(exception);
}

function $onResponseReceived(this$static, response){
  var caught, e, encodedResponse, result, statusCode;
  result = null;
  caught = null;
  try {
    encodedResponse = response.xmlHttpRequest.responseText;
    statusCode = response.xmlHttpRequest.status;
    $isStatsAvailable() && $stats_0($bytesStat(this$static.statsContext, this$static.methodName, encodedResponse.length, 'responseReceived'));
    statusCode != 200?(caught = new StatusCodeException(statusCode, response.xmlHttpRequest.statusText, encodedResponse)):encodedResponse == null?(caught = new InvocationException('No response payload from ' + this$static.methodName)):$equals_1(encodedResponse.substr(0, 4), '//OK')?(result = this$static.responseReader.read($createStreamReader(this$static.streamFactory, encodedResponse))):$equals_1(encodedResponse.substr(0, 4), '//EX')?(caught = dynamicCast($readObject($createStreamReader(this$static.streamFactory, encodedResponse)), 19)):(caught = new InvocationException(encodedResponse + ' from ' + this$static.methodName));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      e = $e0;
      caught = new IncompatibleRemoteServiceException_1(e);
    }
     else if (instanceOf($e0, 19)) {
      e = $e0;
      caught = e;
    }
     else
      throw unwrap($e0);
  }
   finally {
    $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'responseDeserialized'));
  }
  try {
    !caught?this$static.callback.onSuccess(result):this$static.callback.onFailure(caught);
  }
   finally {
    $isStatsAvailable() && $stats_0($timeStat(this$static.statsContext, this$static.methodName, 'end'));
  }
}

function RequestCallbackAdapter(streamFactory, methodName, statsContext, callback, responseReader){
  this.streamFactory = streamFactory;
  this.callback = callback;
  this.methodName = methodName;
  this.statsContext = statsContext;
  this.responseReader = responseReader;
}

defineClass(484, 1, {}, RequestCallbackAdapter);
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter', 484);
function $clinit_RequestCallbackAdapter$ResponseReader(){
  $clinit_RequestCallbackAdapter$ResponseReader = emptyMethod;
  BOOLEAN = new RequestCallbackAdapter$ResponseReader$1;
  BYTE = new RequestCallbackAdapter$ResponseReader$2;
  CHAR = new RequestCallbackAdapter$ResponseReader$3;
  DOUBLE = new RequestCallbackAdapter$ResponseReader$4;
  FLOAT = new RequestCallbackAdapter$ResponseReader$5;
  INT = new RequestCallbackAdapter$ResponseReader$6;
  LONG = new RequestCallbackAdapter$ResponseReader$7;
  OBJECT = new RequestCallbackAdapter$ResponseReader$8;
  SHORT = new RequestCallbackAdapter$ResponseReader$9;
  STRING = new RequestCallbackAdapter$ResponseReader$10;
  VOID = new RequestCallbackAdapter$ResponseReader$11;
}

function RequestCallbackAdapter$ResponseReader(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_RequestCallbackAdapter$ResponseReader();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, 1), $intern_2, 41, 0, [BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID]);
}

defineClass(41, 7, $intern_34);
var BOOLEAN, BYTE, CHAR, DOUBLE, FLOAT, INT, LONG, OBJECT, SHORT, STRING, VOID;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader', 41, Ljava_lang_Enum_2_classLit, values_10);
function RequestCallbackAdapter$ResponseReader$1(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BOOLEAN', 0);
}

defineClass(485, 41, $intern_34, RequestCallbackAdapter$ResponseReader$1);
_.read = function read(streamReader){
  return $clinit_Boolean() , $readBoolean(streamReader)?TRUE_1:FALSE_1;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$1_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/1', 485, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$10(){
  RequestCallbackAdapter$ResponseReader.call(this, 'STRING', 9);
}

defineClass(494, 41, $intern_34, RequestCallbackAdapter$ResponseReader$10);
_.read = function read_0(streamReader){
  return $getString(streamReader, $readInt(streamReader));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$10_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/10', 494, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$11(){
  RequestCallbackAdapter$ResponseReader.call(this, 'VOID', 10);
}

defineClass(495, 41, $intern_34, RequestCallbackAdapter$ResponseReader$11);
_.read = function read_1(streamReader){
  return null;
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$11_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/11', 495, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$2(){
  RequestCallbackAdapter$ResponseReader.call(this, 'BYTE', 1);
}

defineClass(486, 41, $intern_34, RequestCallbackAdapter$ResponseReader$2);
_.read = function read_2(streamReader){
  return valueOf(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$2_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/2', 486, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$3(){
  RequestCallbackAdapter$ResponseReader.call(this, 'CHAR', 2);
}

defineClass(487, 41, $intern_34, RequestCallbackAdapter$ResponseReader$3);
_.read = function read_3(streamReader){
  return valueOf_0(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$3_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/3', 487, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$4(){
  RequestCallbackAdapter$ResponseReader.call(this, 'DOUBLE', 3);
}

defineClass(488, 41, $intern_34, RequestCallbackAdapter$ResponseReader$4);
_.read = function read_4(streamReader){
  return $clinit_Double() , new Double($readDouble(streamReader));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$4_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/4', 488, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$5(){
  RequestCallbackAdapter$ResponseReader.call(this, 'FLOAT', 4);
}

defineClass(489, 41, $intern_34, RequestCallbackAdapter$ResponseReader$5);
_.read = function read_5(streamReader){
  return new Float(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$5_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/5', 489, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$6(){
  RequestCallbackAdapter$ResponseReader.call(this, 'INT', 5);
}

defineClass(490, 41, $intern_34, RequestCallbackAdapter$ResponseReader$6);
_.read = function read_6(streamReader){
  return valueOf_1($readInt(streamReader));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$6_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/6', 490, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$7(){
  RequestCallbackAdapter$ResponseReader.call(this, 'LONG', 6);
}

defineClass(491, 41, $intern_34, RequestCallbackAdapter$ResponseReader$7);
_.read = function read_7(streamReader){
  return valueOf_2($readLong(streamReader));
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$7_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/7', 491, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$8(){
  RequestCallbackAdapter$ResponseReader.call(this, 'OBJECT', 7);
}

defineClass(492, 41, $intern_34, RequestCallbackAdapter$ResponseReader$8);
_.read = function read_8(streamReader){
  return $readObject(streamReader);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$8_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/8', 492, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function RequestCallbackAdapter$ResponseReader$9(){
  RequestCallbackAdapter$ResponseReader.call(this, 'SHORT', 8);
}

defineClass(493, 41, $intern_34, RequestCallbackAdapter$ResponseReader$9);
_.read = function read_9(streamReader){
  return valueOf_3(streamReader.results[--streamReader.index_0]);
}
;
var Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader$9_2_classLit = createForEnum('com.google.gwt.user.client.rpc.impl', 'RequestCallbackAdapter/ResponseReader/9', 493, Lcom_google_gwt_user_client_rpc_impl_RequestCallbackAdapter$ResponseReader_2_classLit, null);
function $bytesStat(this$static, method, bytes, eventType){
  var stat = this$static.timeStat(method, eventType);
  stat.bytes = bytes;
  return stat;
}

function $isStatsAvailable(){
  return !!$stats;
}

function $stats_0(data_0){
  return $stats(data_0);
}

function $timeStat(this$static, method, eventType){
  return {moduleName:$moduleName, sessionId:$sessionId, subSystem:'rpc', evtGroup:this$static.requestId, method:method, millis:(new Date).getTime(), type:eventType};
}

function RpcStatsContext(){
  RpcStatsContext_0.call(this, requestIdCounter++);
}

function RpcStatsContext_0(requestId){
  this.requestId = requestId;
}

defineClass(207, 1, {}, RpcStatsContext);
_.timeStat = function timeStat(method, eventType){
  return $timeStat(this, method, eventType);
}
;
_.requestId = 0;
var requestIdCounter = 0;
var Lcom_google_gwt_user_client_rpc_impl_RpcStatsContext_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'RpcStatsContext', 207);
function $check(this$static, typeSignature){
  if (!this$static.methodMapNative[typeSignature]) {
    throw new SerializationException(typeSignature);
  }
}

function $deserialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $deserialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function $getSerializationSignature(this$static, clazz){
  return this$static.signatureMapNative[getHashCode(clazz)];
}

function $instantiate(this$static, stream, typeSignature){
  $check(this$static, typeSignature);
  return $instantiate_0(this$static.methodMapNative, stream, typeSignature);
}

function $serialize(this$static, stream, instance, typeSignature){
  $check(this$static, typeSignature);
  $serialize_0(this$static.methodMapNative, stream, instance, typeSignature);
}

function SerializerBase(methodMapNative, signatureMapNative){
  new HashMap;
  this.methodMapNative = methodMapNative;
  this.signatureMapNative = signatureMapNative;
}

defineClass(472, 1, {});
var Lcom_google_gwt_user_client_rpc_impl_SerializerBase_2_classLit = createForClass('com.google.gwt.user.client.rpc.impl', 'SerializerBase', 472);
function $deserialize_0(this$static, stream, instance, signature){
  this$static[signature][1](stream, instance);
}

function $instantiate_0(this$static, stream, signature){
  return this$static[signature][0](stream);
}

function $serialize_0(this$static, stream, instance, signature){
  this$static[signature][2](stream, instance);
}

function $addStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + styleSuffix, true);
}

function $addStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style, true);
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $isVisible(this$static){
  return ($clinit_DOM() , this$static.element).style.display != 'none';
}

function $removeStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + styleSuffix, false);
}

function $removeStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style, false);
}

function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $setElement(this$static, elem){
  $setElement_0(this$static, ($clinit_DOM() , elem));
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  ($clinit_DOM() , this$static.element).style['height'] = height;
}

function $setPixelSize(this$static, width_0, height){
  width_0 >= 0 && this$static.setWidth(width_0 + 'px');
  height >= 0 && this$static.setHeight(height + 'px');
}

function $setStyleName(this$static, style){
  $setClassName(this$static.getStyleElement(), style);
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(this$static.getStyleElement(), style, add_0);
}

function $setStylePrimaryName(this$static, style){
  setStylePrimaryName(this$static.getStyleElement(), style);
}

function $setTitle(this$static, title_0){
  title_0.length == 0?$removeAttribute(($clinit_DOM() , this$static.element), 'title'):$setAttribute(($clinit_DOM() , this$static.element), 'title', title_0);
}

function $setVisible(this$static, visible){
  setVisible(($clinit_DOM() , this$static.element), visible);
}

function $setWidth(this$static, width_0){
  ($clinit_DOM() , this$static.element).style['width'] = width_0;
}

function $sinkBitlessEvent_0(this$static, eventTypeName){
  $clinit_DOM();
  $sinkBitlessEvent(this$static.element, eventTypeName);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = $getClassName(elem);
  spaceIdx = $indexOf_2(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx);
  }
  return fullClassName;
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = (elem.className || '').split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

defineClass(9, 1, {10:1, 9:1});
_.addStyleName = function addStyleName(style){
  $addStyleName(this, style);
}
;
_.getStyleElement = function getStyleElement(){
  return $clinit_DOM() , this.element;
}
;
_.removeStyleName = function removeStyleName(style){
  $removeStyleName(this, style);
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  throw new UnsupportedOperationException;
}
;
_.setHeight = function setHeight(height){
  $setHeight(this, height);
}
;
_.setStyleName = function setStyleName_0(style){
  $setStyleName(this, style);
}
;
_.setStylePrimaryName = function setStylePrimaryName_0(style){
  $setStylePrimaryName(this, style);
}
;
_.setWidth = function setWidth(width_0){
  $setWidth(this, width_0);
}
;
_.toString$ = function toString_11(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 9);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = getTypeInt(type_0.name_0);
  typeInt == -1?$sinkBitlessEvent_0(this$static, type_0.name_0):this$static.sinkEvents(typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_0(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $delegateEvent(target, event_0){
  !!target.handlerManager && $fireEvent(target.handlerManager, event_0);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener_0(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
    fire_0(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      $clinit_DOM();
      setEventListener_0(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_1(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 43)) {
    dynamicCast(this$static.parent_0, 43).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && ($clinit_DOM() , setEventListener_0(this$static.element, null));
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && ($clinit_DOM() , setEventListener_0(this$static.element, this$static));
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

defineClass(6, 9, $intern_35);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent = function fireEvent_1(event_0){
  $fireEvent_0(this, event_0);
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.sinkEvents = function sinkEvents_1(eventBitsToAdd){
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this.element, eventBitsToAdd | (this.element.__eventBits || 0))):(this.eventsToSink |= eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 6);
function $adopt(this$static, child){
  $setParent(child, this$static);
}

function $clear(this$static){
  var it;
  it = this$static.iterator();
  while (it.hasNext()) {
    it.next_0();
    it.remove_0();
  }
}

defineClass(714, 6, $intern_36);
_.clear_0 = function clear_0(){
  $clear(this);
}
;
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 714);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_7(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf_1(this$static.children, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion(this$static, index_0){
  if (index_0 < 0 || index_0 > this$static.children.size_0) {
    throw new IndexOutOfBoundsException;
  }
}

function $doLogicalClear(this$static){
  !this$static.orphanCommand && (this$static.orphanCommand = new ComplexPanel$1);
  try {
    tryCommand(this$static, this$static.orphanCommand);
  }
   finally {
    this$static.children = new WidgetCollection(this$static);
  }
}

function $getWidget(this$static, index_0){
  return $get_1(this$static.children, index_0);
}

function $getWidgetIndex(this$static, child){
  return $indexOf_1(this$static.children, child);
}

function $insert(this$static, child, container, beforeIndex, domInsert){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_3(this$static.children, child, beforeIndex);
  domInsert?insertChild(container, ($clinit_DOM() , child.element), beforeIndex):($clinit_DOM() , $appendChild(container, resolve(child.element)));
  $setParent(child, this$static);
}

function $remove(this$static, index_0){
  return $remove_6(this$static, $get_1(this$static.children, index_0));
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , $getParentElement(elem)), elem);
    $remove_8(this$static.children, w);
  }
  return true;
}

function ComplexPanel(){
  this.children = new WidgetCollection(this);
}

defineClass(159, 714, $intern_36);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove = function remove_0(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 159);
function $add_0(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(321, 159, $intern_36);
_.remove = function remove_1(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 321);
function create_3(){
  return new ClippedImagePrototype;
}

defineClass(742, 1, {});
var Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbstractImagePrototype', 742);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  impl_0 = ($clinit_FocusImpl() , $clinit_FocusImpl() , implWidget);
}

function $isEnabled(this$static){
  return !($clinit_DOM() , this$static.element)['disabled'];
}

function $onAttach_0(this$static){
  var tabIndex;
  $onAttach(this$static);
  tabIndex = this$static.getTabIndex();
  -1 == tabIndex && this$static.setTabIndex(0);
}

function $setEnabled(this$static, enabled){
  ($clinit_DOM() , this$static.element)['disabled'] = !enabled;
}

function $setFocus(this$static){
  impl_0.focus_0(($clinit_DOM() , this$static.element));
}

function FocusWidget(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(174, 6, $intern_35);
_.addClickHandler = function addClickHandler(handler){
  return $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}
;
_.addKeyDownHandler = function addKeyDownHandler(handler){
  return $addDomHandler(this, handler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
}
;
_.addKeyPressHandler = function addKeyPressHandler(handler){
  return $addDomHandler(this, handler, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_4));
}
;
_.addKeyUpHandler = function addKeyUpHandler(handler){
  return $addDomHandler(this, handler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
}
;
_.getTabIndex = function getTabIndex(){
  return $getTabIndex(($clinit_DOM() , this.element));
}
;
_.onAttach = function onAttach_0(){
  $onAttach_0(this);
}
;
_.setTabIndex = function setTabIndex(index_0){
  $setTabIndex(($clinit_DOM() , this.element), index_0);
}
;
var impl_0;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 174);
function $setHref_0(this$static, href_0){
  $setHref(($clinit_DOM() , this$static.element), href_0);
}

function $setTarget_0(this$static){
  $setTarget(($clinit_DOM() , this$static.element), '_blank');
}

function $setText(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function Anchor_0(){
  $clinit_FocusWidget();
  $setElement(this, $doc.createElement('a'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Anchor');
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

function Anchor_1(text_0){
  $clinit_FocusWidget();
  Anchor_0.call(this);
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
  $setHref(($clinit_DOM() , this.element), 'javascript:;');
}

defineClass(29, 174, {13:1, 11:1, 12:1, 29:1, 10:1, 14:1, 9:1, 6:1}, Anchor_0, Anchor_1);
_.getTabIndex = function getTabIndex_0(){
  return $getTabIndex(($clinit_DOM() , this.element));
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  $setTabIndex(($clinit_DOM() , this.element), index_0);
}
;
var Lcom_google_gwt_user_client_ui_Anchor_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Anchor', 29);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 6);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 19)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_12(caught, e);
      }
       else
        throw unwrap($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(274, 193, $intern_13, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 274);
function AttachDetachException$1(){
}

defineClass(275, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_5(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 275);
function AttachDetachException$2(){
}

defineClass(276, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_6(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 276);
function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(175, 174, $intern_35);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 175);
function Button(html){
  var e;
  $clinit_FocusWidget();
  ButtonBase.call(this, (e = $doc.createElement('BUTTON') , e.setAttribute('type', 'button') , e));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Button');
  $setInnerHTML(this.element, html);
}

defineClass(216, 175, $intern_35, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 216);
function $getWidgetTd(this$static, w){
  if (w.parent_0 != this$static) {
    return null;
  }
  return $clinit_DOM() , $clinit_DOM() , $getParentElement(w.element);
}

function $setCellHeight(this$static, w, height){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyString(td, 'height', height);
}

function $setCellHorizontalAlignment(td, align_0){
  $setPropertyString(($clinit_DOM() , td), 'align', align_0.textAlignString);
}

function $setCellHorizontalAlignment_0(this$static, w, align_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyString(($clinit_DOM() , td), 'align', align_0.textAlignString);
}

function $setCellVerticalAlignment(td, align_0){
  $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellVerticalAlignment_0(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setCellVerticalAlignment_1(this$static, w, align_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setCellVerticalAlignment_0(($clinit_DOM() , td), align_0);
}

function $setCellWidth(this$static, w, width_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyString(td, 'width', width_0);
}

function $setSpacing(this$static, spacing){
  $setPropertyInt(this$static.table, 'cellSpacing', spacing);
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = ($clinit_DOM() , $doc.createElement('table'));
  this.body_0 = $doc.createElement('tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(192, 159, $intern_36);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 192);
function $getValue(this$static){
  return this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE_1:FALSE_1):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE_1:FALSE_1);
}

function $setValue(this$static, value_0){
  var oldValue;
  !value_0 && (value_0 = ($clinit_Boolean() , FALSE_1));
  oldValue = this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE_1:FALSE_1):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE_1:FALSE_1);
  $setChecked(this$static.inputElem, value_0.value_0);
  $setDefaultChecked(this$static.inputElem, value_0.value_0);
  if (!!oldValue && oldValue.value_0 == value_0.value_0) {
    return;
  }
}

function CheckBox(elem){
  var uid;
  ButtonBase.call(this, ($clinit_DOM() , $doc.createElement('span')));
  this.inputElem = elem;
  this.labelElem = $doc.createElement('label');
  $appendChild(this.element, this.inputElem);
  $appendChild(this.element, this.labelElem);
  uid = $createUniqueId($doc);
  $setPropertyString(this.inputElem, 'id', uid);
  $setHtmlFor(this.labelElem, uid);
  this.directionalTextHelper = new DirectionalTextHelper(this.labelElem);
  !!this.inputElem && $setTabIndex(this.inputElem, 0);
}

function CheckBox_0(label_0){
  var e;
  $clinit_FocusWidget();
  CheckBox.call(this, ($clinit_DOM() , e = $doc.createElement('INPUT') , e.type = 'checkbox' , e.value = 'on' , e));
  $setClassName(this.element, 'gwt-CheckBox');
  $setTextOrHtml(this.directionalTextHelper, label_0, false);
}

defineClass(151, 175, $intern_35, CheckBox_0);
_.getTabIndex = function getTabIndex_1(){
  return $getTabIndex(this.inputElem);
}
;
_.onLoad = function onLoad_0(){
  $clinit_DOM();
  setEventListener_0(this.inputElem, this);
}
;
_.onUnload = function onUnload_0(){
  $clinit_DOM();
  setEventListener_0(this.inputElem, null);
  $setValue(this, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_1:FALSE_1):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_1:FALSE_1));
}
;
_.setTabIndex = function setTabIndex_1(index_0){
  !!this.inputElem && $setTabIndex(this.inputElem, index_0);
}
;
_.sinkEvents = function sinkEvents_2(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents_0(this.inputElem, eventBitsToAdd | getEventsSunk(this.inputElem)):this.eventsToSink == -1?sinkEvents(($clinit_DOM() , this.element), eventBitsToAdd | (this.element.__eventBits || 0)):(this.eventsToSink |= eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox', 151);
function ComplexPanel$1(){
}

defineClass(273, 1, {}, ComplexPanel$1);
_.execute_2 = function execute_7(w){
  $setParent(w, null);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel/1', 273);
function $checkInit(this$static){
  if (!this$static.widget_0) {
    throw new IllegalStateException_0('initWidget() is not called yet');
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget_0) {
    throw new IllegalStateException_0('Composite.initWidget() may only be called once.');
  }
  if (!widget) {
    throw new NullPointerException_0('widget cannot be null');
  }
  instanceOf(widget, 21) && dynamicCast(widget, 21);
  $removeFromParent(widget);
  elem = ($clinit_DOM() , widget.element);
  $setElement_0(this$static, elem);
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget_0 = widget;
  $setParent(widget, this$static);
}

function $isAttached(this$static){
  if (this$static.widget_0) {
    return this$static.widget_0.isAttached();
  }
  return false;
}

defineClass(708, 6, $intern_37);
_.isAttached = function isAttached_0(){
  return $isAttached(this);
}
;
_.onAttach = function onAttach_1(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    this.widget_0.sinkEvents(this.eventsToSink);
    this.eventsToSink = -1;
  }
  this.widget_0.onAttach();
  $clinit_DOM();
  setEventListener_0(this.element, this);
  this.onLoad();
  fire_0(this, true);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  this.widget_0.onBrowserEvent(event_0);
}
;
_.onDetach = function onDetach_0(){
  try {
    fire_0(this, false);
  }
   finally {
    this.widget_0.onDetach();
  }
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement_0(this, ($clinit_DOM() , this.widget_0.resolvePotentialElement()));
  return this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 708);
function $cleanupCaptureState(this$static){
  if (this$static.isCapturing || this$static.isFocusing) {
    releaseCapture(($clinit_DOM() , this$static.element));
    this$static.isCapturing = false;
    this$static.isFocusing = false;
    !this$static.curFace && $setCurrentFace_0(this$static, this$static.up);
    (1 & this$static.curFace.val$faceID5) > 0 && $toggleDown(this$static);
  }
}

function $getFaceFromID(this$static, id_0){
  switch (id_0) {
    case 1:
      return !this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down;
    case 0:
      return this$static.up;
    case 3:
      return !this$static.downHovering && $setDownHoveringFace(this$static, new CustomButton$2(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-hovering', 3)) , this$static.downHovering;
    case 2:
      return !this$static.upHovering && $setUpHoveringFace(this$static, new CustomButton$2(this$static, this$static.up, 'up-hovering', 2)) , this$static.upHovering;
    case 4:
      return !this$static.upDisabled && $setUpDisabledFace(this$static, new CustomButton$2(this$static, this$static.up, 'up-disabled', 4)) , this$static.upDisabled;
    case 5:
      return !this$static.downDisabled && $setDownDisabledFace(this$static, new CustomButton$2(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-disabled', 5)) , this$static.downDisabled;
    default:throw new IllegalStateException_0(id_0 + ' is not a known face id.');
  }
}

function $setCurrentFace(this$static, faceID){
  var newFace;
  newFace = $getFaceFromID(this$static, faceID);
  $setCurrentFace_0(this$static, newFace);
}

function $setCurrentFace_0(this$static, newFace){
  var pressed;
  if (this$static.curFace != newFace) {
    !!this$static.curFace && $removeStyleDependentName(this$static, this$static.curFace.val$name4);
    this$static.curFace = newFace;
    $setCurrentFaceElement(this$static, $getFace(newFace));
    $addStyleDependentName(this$static, this$static.curFace.val$name4);
    !($clinit_DOM() , this$static.element)['disabled'] && (pressed = (newFace.val$faceID5 & 1) == 1 , $clinit_Roles() , $setAriaPressedState(this$static.element, ($clinit_PressedValue() , pressed?TRUE:FALSE)) , undefined);
  }
}

function $setCurrentFaceElement(this$static, newFaceElement){
  if (this$static.curFaceElement != newFaceElement) {
    !!this$static.curFaceElement && $removeChild(($clinit_DOM() , this$static.element), this$static.curFaceElement);
    this$static.curFaceElement = newFaceElement;
    $clinit_DOM();
    $appendChild(this$static.element, resolve(this$static.curFaceElement));
  }
}

function $setDownDisabledFace(this$static, downDisabled){
  this$static.downDisabled = downDisabled;
}

function $setDownFace(this$static, down){
  this$static.down = down;
}

function $setDownHoveringFace(this$static, downHovering){
  this$static.downHovering = downHovering;
}

function $setUpDisabledFace(this$static, upDisabled){
  this$static.upDisabled = upDisabled;
}

function $setUpFace(this$static, up){
  this$static.up = up;
}

function $setUpHoveringFace(this$static, upHovering){
  this$static.upHovering = upHovering;
}

function $toggleDown(this$static){
  var newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 1);
  $setCurrentFace(this$static, newFaceID);
}

function $toggleHover(this$static){
  var newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 2);
  newFaceID &= -5;
  $setCurrentFace(this$static, newFaceID);
}

defineClass(673, 175, $intern_35);
_.getTabIndex = function getTabIndex_2(){
  return $getTabIndex(($clinit_FocusPanel() , $clinit_DOM() , this.element));
}
;
_.onAttach = function onAttach_2(){
  !this.curFace && $setCurrentFace_0(this, this.up);
  $onAttach_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var keyCode, to, type_0;
  if (($clinit_DOM() , this.element)['disabled']) {
    return;
  }
  type_0 = $eventGetTypeInt(event_0.type);
  switch (type_0) {
    case 1:
      if (!this.allowClick) {
        $eventStopPropagation(event_0);
        return;
      }

      break;
    case 4:
      if ($eventGetButton(event_0) == 1) {
        $focus(($clinit_FocusPanel() , impl_1 , this.element));
        !this.curFace && $setCurrentFace_0(this, this.up);
        (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this);
        setCapture(this.element);
        this.isCapturing = true;
        $eventPreventDefault(event_0);
      }

      break;
    case 8:
      if (this.isCapturing) {
        this.isCapturing = false;
        releaseCapture(this.element);
        (2 & (!this.curFace && $setCurrentFace_0(this, this.up) , this.curFace).val$faceID5) > 0 && $eventGetButton(event_0) == 1 && $onClick(this);
      }

      break;
    case 64:
      this.isCapturing && $eventPreventDefault(event_0);
      break;
    case 32:
      to = $eventGetToElement(event_0);
      if ($isOrHasChild(this.element, $eventGetTarget(event_0)) && (!to || !$isOrHasChild(this.element, to))) {
        this.isCapturing && (!this.curFace && $setCurrentFace_0(this, this.up) , (1 & this.curFace.val$faceID5) > 0 && $toggleDown(this));
        !this.curFace && $setCurrentFace_0(this, this.up);
        (2 & this.curFace.val$faceID5) > 0 && $toggleHover(this);
      }

      break;
    case 16:
      if ($isOrHasChild(this.element, $eventGetTarget(event_0))) {
        !this.curFace && $setCurrentFace_0(this, this.up);
        (2 & this.curFace.val$faceID5) <= 0 && $toggleHover(this);
        this.isCapturing && (!this.curFace && $setCurrentFace_0(this, this.up) , (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this));
      }

      break;
    case 4096:
      if (this.isFocusing) {
        this.isFocusing = false;
        !this.curFace && $setCurrentFace_0(this, this.up);
        (1 & this.curFace.val$faceID5) > 0 && $toggleDown(this);
      }

      break;
    case 8192:
      if (this.isCapturing) {
        this.isCapturing = false;
        !this.curFace && $setCurrentFace_0(this, this.up);
        (1 & this.curFace.val$faceID5) > 0 && $toggleDown(this);
      }

  }
  $onBrowserEvent(this, event_0);
  if (($eventGetTypeInt(event_0.type) & 896) != 0) {
    keyCode = $eventGetKeyCode(event_0) & $intern_12;
    switch (type_0) {
      case 128:
        if (keyCode == 32) {
          this.isFocusing = true;
          !this.curFace && $setCurrentFace_0(this, this.up);
          (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this);
        }

        break;
      case 512:
        if (this.isFocusing && keyCode == 32) {
          this.isFocusing = false;
          $onClick(this);
        }

        break;
      case 256:
        if (keyCode == 10 || keyCode == 13) {
          !this.curFace && $setCurrentFace_0(this, this.up);
          (1 & this.curFace.val$faceID5) <= 0 && $toggleDown(this);
          $onClick(this);
        }

    }
  }
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
  $cleanupCaptureState(this);
  !this.curFace && $setCurrentFace_0(this, this.up);
  (2 & this.curFace.val$faceID5) > 0 && $toggleHover(this);
}
;
_.setTabIndex = function setTabIndex_2(index_0){
  $setTabIndex(($clinit_FocusPanel() , $clinit_DOM() , this.element), index_0);
}
;
_.allowClick = false;
_.isCapturing = false;
_.isFocusing = false;
var Lcom_google_gwt_user_client_ui_CustomButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton', 673);
function $getFace(this$static){
  if (!this$static.face_0) {
    if (!this$static.delegateTo) {
      this$static.face_0 = ($clinit_DOM() , $doc.createElement('div'));
      return this$static.face_0;
    }
     else {
      return $getFace(this$static.delegateTo);
    }
  }
   else {
    return this$static.face_0;
  }
}

function $setHTML(this$static, html){
  this$static.face_0 = ($clinit_DOM() , $doc.createElement('div'));
  setStyleName(this$static.face_0, 'html-face', true);
  $setInnerHTML(this$static.face_0, html);
  !!this$static.this$01.curFace && $getFace(this$static.this$01.curFace) == $getFace(this$static) && $setCurrentFaceElement(this$static.this$01, this$static.face_0);
}

defineClass(675, 1, {});
_.toString$ = function toString_12(){
  return this.val$name4;
}
;
var Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton/Face', 675);
function CustomButton$2(this$0, $anonymous0, val$name, val$faceID){
  this.val$name4 = val$name;
  this.val$faceID5 = val$faceID;
  this.this$01 = this$0;
  this.delegateTo = $anonymous0;
}

defineClass(94, 675, {}, CustomButton$2);
_.val$faceID5 = 0;
var Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton/2', 94);
function $add_1(this$static, w){
  if (this$static.getWidget()) {
    throw new IllegalStateException_0('SimplePanel can only contain one child widget');
  }
  this$static.setWidget(w);
}

function $remove_2(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), ($clinit_DOM() , w.element));
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    $clinit_DOM();
    $appendChild(this$static.getContainerElement(), resolve($getElement(this$static.widget)));
    $setParent(w, this$static);
  }
}

function SimplePanel(){
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('div')));
}

function SimplePanel_0(elem){
  $setElement_0(this, ($clinit_DOM() , elem));
}

defineClass(42, 714, $intern_36, SimplePanel, SimplePanel_0);
_.getContainerElement = function getContainerElement(){
  return $clinit_DOM() , this.element;
}
;
_.getWidget = function getWidget(){
  return this.widget;
}
;
_.iterator = function iterator_1(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_2(w){
  return $remove_2(this, w);
}
;
_.setWidget = function setWidget(w){
  $setWidget(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 42);
function $addAutoHidePartner(this$static, partner){
  !this$static.autoHidePartners && (this$static.autoHidePartners = new ArrayList);
  $add_5(this$static.autoHidePartners, partner);
}

function $eventTargetsPartner(this$static, event_0){
  var elem, elem$iterator, target;
  if (!this$static.autoHidePartners) {
    return false;
  }
  target = $eventGetTarget(event_0);
  if (is_0(target)) {
    for (elem$iterator = new AbstractList$IteratorImpl(this$static.autoHidePartners); elem$iterator.i < elem$iterator.this$01_0.size_1();) {
      elem = (checkCriticalElement(elem$iterator.i < elem$iterator.this$01_0.size_1()) , dynamicCastJso(elem$iterator.this$01_0.get_0(elem$iterator.last = elem$iterator.i++)));
      if (elem.contains(target)) {
        return true;
      }
    }
  }
  return false;
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = $eventGetTarget(event_0);
  if (is_0(target)) {
    return $isOrHasChild(($clinit_DOM() , this$static.element), target);
  }
  return false;
}

function $getOffsetHeight(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetHeight');
}

function $getOffsetWidth(this$static){
  return $getPropertyInt(($clinit_DOM() , this$static.element), 'offsetWidth');
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_2(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth(this$static.desiredWidth);
  }
}

function $position(this$static, relativeObject, offsetWidth, offsetHeight){
  var distanceFromWindowLeft, distanceFromWindowTop, distanceToWindowBottom, distanceToWindowRight, left, offsetWidthDiff, textBoxOffsetWidth, top_0, windowBottom, windowLeft, windowRight, windowTop;
  textBoxOffsetWidth = $getPropertyInt(($clinit_DOM() , relativeObject.element), 'offsetWidth');
  offsetWidthDiff = offsetWidth - textBoxOffsetWidth;
  $clinit_LocaleInfo();
  left = $getAbsoluteLeft(relativeObject.element);
  if (offsetWidthDiff > 0) {
    windowRight = $getClientWidth($doc) + $getScrollLeft($doc);
    windowLeft = $getScrollLeft($doc);
    distanceToWindowRight = windowRight - left;
    distanceFromWindowLeft = left - windowLeft;
    distanceToWindowRight < offsetWidth && distanceFromWindowLeft >= offsetWidthDiff && (left -= offsetWidthDiff);
  }
  top_0 = $getAbsoluteTop(relativeObject.element);
  windowTop = $getScrollTop($doc);
  windowBottom = $getScrollTop($doc) + $getClientHeight($doc);
  distanceFromWindowTop = top_0 - windowTop;
  distanceToWindowBottom = windowBottom - (top_0 + $getPropertyInt(relativeObject.element, 'offsetHeight'));
  distanceToWindowBottom < offsetHeight && distanceFromWindowTop >= offsetHeight?(top_0 -= offsetHeight):(top_0 += $getPropertyInt(relativeObject.element, 'offsetHeight'));
  $setPopupPosition(this$static, left, top_0);
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent) || $eventTargetsPartner(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type_0 = ($clinit_DOM() , $eventGetTypeInt(nativeEvent.type));
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        $eventGetKeyCode(nativeEvent) & $intern_12;
        ($eventGetShiftKey(nativeEvent)?1:0) | ($eventGetMetaKey(nativeEvent)?8:0) | ($eventGetCtrlKey(nativeEvent)?2:0) | ($eventGetAltKey(nativeEvent)?4:0);
        return;
      }

    case 4:
    case $intern_30:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        this$static.hide(true);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case $intern_23:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = $eventGetTarget(nativeEvent);
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $removeAutoHidePartner(this$static, partner){
  !!this$static.autoHidePartners && $remove_5(this$static.autoHidePartners, partner);
}

function $setAnimationType(this$static, type_0){
  this$static.animType = type_0?type_0:($clinit_PopupPanel$AnimationType() , CENTER_0);
}

function $setHeight_0(this$static, height){
  this$static.desiredHeight = height;
  $maybeUpdateSize(this$static);
  height.length == 0 && (this$static.desiredHeight = null);
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= 0;
  top_0 -= 0;
  elem = ($clinit_DOM() , this$static.element);
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setPopupPositionAndShow(this$static, callback){
  ($clinit_DOM() , this$static.element).style['visibility'] = 'hidden';
  this$static.show();
  $setPosition_0(callback, $getPropertyInt(this$static.element, 'offsetWidth'), $getPropertyInt(this$static.element, 'offsetHeight'));
  this$static.element.style['visibility'] = 'visible';
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $setWidth_0(this$static, width_0){
  this$static.desiredWidth = width_0;
  $maybeUpdateSize(this$static);
  width_0.length == 0 && (this$static.desiredWidth = null);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else
    this$static.attached && $removeFromParent(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $showRelativeTo(this$static, target){
  $setPopupPositionAndShow(this$static, new PopupPanel$2(this$static, target));
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4(this$static));
  }
}

function PopupPanel(autoHide){
  SimplePanel.call(this);
  this.glassResizer = new PopupPanel$1;
  this.animType = ($clinit_PopupPanel$AnimationType() , CENTER_0);
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(($clinit_DOM() , this.element), $doc.createElement('div'));
  $setPopupPosition(this, 0, 0);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-PopupPanel');
  $setClassName($getFirstChildElement(this.element), 'popupContent');
  this.autoHide = autoHide;
  this.autoHideOnHistoryEvents = autoHide;
}

defineClass(126, 42, $intern_36, PopupPanel);
_.getContainerElement = function getContainerElement_0(){
  return $clinit_DOM() , $getFirstChildElement(this.element);
}
;
_.getStyleElement = function getStyleElement_0(){
  return $getParentElement(($clinit_DOM() , $getFirstChildElement(this.element)));
}
;
_.hide = function hide(autoClosed){
  $hide(this);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.onUnload = function onUnload_1(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight = function setHeight_0(height){
  $setHeight_0(this, height);
}
;
_.setWidget = function setWidget_0(w){
  $setWidget_0(this, w);
}
;
_.setWidth = function setWidth_0(width_0){
  $setWidth_0(this, width_0);
}
;
_.show = function show(){
  $show(this);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel', 126);
function $setWidget_1(this$static, w){
  $setWidget(this$static.decPanel, w);
  $maybeUpdateSize(this$static);
}

function DecoratedPopupPanel(autoHide, modal, prefix){
  var rowStyles;
  PopupPanel.call(this, autoHide);
  this.modal = modal;
  rowStyles = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, [prefix + 'Top', prefix + 'Middle', prefix + 'Bottom']);
  this.decPanel = new DecoratorPanel(rowStyles);
  $setStyleName(this.decPanel, '');
  setStylePrimaryName($getParentElement(($clinit_DOM() , $getFirstChildElement(this.element))), 'gwt-DecoratedPopupPanel');
  $setWidget_0(this, this.decPanel);
  setStyleName($getFirstChildElement(this.element), 'popupContent', false);
  setStyleName(this.decPanel.containerElem, prefix + 'Content', true);
}

defineClass(211, 126, $intern_36, DecoratedPopupPanel);
_.clear_0 = function clear_1(){
  $clear(this.decPanel);
}
;
_.doAttachChildren = function doAttachChildren_1(){
  $onAttach(this.decPanel);
}
;
_.doDetachChildren = function doDetachChildren_1(){
  $onDetach(this.decPanel);
}
;
_.getWidget = function getWidget_0(){
  return this.decPanel.widget;
}
;
_.iterator = function iterator_2(){
  return new SimplePanel$1(this.decPanel);
}
;
_.remove = function remove_3(w){
  return $remove_2(this.decPanel, w);
}
;
_.setWidget = function setWidget_1(w){
  $setWidget_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratedPopupPanel', 211);
function $getCellElement(this$static){
  var td, tr;
  tr = ($clinit_DOM() , $getChild(this$static.tbody, 0));
  td = $getChild(tr, 1);
  return null , $getFirstChildElement(td);
}

function DecoratorPanel(rowStyles){
  var i, row, table, trElem;
  SimplePanel_0.call(this, ($clinit_DOM() , $doc.createElement('table')));
  table = this.element;
  this.tbody = $doc.createElement('tbody');
  $appendChild(table, resolve(this.tbody));
  $setPropertyInt(table, 'cellSpacing', 0);
  $setPropertyInt(table, 'cellPadding', 0);
  for (i = 0; i < rowStyles.length; i++) {
    row = (trElem = $doc.createElement('tr') , $setClassName(trElem, rowStyles[i]) , $clinit_LocaleInfo() , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Left'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Center'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Right'))) , trElem);
    $appendChild(this.tbody, resolve(row));
    i == 1 && (this.containerElem = $getFirstChildElement($getChild(row, 1)));
  }
  $setClassName(this.element, 'gwt-DecoratorPanel');
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = ($clinit_DOM() , $doc.createElement('td'));
  inner = $doc.createElement('div');
  $appendChild(tdElem, resolve(inner));
  $setClassName(tdElem, styleName);
  $setClassName(inner, styleName + 'Inner');
  return tdElem;
}

defineClass(541, 42, $intern_36, DecoratorPanel);
_.getContainerElement = function getContainerElement_1(){
  return $clinit_DOM() , this.containerElem;
}
;
var Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratorPanel', 541);
function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, $getX(event_0), $getY(event_0));
}

function $continueDragging(this$static, event_0){
  $onMouseMove(this$static, $getX(event_0), $getY(event_0));
}

function $endDragging(this$static, event_0){
  $onMouseUp(this$static, ($getX(event_0) , $getY(event_0)));
}

function $isCaptionEvent(this$static, event_0){
  var target;
  target = $eventGetTarget(event_0);
  if (is_0(target)) {
    return $isOrHasChild($getParentElement(($clinit_DOM() , $getCellElement(this$static.decPanel))), target);
  }
  return false;
}

function $onMouseDown(this$static, x_0, y_0){
  $clinit_DOM();
  if (!sCaptureElem) {
    this$static.dragging = true;
    setCapture(this$static.element);
    this$static.dragStartX = x_0;
    this$static.dragStartY = y_0;
  }
}

function $onMouseMove(this$static, x_0, y_0){
  var absX, absY;
  if (this$static.dragging) {
    absX = x_0 + $getAbsoluteLeft(($clinit_DOM() , this$static.element));
    absY = y_0 + $getAbsoluteTop(this$static.element);
    if (absX < this$static.clientLeft || absX >= this$static.windowWidth || absY < this$static.clientTop) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(($clinit_DOM() , this$static.element));
}

function DialogBox(captionWidget){
  var mouseHandler, td;
  DecoratedPopupPanel.call(this, false, true, 'dialog');
  $removeFromParent(captionWidget);
  this.caption = captionWidget;
  td = ($clinit_DOM() , $getCellElement(this.decPanel));
  $appendChild(td, resolve($getElement(this.caption)));
  $adopt(this, this.caption);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-DialogBox');
  this.windowWidth = $getClientWidth($doc);
  this.clientLeft = 0;
  this.clientTop = 0;
  mouseHandler = new DialogBox$MouseHandler(this);
  $addDomHandler(this, mouseHandler, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_6));
  $addDomHandler(this, mouseHandler, ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_10));
  $addDomHandler(this, mouseHandler, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_7));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_9));
  $addDomHandler(this, mouseHandler, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_8));
}

defineClass(212, 211, $intern_38);
_.doAttachChildren = function doAttachChildren_2(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    $onAttach(this.caption);
  }
}
;
_.doDetachChildren = function doDetachChildren_2(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}
;
_.hide = function hide_0(autoClosed){
  if (this.resizeHandlerRegistration) {
    $removeHandler(this.resizeHandlerRegistration.real);
    this.resizeHandlerRegistration = null;
  }
  $hide(this);
}
;
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onMouseDown_0 = function onMouseDown(sender, x_0, y_0){
  $onMouseDown(this, x_0, y_0);
}
;
_.onMouseEnter = function onMouseEnter(sender){
}
;
_.onMouseLeave = function onMouseLeave(sender){
}
;
_.onMouseMove_0 = function onMouseMove(sender, x_0, y_0){
  $onMouseMove(this, x_0, y_0);
}
;
_.onMouseUp_0 = function onMouseUp(sender, x_0, y_0){
  $onMouseUp(this);
}
;
_.onPreviewNativeEvent = function onPreviewNativeEvent_1(event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $getTypeInt(event_0.nativeEvent) == 4 && $isCaptionEvent(this, nativeEvent) && $eventPreventDefault(nativeEvent);
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
}
;
_.show = function show_0(){
  !this.resizeHandlerRegistration && (this.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(this)));
  $show(this);
}
;
_.clientLeft = 0;
_.clientTop = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.windowWidth = 0;
var Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox', 212);
function DialogBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(213, 1, $intern_27, DialogBox$1);
_.onResize = function onResize_1(event_0){
  this.this$01.windowWidth = event_0.width_0;
}
;
var Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/1', 213);
function $setWordWrap(this$static){
  ($clinit_DOM() , this$static.element).style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal');
}

function LabelBase(element){
  $setElement_0(this, ($clinit_DOM() , element));
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(147, 6, $intern_35);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 147);
function $setText_0(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0, false);
}

function Label(){
  LabelBase.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Label');
}

function Label_0(element){
  LabelBase.call(this, element, $equalsIgnoreCase('span', element.tagName));
}

function Label_1(text_0){
  Label.call(this);
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
}

defineClass(15, 147, $intern_35, Label, Label_1);
_.addClickHandler = function addClickHandler_0(handler){
  return $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}
;
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 15);
function $setHTML_0(this$static, html){
  $setTextOrHtml(this$static.directionalTextHelper, html, true);
}

function HTML(){
  Label_0.call(this, $doc.createElement('div'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-HTML');
}

function HTML_0(html){
  HTML.call(this);
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

function HTML_1(){
  HTML_0.call(this, '&nbsp;');
  ($clinit_DOM() , this.element).style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal');
}

defineClass(50, 15, $intern_35, HTML, HTML_0, HTML_1);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 50);
function DialogBox$CaptionImpl(){
  HTML.call(this);
  $setClassName(($clinit_DOM() , this.element), 'Caption');
}

defineClass(518, 50, $intern_35, DialogBox$CaptionImpl);
var Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/CaptionImpl', 518);
function DialogBox$MouseHandler(this$0){
  this.this$01 = this$0;
}

defineClass(519, 1, $intern_39, DialogBox$MouseHandler);
_.onMouseDown = function onMouseDown_0(event_0){
  $beginDragging(this.this$01, event_0);
}
;
_.onMouseMove = function onMouseMove_0(event_0){
  $continueDragging(this.this$01, event_0);
}
;
_.onMouseOut = function onMouseOut(event_0){
}
;
_.onMouseOver = function onMouseOver(event_0){
}
;
_.onMouseUp = function onMouseUp_0(event_0){
  $endDragging(this.this$01, event_0);
}
;
var Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DialogBox/MouseHandler', 519);
function $getTextOrHtml(this$static){
  var elem;
  elem = this$static.isSpanWrapped?$getFirstChildElement(this$static.element):this$static.element;
  return elem.innerHTML;
}

function $setTextOrHtml(this$static, content_0, isHtml){
  this$static.isSpanWrapped = false;
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.isSpanWrapped = false;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(148, 1, {}, DirectionalTextHelper);
_.isSpanWrapped = false;
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 148);
function $addCells(tbody, row, num){
  var i, rowElem, tdElement;
  rowElem = tbody.rows[row];
  for (i = 0; i < num; i++) {
    tdElement = $doc.createElement('td');
    rowElem.appendChild(tdElement);
  }
}

function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = this$static.numColumns;
  if (cellSize <= column) {
    throw new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.getRowCount();
  if (row >= rowSize || row < 0) {
    throw new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $cleanCell(this$static, row, column, clearInnerHTML){
  var td;
  td = $getRawElement(this$static.cellFormatter, row, column);
  $internalClearCell(this$static, ($clinit_DOM() , td), clearInnerHTML);
  return td;
}

function $clear_0(this$static){
  var col, row;
  for (row = 0; row < this$static.getRowCount(); ++row) {
    for (col = 0; col < this$static.getCellCount(row); ++col) {
      $cleanCell(this$static, row, col, false);
    }
  }
}

function $getDOMCellCount(tableBody, row){
  var rowElement;
  rowElement = tableBody.rows[row];
  return rowElement.cells.length;
}

function $getEventTargetCell(this$static, event_0){
  var body_0, td, tr;
  td = ($clinit_DOM() , $eventGetTarget(event_0));
  for (; td; td = $getParentElement(td)) {
    if ($equalsIgnoreCase($getPropertyString(td, 'tagName'), 'td')) {
      tr = $getParentElement(td);
      body_0 = $getParentElement(tr);
      if (body_0 == this$static.bodyElem) {
        return td;
      }
    }
    if (td == this$static.bodyElem) {
      return null;
    }
  }
  return null;
}

function $insertRow(this$static, beforeRow){
  var tr;
  beforeRow != ($clinit_DOM() , this$static.bodyElem).rows.length && $checkRowBounds(this$static, beforeRow);
  tr = $doc.createElement('tr');
  insertChild(this$static.bodyElem, tr, beforeRow);
  return beforeRow;
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = ($clinit_DOM() , $getFirstChildElement(td));
  widget = null;
  !!maybeChild && (widget = dynamicCast($get(this$static.widgetMap, maybeChild), 6));
  if (widget) {
    $remove_3(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && $setInnerHTML(td, '');
    return false;
  }
}

function $remove_3(this$static, widget){
  var elem;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = ($clinit_DOM() , widget.element);
    $removeChild($getParentElement(elem), elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount;
  columnCount = this$static.getCellCount(row);
  for (column = 0; column < columnCount; ++column) {
    $cleanCell(this$static, row, column, false);
  }
  $removeChild(this$static.bodyElem, $getRow(this$static.bodyElem, row));
}

function $setCellFormatter(this$static, cellFormatter){
  this$static.cellFormatter = cellFormatter;
}

function $setColumnFormatter(this$static, formatter){
  !!this$static.columnFormatter && (formatter.columnGroup = this$static.columnFormatter.columnGroup);
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setText_1(this$static, column, text_0){
  var td;
  this$static.prepareCell(0, column);
  td = $cleanCell(this$static, 0, column, text_0 == null);
  text_0 != null && $setInnerText(td, text_0);
}

function $setWidget_2(this$static, row, column, widget){
  var td;
  this$static.prepareCell(row, column);
  td = $cleanCell(this$static, row, column, true);
  if (widget) {
    $removeFromParent(widget);
    $put(this$static.widgetMap, widget);
    $clinit_DOM();
    $appendChild(td, resolve(widget.element));
    $setParent(widget, this$static);
  }
}

function HTMLTable(){
  this.widgetMap = new ElementMapperImpl;
  this.tableElem = ($clinit_DOM() , $doc.createElement('table'));
  this.bodyElem = $doc.createElement('tbody');
  $appendChild(this.tableElem, resolve(this.bodyElem));
  $setElement(this, this.tableElem);
}

defineClass(235, 714, $intern_36);
_.addClickHandler = function addClickHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}
;
_.clear_0 = function clear_2(){
  $clear_0(this);
}
;
_.iterator = function iterator_3(){
  return new HTMLTable$1(this);
}
;
_.remove = function remove_4(widget){
  return $remove_3(this, widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable', 235);
function $getCellCount(this$static, row){
  $checkRowBounds(this$static, row);
  return $getDOMCellCount(($clinit_DOM() , this$static.bodyElem), row);
}

function $prepareRow(this$static, row){
  var i, rowCount;
  if (row < 0) {
    throw new IndexOutOfBoundsException_0('Cannot create a row with a negative index: ' + row);
  }
  rowCount = ($clinit_DOM() , this$static.bodyElem).rows.length;
  for (i = rowCount; i <= row; i++) {
    $insertRow(this$static, i);
  }
}

function $removeAllRows(this$static){
  var i, numRows;
  numRows = ($clinit_DOM() , this$static.bodyElem).rows.length;
  for (i = 0; i < numRows; i++) {
    $removeRow(this$static, 0);
  }
}

function FlexTable(){
  HTMLTable.call(this);
  $setCellFormatter(this, new FlexTable$FlexCellFormatter(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter(this));
}

defineClass(676, 235, $intern_36, FlexTable);
_.getCellCount = function getCellCount(row){
  return $getCellCount(this, row);
}
;
_.getRowCount = function getRowCount(){
  return ($clinit_DOM() , this.bodyElem).rows.length;
}
;
_.prepareCell = function prepareCell(row, column){
  var cellCount, required;
  $prepareRow(this, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds(this, row) , $getDOMCellCount(($clinit_DOM() , this.bodyElem), row));
  required = column + 1 - cellCount;
  required > 0 && $addCells(this.bodyElem, row, required);
}
;
var Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlexTable', 676);
function $getCellElement_0(tbody, row, col){
  return tbody.rows[row].cells[col];
}

function $getRawElement(this$static, row, column){
  return $getCellElement_0(this$static.this$01.bodyElem, row, column);
}

function $setStyleName_1(this$static, column, styleName){
  this$static.this$01.prepareCell(0, column);
  $setClassName($getCellElement_0(this$static.this$01.bodyElem, 0, column), styleName);
}

function $setWidth_1(this$static, column, width_0){
  this$static.this$01.prepareCell(0, column);
  $getCellElement_0(this$static.this$01.bodyElem, 0, column)['width'] = width_0;
}

function HTMLTable$CellFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(236, 1, {}, HTMLTable$CellFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/CellFormatter', 236);
function FlexTable$FlexCellFormatter(this$0){
  HTMLTable$CellFormatter.call(this, this$0);
}

defineClass(677, 236, {}, FlexTable$FlexCellFormatter);
var Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlexTable/FlexCellFormatter', 677);
function $add_2(this$static, w){
  $add(this$static, w, ($clinit_DOM() , this$static.element));
}

function $clear_1(this$static){
  try {
    $doLogicalClear(this$static);
  }
   finally {
    $removeAllChildren(($clinit_DOM() , this$static.element));
  }
}

function $insert_0(this$static, w){
  $insert(this$static, w, ($clinit_DOM() , this$static.element), 0, true);
}

function FlowPanel(){
  ComplexPanel.call(this);
  $setElement(this, $doc.createElement('div'));
}

defineClass(183, 159, $intern_36, FlowPanel);
_.clear_0 = function clear_3(){
  $clear_1(this);
}
;
var Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FlowPanel', 183);
function $clinit_FocusPanel(){
  $clinit_FocusPanel = emptyMethod;
  impl_1 = ($clinit_FocusImpl() , $clinit_FocusImpl() , implPanel);
}

function FocusPanel(){
  $clinit_FocusPanel();
  SimplePanel_0.call(this, createFocusable0(($clinit_FocusImpl() , focusHandler_0)?focusHandler_0:(focusHandler_0 = $createFocusHandler())));
}

function FocusPanel_0(child){
  $clinit_FocusPanel();
  FocusPanel.call(this);
  $setWidget(this, child);
}

defineClass(108, 42, $intern_36, FocusPanel, FocusPanel_0);
_.addClickHandler = function addClickHandler_2(handler){
  return $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}
;
_.addKeyDownHandler = function addKeyDownHandler_0(handler){
  return $addDomHandler(this, handler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
}
;
_.addKeyPressHandler = function addKeyPressHandler_0(handler){
  return $addDomHandler(this, handler, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_4));
}
;
_.addKeyUpHandler = function addKeyUpHandler_0(handler){
  return $addDomHandler(this, handler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
}
;
var impl_1;
var Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusPanel', 108);
function $prepareRow_0(this$static, row){
  if (row < 0) {
    throw new IndexOutOfBoundsException_0('Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
}

function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
  --this$static.numRows;
}

function $resizeColumns(this$static){
  var i, j, td, tr, tr_0, td_0, td_1;
  if (this$static.numColumns == 7) {
    return;
  }
  if (this$static.numColumns > 7) {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns - 1; j >= 7; j--) {
        $checkCellBounds(this$static, i, j);
        td = $cleanCell(this$static, i, j, false);
        tr = $getRow(this$static.bodyElem, i);
        tr.removeChild(td);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns; j < 7; j++) {
        tr_0 = $getRow(this$static.bodyElem, i);
        td_0 = (td_1 = ($clinit_DOM() , $doc.createElement('td')) , $setInnerHTML(td_1, '&nbsp;') , $clinit_DOM() , td_1);
        $insertChild(tr_0, resolve(td_0), j);
      }
    }
  }
  this$static.numColumns = 7;
  $resizeColumnGroup(this$static.columnFormatter, 7, false);
}

function $resizeRows(this$static){
  if (this$static.numRows == 7) {
    return;
  }
  if (this$static.numRows < 7) {
    addRows(($clinit_DOM() , this$static.bodyElem), 7 - this$static.numRows, this$static.numColumns);
    this$static.numRows = 7;
  }
   else {
    while (this$static.numRows > 7) {
      $removeRow_0(this$static, this$static.numRows - 1);
    }
  }
}

function addRows(table, rows_0, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows_0; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

defineClass(658, 235, $intern_36);
_.getCellCount = function getCellCount_0(row){
  return this.numColumns;
}
;
_.getRowCount = function getRowCount_0(){
  return this.numRows;
}
;
_.prepareCell = function prepareCell_0(row, column){
  $prepareRow_0(this, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Cannot access a column with a negative index: ' + column);
  }
  if (column >= this.numColumns) {
    throw new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this.numColumns);
  }
}
;
_.numColumns = 0;
_.numRows = 0;
var Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Grid', 658);
function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.array.length) {
    if ($get_0(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.array.length) {
    throw new NoSuchElementException;
  }
  result = dynamicCast($get_0(this$static.widgetList, this$static.nextIndex), 6);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1(this$0){
  this.this$01 = this$0;
  this.widgetList = this.this$01.widgetMap.uiObjectList;
  $findNext(this);
}

defineClass(664, 1, {}, HTMLTable$1);
_.hasNext = function hasNext(){
  return this.nextIndex < this.widgetList.array.length;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_0 = function remove_5(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw new IllegalStateException;
  }
  w = dynamicCast($get_0(this.widgetList, this.lastIndex_0), 6);
  $removeFromParent(w);
  this.lastIndex_0 = -1;
}
;
_.lastIndex_0 = -1;
_.nextIndex = -1;
var Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/1', 664);
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = ($clinit_DOM() , $doc.createElement('colgroup'));
    insertChild(this$static.this$01.tableElem, this$static.columnGroup, 0);
    $appendChild(this$static.columnGroup, resolve($doc.createElement('col')));
  }
}

function $resizeColumnGroup(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      $appendChild(this$static.columnGroup, $doc.createElement('col'));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; i--) {
      $removeChild(this$static.columnGroup, this$static.columnGroup.lastChild);
    }
  }
}

function HTMLTable$ColumnFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(237, 1, {}, HTMLTable$ColumnFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/ColumnFormatter', 237);
function $getRow(tbody, row){
  return $getRow_0(($clinit_DOM() , tbody), row);
}

function $getRow_0(tbody, row){
  return $clinit_DOM() , tbody.rows[row];
}

function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  ALIGN_CENTER = new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ($clinit_LocaleInfo() , ALIGN_LEFT);
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START, ALIGN_RIGHT;
defineClass(715, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 715);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(145, 715, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 145);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  ALIGN_BOTTOM = new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  ALIGN_MIDDLE = new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_BOTTOM, ALIGN_MIDDLE, ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(160, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 160);
function $add_3(this$static, w){
  var td;
  td = $createAlignedTd(this$static);
  $clinit_DOM();
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function $createAlignedTd(this$static){
  var td;
  td = ($clinit_DOM() , $doc.createElement('td'));
  $setCellHorizontalAlignment(td, this$static.horzAlign);
  $setCellVerticalAlignment(td, this$static.vertAlign);
  return td;
}

function $insert_1(this$static, w, beforeIndex){
  var td;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  td = $createAlignedTd(this$static);
  insertChild(this$static.tableRow, td, beforeIndex);
  $insert(this$static, w, ($clinit_DOM() , td), beforeIndex, false);
}

function $setVerticalAlignment(this$static, align_0){
  this$static.vertAlign = align_0;
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = ($clinit_DOM() , $doc.createElement('tr'));
  $appendChild(this.body_0, resolve(this.tableRow));
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(20, 192, $intern_36, HorizontalPanel);
_.remove = function remove_6(w){
  var removed, td;
  td = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove_0(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 20);
function $clinit_Hyperlink(){
  $clinit_Hyperlink = emptyMethod;
  $clinit_HyperlinkImplSafari();
}

function Hyperlink(elem){
  this.anchorElem = ($clinit_DOM() , $doc.createElement('a'));
  if (!elem) {
    $setElement(this, this.anchorElem);
  }
   else {
    $setElement_0(this, elem);
    $appendChild(this.element, resolve(this.anchorElem));
  }
  this.eventsToSink == -1?sinkEvents(this.element, 1 | (this.element.__eventBits || 0)):(this.eventsToSink |= 1);
  $setClassName(this.element, 'gwt-Hyperlink');
  this.directionalTextHelper = new DirectionalTextHelper(this.anchorElem);
}

function Hyperlink_0(text_0){
  var hash;
  $clinit_Hyperlink();
  Hyperlink.call(this, ($clinit_DOM() , $doc.createElement('div')));
  $setTextOrHtml(this.directionalTextHelper, text_0, false);
  this.targetHistoryToken = 'Ajouter';
  hash = ($clinit_History() , $encodeHistoryToken('Ajouter'));
  $setPropertyString(this.anchorElem, 'href', '#' + hash);
}

defineClass(111, 6, {13:1, 11:1, 12:1, 10:1, 111:1, 14:1, 9:1, 6:1}, Hyperlink_0);
_.addClickHandler = function addClickHandler_3(handler){
  return $addHandler_0(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}
;
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  var mouseButtons, alt_0, ctrl, meta, shift_0, middle, right, modifiers;
  $onBrowserEvent(this, event_0);
  $clinit_DOM();
  if ($eventGetTypeInt(event_0.type) == 1 && (mouseButtons = $eventGetButton(event_0) , alt_0 = $eventGetAltKey(event_0) , ctrl = $eventGetCtrlKey(event_0) , meta = $eventGetMetaKey(event_0) , shift_0 = $eventGetShiftKey(event_0) , middle = mouseButtons == 4 , right = mouseButtons == 2 , modifiers = alt_0 || ctrl || meta , shiftIsModifier && (modifiers = modifiers | shift_0) , !modifiers && !middle && !right)) {
    $clinit_History();
    newItem(this.targetHistoryToken);
    $eventPreventDefault(event_0);
  }
}
;
var Lcom_google_gwt_user_client_ui_Hyperlink_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Hyperlink', 111);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  prefetchImages = new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function $setUrl(this$static, url_0){
  !!this$static.state && $setPropertyString(($clinit_DOM() , this$static.element), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , this$static.element), url_0.uri_0);
}

function $setUrl_0(this$static, url_0){
  $setUrl(this$static, ($clinit_UriUtils() , new SafeUriString(url_0)));
}

function Image_0(){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState(this));
  $setClassName(($clinit_DOM() , this.element), 'gwt-Image');
}

function prefetch(url_0){
  $clinit_Image();
  var img;
  img = $doc.createElement('img');
  $setSrc(img, url_0);
  prefetchImages.put(url_0, img);
}

defineClass(83, 6, $intern_35, Image_0);
_.addClickHandler = function addClickHandler_4(handler){
  return $addHandler_0(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}
;
_.onBrowserEvent = function onBrowserEvent_4(event_0){
  $clinit_DOM();
  $eventGetTypeInt(event_0.type) == 32768 && !!this.state && $setPropertyString(this.element, '__gwtLastUnhandledEvent', '');
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
  $onLoad(this.state, this);
}
;
var prefetchImages;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 83);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent');
  $equals_1('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(335, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 335);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(337, 1, {}, Image$State$1);
_.execute_1 = function execute_8(){
  var evt, evt_0;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    $setPropertyString($getImageElement(this.val$image2), '__gwtLastUnhandledEvent', 'load');
    return;
  }
  evt = (evt_0 = $doc.createEvent('HTMLEvents') , evt_0.initEvent('load', false, false) , evt_0);
  $dispatchEvent($getImageElement(this.val$image2), evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 337);
function $getImageElement(image){
  return $clinit_DOM() , image.element;
}

function $setUrl_1(image, url_0){
  !!image.state && $setPropertyString(($clinit_DOM() , image.element), '__gwtLastUnhandledEvent', '');
  $setSrc(($clinit_DOM() , image.element), url_0.uri_0);
}

function Image$UnclippedState(image){
  $replaceElement(image, $doc.createElement('img'));
  $clinit_DOM();
  $sinkEvents(image.element, 32768);
  image.eventsToSink == -1?$sinkEvents(image.element, 133398655 | (image.element.__eventBits || 0)):(image.eventsToSink |= 133398655);
}

defineClass(336, 335, {}, Image$UnclippedState);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 336);
function $addAll(this$static, c){
  var changed, e, e$iterator;
  checkNotNull(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    changed = changed | $add_12(this$static, e);
  }
  return changed;
}

function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $retainAll(this$static, c){
  var changed, iter, o;
  checkNotNull(c);
  changed = false;
  for (iter = $iterator(new AbstractMap$1(this$static.map_0)); iter.val$outerIter2.hasNext();) {
    o = $next_4(iter);
    if (!c.map_0.containsKey(o)) {
      iter.val$outerIter2.remove_0();
      changed = true;
    }
  }
  return changed;
}

function $toArray(this$static, a){
  var i, it, size_0;
  size_0 = this$static.size_1();
  a.length < size_0 && (a = createFrom(a, size_0));
  it = this$static.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(a, i, it.next_0());
  }
  a.length > size_0 && setCheck(a, size_0, null);
  return a;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_1('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(712, 1, {36:1});
_.add_0 = function add_2(o){
  throw new UnsupportedOperationException_0('Add not supported on this collection');
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_1 = function remove_7(o){
  return $advanceToFind(this, o, true);
}
;
_.toArray = function toArray(){
  return this.toArray_0(initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, this.size_1(), 3, 1));
}
;
_.toArray_0 = function toArray_0(a){
  return $toArray(this, a);
}
;
_.toString$ = function toString_13(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 712);
function $equals(this$static, o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this$static) {
    return true;
  }
  if (!instanceOf(o, 55)) {
    return false;
  }
  other = dynamicCast(o, 55);
  if (this$static.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this$static.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function $indexOf(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.array.length; i < n; ++i) {
    if (equals_26(toFind, (checkElementIndex(i, this$static.array.length) , this$static.array[i]))) {
      return i;
    }
  }
  return -1;
}

defineClass(721, 712, $intern_40);
_.add_1 = function add_3(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_0 = function add_4(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_5(o){
  return $equals(this, o);
}
;
_.hashCode$ = function hashCode_7(){
  return hashCode_27(this);
}
;
_.iterator = function iterator_4(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_2 = function remove_8(index_0){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
_.set_0 = function set_0(index_0, o){
  throw new UnsupportedOperationException_0('Set not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 721);
function $$init(this$static){
  this$static.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}

function $add_4(this$static, index_0, o){
  checkPositionIndex(index_0, this$static.array.length);
  splice_0(this$static.array, index_0, 0, o);
}

function $add_5(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $addAll_0(this$static, c){
  var cArray, len;
  cArray = $toArray(c, initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, c.size_1(), 3, 1));
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  $insertAt(this$static, this$static.array.length, cArray);
  return true;
}

function $get_0(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_0(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_26(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $insertAt(this$static, index_0, values){
  nativeArraySplice(values, 0, this$static.array, index_0, values.length, false);
}

function $remove_4(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_5(this$static, o){
  var i;
  i = $indexOf_0(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_2(i);
  return true;
}

function $set_1(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function $toArray_0(this$static){
  return cloneSubrange(this$static.array, this$static.array.length);
}

function $toArray_1(this$static, out){
  var i, size_0;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  $$init(this);
}

function ArrayList_0(c){
  $$init(this);
  $insertAt(this, 0, c.toArray());
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(28, 721, $intern_41, ArrayList, ArrayList_0);
_.add_1 = function add_5(index_0, o){
  $add_4(this, index_0, o);
}
;
_.add_0 = function add_6(o){
  return $add_5(this, o);
}
;
_.contains_0 = function contains_0(o){
  return $indexOf_0(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get_0(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.remove_2 = function remove_9(index_0){
  return $remove_4(this, index_0);
}
;
_.remove_1 = function remove_10(o){
  return $remove_5(this, o);
}
;
_.set_0 = function set_1(index_0, o){
  return $set_1(this, index_0, o);
}
;
_.size_1 = function size_1(){
  return this.array.length;
}
;
_.toArray = function toArray_1(){
  return $toArray_0(this);
}
;
_.toArray_0 = function toArray_2(out){
  return $toArray_1(this, out);
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 28);
function getKeyboardModifiers(event_0){
  return ($eventGetShiftKey(event_0)?1:0) | ($eventGetMetaKey(event_0)?8:0) | ($eventGetCtrlKey(event_0)?2:0) | ($eventGetAltKey(event_0)?4:0);
}

function $addItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $getSelectElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $insertItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $insertItem_0(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = ($clinit_DOM() , this$static.element);
  option = $doc.createElement('option');
  option.text = item_0;
  $removeAttribute(option, 'bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index_0];
    $selectAdd(select, option, before);
  }
}

function $setSelectedIndex_0(this$static, index_0){
  $setSelectedIndex(($clinit_DOM() , this$static.element), index_0);
}

function ListBox(){
  $clinit_FocusWidget();
  FocusWidget.call(this, $doc.createElement('select'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-ListBox');
}

defineClass(184, 174, $intern_35, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 184);
function $setSource(this$static, source){
  this$static.source = source;
}

function ListenerWrapper(listener){
  BaseListenerWrapper.call(this, listener);
}

defineClass(139, 196, {31:1});
var Lcom_google_gwt_user_client_ui_ListenerWrapper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper', 139);
function ListenerWrapper$WrappedClickListener(listener){
  ListenerWrapper.call(this, listener);
}

function add_7(source, listener){
  var rtn;
  rtn = new ListenerWrapper$WrappedClickListener(listener);
  source.addClickHandler(rtn);
  return rtn;
}

defineClass(534, 139, $intern_42, ListenerWrapper$WrappedClickListener);
_.onClick = function onClick(event_0){
  dynamicCast(this.listener, 27).onClick_0(!this.source?dynamicCast(event_0.source, 6):this.source);
}
;
var Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedClickListener_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper/WrappedClickListener', 534);
function ListenerWrapper$WrappedKeyboardListener(listener){
  ListenerWrapper.call(this, listener);
}

function add_8(source, listener){
  var b;
  b = new ListenerWrapper$WrappedKeyboardListener(listener);
  source.addKeyDownHandler(b);
  source.addKeyPressHandler(b);
  source.addKeyUpHandler(b);
  return b;
}

defineClass(535, 139, {188:1, 750:1, 695:1, 31:1}, ListenerWrapper$WrappedKeyboardListener);
_.onKeyDown = function onKeyDown(event_0){
  dynamicCast(this.listener, 113).onKeyDown_0(!this.source?dynamicCast(event_0.source, 6):this.source, $eventGetKeyCode(event_0.nativeEvent) & $intern_12, getKeyboardModifiers(event_0.nativeEvent));
}
;
_.onKeyUp = function onKeyUp(event_0){
  !this.source?dynamicCast(event_0.source, 6):this.source;
  dynamicCast(this.listener, 113).onKeyUp_0(!this.source?dynamicCast(event_0.source, 6):this.source, $eventGetKeyCode(event_0.nativeEvent) & $intern_12, getKeyboardModifiers(event_0.nativeEvent));
}
;
var Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedKeyboardListener_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper/WrappedKeyboardListener', 535);
function ListenerWrapper$WrappedLogicalChangeListener(listener){
  ListenerWrapper.call(this, listener);
}

function add_9(source, listener){
  var rtn;
  rtn = new ListenerWrapper$WrappedLogicalChangeListener(listener);
  $addValueChangeHandler_0(source, rtn);
  return rtn;
}

defineClass(536, 139, $intern_28, ListenerWrapper$WrappedLogicalChangeListener);
_.onValueChange = function onValueChange_0(event_0){
  $onChange(dynamicCast(this.listener, 747), !this.source?dynamicCast(event_0.source, 6):this.source);
}
;
var Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedLogicalChangeListener_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper/WrappedLogicalChangeListener', 536);
function ListenerWrapper$WrappedMouseListener(listener){
  ListenerWrapper.call(this, listener);
}

function add_10(source, listener){
  var handlers;
  handlers = new ListenerWrapper$WrappedMouseListener(listener);
  $addDomHandler(source, handlers, ($clinit_MouseDownEvent() , $clinit_MouseDownEvent() , TYPE_6));
  $addDomHandler(source, handlers, ($clinit_MouseUpEvent() , $clinit_MouseUpEvent() , TYPE_10));
  $addDomHandler(source, handlers, ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_8));
  $addDomHandler(source, handlers, ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_9));
  $addDomHandler(source, handlers, ($clinit_MouseMoveEvent() , $clinit_MouseMoveEvent() , TYPE_7));
  return handlers;
}

defineClass(537, 139, $intern_39, ListenerWrapper$WrappedMouseListener);
_.onMouseDown = function onMouseDown_1(event_0){
  var source;
  source = !this.source?dynamicCast(event_0.source, 6):this.source;
  dynamicCast(this.listener, 114).onMouseDown_0(source, $getX(event_0), $getY(event_0));
}
;
_.onMouseMove = function onMouseMove_1(event_0){
  var source;
  source = !this.source?dynamicCast(event_0.source, 6):this.source;
  dynamicCast(this.listener, 114).onMouseMove_0(source, $getX(event_0), $getY(event_0));
}
;
_.onMouseOut = function onMouseOut_0(event_0){
  dynamicCast(this.listener, 114).onMouseLeave(!this.source?dynamicCast(event_0.source, 6):this.source);
}
;
_.onMouseOver = function onMouseOver_0(event_0){
  dynamicCast(this.listener, 114).onMouseEnter(!this.source?dynamicCast(event_0.source, 6):this.source);
}
;
_.onMouseUp = function onMouseUp_1(event_0){
  var source;
  source = !this.source?dynamicCast(event_0.source, 6):this.source;
  dynamicCast(this.listener, 114).onMouseUp_0(source, $getX(event_0), $getY(event_0));
}
;
var Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedMouseListener_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper/WrappedMouseListener', 537);
function ListenerWrapper$WrappedOldSuggestionHandler(listener){
  ListenerWrapper.call(this, listener);
}

defineClass(538, 139, $intern_43, ListenerWrapper$WrappedOldSuggestionHandler);
_.onSelection = function onSelection(event_0){
  $onSuggestionSelected_0(dynamicCast(this.listener, 748), new SuggestionEvent(dynamicCast(event_0.source, 152), dynamicCast(event_0.selectedItem, 693)));
}
;
var Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedOldSuggestionHandler_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListenerWrapper/WrappedOldSuggestionHandler', 538);
function $addItem_0(this$static, item_0){
  return $insertItem_1(this$static, item_0, this$static.allItems.array.length);
}

function $addItemElement(this$static, beforeIndex, tdElem){
  var tr;
  if (this$static.vertical) {
    tr = ($clinit_DOM() , $doc.createElement('tr'));
    insertChild(this$static.body_0, tr, beforeIndex);
    $appendChild(tr, resolve(tdElem));
  }
   else {
    tr = ($clinit_DOM() , $getChild(this$static.body_0, 0));
    $insertChild(tr, resolve(tdElem), beforeIndex);
  }
}

function $clearItems(this$static){
  var container, item_0, item$iterator;
  $selectItem(this$static, null);
  container = this$static.vertical?this$static.body_0:($clinit_DOM() , $getChild(this$static.body_0, 0));
  while ($clinit_DOM() , $getChildCount(container) > 0) {
    $removeChild(container, $getChild(container, 0));
  }
  for (item$iterator = new AbstractList$IteratorImpl(this$static.allItems); item$iterator.i < item$iterator.this$01_0.size_1();) {
    item_0 = (checkCriticalElement(item$iterator.i < item$iterator.this$01_0.size_1()) , dynamicCast(item$iterator.this$01_0.get_0(item$iterator.last = item$iterator.i++), 9));
    $setPropertyInt(item_0.element, 'colSpan', 1);
    dynamicCast(item_0, 67);
  }
  this$static.items.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  this$static.allItems.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
}

function $doItemAction(this$static, item_0, fireCommand){
  var cmd;
  if (!item_0.enabled) {
    return;
  }
  $selectItem(this$static, item_0);
  if (fireCommand && !!item_0.command) {
    $selectItem(this$static, null);
    $blur(($clinit_FocusPanel() , $clinit_DOM() , this$static.element));
    cmd = item_0.command;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), new MenuBar$1(cmd));
  }
}

function $findItem(this$static, hItem){
  var item_0, item$iterator;
  for (item$iterator = new AbstractList$IteratorImpl(this$static.items); item$iterator.i < item$iterator.this$01_0.size_1();) {
    item_0 = (checkCriticalElement(item$iterator.i < item$iterator.this$01_0.size_1()) , dynamicCast(item$iterator.this$01_0.get_0(item$iterator.last = item$iterator.i++), 67));
    if ($isOrHasChild(($clinit_DOM() , item_0.element), hItem)) {
      return item_0;
    }
  }
  return null;
}

function $init_0(this$static, vertical){
  var outer, table, tr;
  table = ($clinit_DOM() , $doc.createElement('table'));
  this$static.body_0 = $doc.createElement('tbody');
  $appendChild(table, resolve(this$static.body_0));
  if (!vertical) {
    tr = $doc.createElement('tr');
    $appendChild(this$static.body_0, resolve(tr));
  }
  this$static.vertical = vertical;
  outer = ($clinit_FocusPanel() , createFocusable0(($clinit_FocusImpl() , focusHandler_0)?focusHandler_0:(focusHandler_0 = $createFocusHandler())));
  $appendChild(outer, resolve(table));
  $setElement_0(this$static, outer);
  $clinit_Roles();
  $set(MENUBAR, this$static.element);
  this$static.eventsToSink == -1?sinkEvents(this$static.element, 2225 | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= 2225);
  $setClassName(this$static.element, 'gwt-MenuBar');
  vertical?$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'vertical', true):$setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'horizontal', true);
  this$static.element.style['outline'] = '0px';
  $setAttribute(this$static.element, 'hideFocus', 'true');
  $addDomHandler(this$static, new MenuBar$2(this$static), ($clinit_BlurEvent() , $clinit_BlurEvent() , TYPE));
}

function $insertItem_1(this$static, item_0, beforeIndex){
  var i, itemsIndex;
  if (beforeIndex < 0 || beforeIndex > this$static.allItems.array.length) {
    throw new IndexOutOfBoundsException;
  }
  $add_4(this$static.allItems, beforeIndex, item_0);
  itemsIndex = 0;
  for (i = 0; i < beforeIndex; i++) {
    instanceOf($get_0(this$static.allItems, i), 67) && ++itemsIndex;
  }
  $add_4(this$static.items, itemsIndex, item_0);
  $addItemElement(this$static, beforeIndex, ($clinit_DOM() , item_0.element));
  $setStyleName_0(item_0, getStylePrimaryName(item_0.element) + '-' + 'selected', false);
  $updateSubmenuIcon(this$static, item_0);
  return item_0;
}

function $itemOver(this$static, item_0, focus_0){
  if (!!item_0 && !item_0.enabled) {
    return;
  }
  $selectItem(this$static, item_0);
  focus_0 && this$static.focusOnHover && $focus(($clinit_FocusPanel() , impl_1 , $clinit_DOM() , this$static.element));
  !!item_0 && this$static.autoOpen && $doItemAction(this$static, item_0, false);
}

function $moveSelectionDown(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  this$static.vertical && $selectNextItem(this$static);
}

function $moveSelectionUp(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  this$static.vertical?$selectPrevItem(this$static):undefined;
}

function $moveToNextItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  !this$static.vertical && $selectNextItem(this$static);
}

function $moveToPrevItem(this$static){
  if ($selectFirstItemIfNoneSelected(this$static)) {
    return;
  }
  this$static.vertical?undefined:$selectPrevItem(this$static);
}

function $selectFirstItemIfNoneSelected(this$static){
  var nextItem, nextItem$iterator;
  if (!this$static.selectedItem) {
    for (nextItem$iterator = new AbstractList$IteratorImpl(this$static.items); nextItem$iterator.i < nextItem$iterator.this$01_0.size_1();) {
      nextItem = (checkCriticalElement(nextItem$iterator.i < nextItem$iterator.this$01_0.size_1()) , dynamicCast(nextItem$iterator.this$01_0.get_0(nextItem$iterator.last = nextItem$iterator.i++), 67));
      if (nextItem.enabled) {
        $selectItem(this$static, nextItem);
        break;
      }
    }
    return true;
  }
  return false;
}

function $selectItem(this$static, item_0){
  var td, tr;
  if (item_0 == this$static.selectedItem) {
    return;
  }
  if (this$static.selectedItem) {
    $setSelectionStyle(this$static.selectedItem);
    if (this$static.vertical) {
      tr = ($clinit_DOM() , $getParentElement($getElement(this$static.selectedItem)));
      if ($getChildCount(tr) == 2) {
        td = $getChild(tr, 1);
        setStyleName(td, 'subMenuIcon-selected', false);
      }
    }
  }
  if (item_0) {
    $setStyleName_0(item_0, getStylePrimaryName(($clinit_DOM() , item_0.element)) + '-' + 'selected', true);
    if (this$static.vertical) {
      tr = $getParentElement(item_0.element);
      if ($getChildCount(tr) == 2) {
        td = $getChild(tr, 1);
        setStyleName(td, 'subMenuIcon-selected', true);
      }
    }
    $clinit_Roles();
    $setAriaActivedescendantProperty(this$static.element, new Id(item_0.element));
  }
  this$static.selectedItem = item_0;
}

function $selectNextItem(this$static){
  var firstIndex, index_0, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index_0 = $indexOf_0(this$static.items, this$static.selectedItem, 0);
  firstIndex = index_0;
  while (true) {
    index_0 = index_0 + 1;
    index_0 == this$static.items.array.length && (index_0 = 0);
    if (index_0 == firstIndex) {
      itemToBeSelected = dynamicCast($get_0(this$static.items, firstIndex), 67);
      break;
    }
     else {
      itemToBeSelected = dynamicCast($get_0(this$static.items, index_0), 67);
      if (itemToBeSelected.enabled) {
        break;
      }
    }
  }
  $selectItem(this$static, itemToBeSelected);
}

function $selectPrevItem(this$static){
  var firstIndex, index_0, itemToBeSelected;
  if (!this$static.selectedItem) {
    return;
  }
  index_0 = $indexOf_0(this$static.items, this$static.selectedItem, 0);
  firstIndex = index_0;
  while (true) {
    index_0 = index_0 - 1;
    index_0 < 0 && (index_0 = this$static.items.array.length - 1);
    if (index_0 == firstIndex) {
      itemToBeSelected = dynamicCast($get_0(this$static.items, firstIndex), 67);
      break;
    }
     else {
      itemToBeSelected = dynamicCast($get_0(this$static.items, index_0), 67);
      if (itemToBeSelected.enabled) {
        break;
      }
    }
  }
  $selectItem(this$static, itemToBeSelected);
}

function $updateSubmenuIcon(this$static, item_0){
  var container, idx, tdCount, tr;
  if (!this$static.vertical) {
    return;
  }
  idx = $indexOf_0(this$static.allItems, item_0, 0);
  if (idx == -1) {
    return;
  }
  container = this$static.vertical?this$static.body_0:($clinit_DOM() , $getChild(this$static.body_0, 0));
  tr = ($clinit_DOM() , $getChild(container, idx));
  tdCount = $getChildCount(tr);
  tdCount == 2 && $removeChild(tr, $getChild(tr, 1));
  $setPropertyInt(item_0.element, 'colSpan', 2);
}

defineClass(226, 6, $intern_35);
_.onBrowserEvent = function onBrowserEvent_5(event_0){
  var item_0, keyCode;
  item_0 = $findItem(this, ($clinit_DOM() , $eventGetTarget(event_0)));
  switch ($eventGetTypeInt(event_0.type)) {
    case 1:
      {
        $focus(($clinit_FocusPanel() , impl_1 , this.element));
        !!item_0 && $doItemAction(this, item_0, true);
        break;
      }

    case 16:
      {
        !!item_0 && $itemOver(this, item_0, true);
        break;
      }

    case 32:
      {
        !!item_0 && $itemOver(this, null, false);
        break;
      }

    case 2048:
      {
        $selectFirstItemIfNoneSelected(this);
        break;
      }

    case 128:
      {
        keyCode = $eventGetKeyCode(event_0);
        $clinit_LocaleInfo();
        keyCode = keyCode;
        switch (keyCode) {
          case 37:
            $moveToPrevItem(this);
            $eventStopPropagation(event_0);
            $eventPreventDefault(event_0);
            break;
          case 39:
            $moveToNextItem(this);
            $eventStopPropagation(event_0);
            $eventPreventDefault(event_0);
            break;
          case 38:
            $moveSelectionUp(this);
            $eventStopPropagation(event_0);
            $eventPreventDefault(event_0);
            break;
          case 40:
            $moveSelectionDown(this);
            $eventStopPropagation(event_0);
            $eventPreventDefault(event_0);
            break;
          case 27:
            $selectItem(this, null);
            $eventStopPropagation(event_0);
            $eventPreventDefault(event_0);
            break;
          case 9:
            $selectItem(this, null);
            break;
          case 13:
            if (!$selectFirstItemIfNoneSelected(this)) {
              $doItemAction(this, this.selectedItem, true);
              $eventStopPropagation(event_0);
              $eventPreventDefault(event_0);
            }

        }
        break;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach_2(){
  $onDetach(this);
}
;
_.autoOpen = false;
_.focusOnHover = true;
_.vertical = false;
var Lcom_google_gwt_user_client_ui_MenuBar_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar', 226);
function MenuBar$1(val$cmd){
  this.val$cmd2 = val$cmd;
}

defineClass(602, 1, {}, MenuBar$1);
_.execute_1 = function execute_9(){
  $execute_0(this.val$cmd2);
}
;
var Lcom_google_gwt_user_client_ui_MenuBar$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar/1', 602);
function MenuBar$2(this$0){
  this.this$01 = this$0;
}

defineClass(603, 1, {694:1, 31:1}, MenuBar$2);
_.onBlur = function onBlur(event_0){
  $selectItem(this.this$01, null);
}
;
var Lcom_google_gwt_user_client_ui_MenuBar$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuBar/2', 603);
function $clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer(){
  $clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer = emptyMethod;
  $clinit_UriUtils();
  new SafeUriString(($clinit_LocaleInfo() , 'data:image/gif;base64,R0lGODlhBQAJAIAAAAAAAAAAACH5BAEAAAEALAAAAAAFAAkAAAIMRB5gp9v2YlJsJRQKADs='));
}

function $setScheduledCommand(this$static, cmd){
  this$static.command = cmd;
}

function $setSelectionStyle(this$static){
  $setStyleName_0(this$static, getStylePrimaryName(($clinit_DOM() , this$static.element)) + '-' + 'selected', false);
}

function MenuItem(text_0){
  $setElement_0(this, ($clinit_DOM() , $doc.createElement('td')));
  $setStyleName_0(this, getStylePrimaryName(this.element) + '-' + 'selected', false);
  $setInnerHTML(this.element, text_0);
  $setClassName(this.element, 'gwt-MenuItem');
  $setAttribute(this.element, 'id', $createUniqueId($doc));
  $clinit_Roles();
  $set(MENUITEM, this.element);
}

defineClass(67, 9, {10:1, 67:1, 9:1});
_.enabled = true;
var Lcom_google_gwt_user_client_ui_MenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui', 'MenuItem', 67);
function $onResize(){
  var height, width_0, winHeight, winWidth;
  null.nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  null.nullMethod($clinit_Style$Display());
  null.nullMethod($clinit_Style$Unit());
  null.nullMethod($clinit_Style$Unit());
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.nullMethod((width_0 > winWidth?width_0:winWidth) + 'px');
  null.nullMethod((height > winHeight?height:winHeight) + 'px');
  null.nullMethod($clinit_Style$Display());
}

function PopupPanel$1(){
}

defineClass(521, 1, $intern_27, PopupPanel$1);
_.onResize = function onResize_2(event_0){
  $onResize();
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/1', 521);
function $setPosition_0(this$static, offsetWidth, offsetHeight){
  $position(this$static.this$01, this$static.val$target2, offsetWidth, offsetHeight);
}

function PopupPanel$2(this$0, val$target){
  this.this$01 = this$0;
  this.val$target2 = val$target;
}

defineClass(522, 1, {}, PopupPanel$2);
var Lcom_google_gwt_user_client_ui_PopupPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/2', 522);
function PopupPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(523, 1, $intern_26, PopupPanel$3);
_.onPreviewNativeEvent = function onPreviewNativeEvent_2(event_0){
  $previewNativeEvent(this.this$01, event_0);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/3', 523);
function PopupPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(524, 1, $intern_28, PopupPanel$4);
_.onValueChange = function onValueChange_1(event_0){
  this.this$01.autoHideOnHistoryEvents && this.this$01.hide(false);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/4', 524);
function $clinit_PopupPanel$AnimationType(){
  $clinit_PopupPanel$AnimationType = emptyMethod;
  CENTER_0 = new PopupPanel$AnimationType('CENTER', 0);
  ONE_WAY_CORNER = new PopupPanel$AnimationType('ONE_WAY_CORNER', 1);
  ROLL_DOWN = new PopupPanel$AnimationType('ROLL_DOWN', 2);
}

function PopupPanel$AnimationType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_PopupPanel$AnimationType();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit, 1), $intern_2, 137, 0, [CENTER_0, ONE_WAY_CORNER, ROLL_DOWN]);
}

defineClass(137, 7, {137:1, 3:1, 8:1, 7:1}, PopupPanel$AnimationType);
var CENTER_0, ONE_WAY_CORNER, ROLL_DOWN;
var Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'PopupPanel/AnimationType', 137, Ljava_lang_Enum_2_classLit, values_11);
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_1(null)), this$static.curPanel);
  }
  $setClip($getElement(this$static.curPanel), 'rect(auto, auto, auto, auto)');
  $setPropertyImpl($getElement(this$static.curPanel).style, 'overflow', 'visible');
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $setPropertyImpl($getElement(this$static.curPanel).style, 'position', 'absolute');
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_0(($clinit_RootPanel() , get_1(null)), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_1(null)), this$static.curPanel);
  }
  $setPropertyImpl($getElement(this$static.curPanel).style, 'overflow', 'visible');
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight);
  width_0 = round_int(progress * this$static.offsetWidth);
  switch (this$static.curPanel.animType.ordinal) {
    case 2:
      right = this$static.offsetWidth;
      bottom = height;
      break;
    case 0:
      top_0 = this$static.offsetHeight - height >> 1;
      left = this$static.offsetWidth - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
      break;
    case 1:
      $clinit_LocaleInfo();
      right = width_0;
      bottom = height;
  }
  $setClip($getElement(this$static.curPanel), 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  this$static.curPanel.animType != ($clinit_PopupPanel$AnimationType() , CENTER_0) && !showing && false;
  this$static.showing = showing;
  $onInstantaneousRun(this$static);
}

function PopupPanel$ResizeAnimation(panel){
  Animation.call(this, (!instance_0 && (instance_0 = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance_0));
  this.curPanel = panel;
}

defineClass(520, 214, {}, PopupPanel$ResizeAnimation);
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight = 0;
_.offsetWidth = -1;
_.showing = false;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation', 520);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function $onClick(this$static){
  var evt;
  !this$static.curFace && $setCurrentFace_0(this$static, this$static.up);
  (1 & this$static.curFace.val$faceID5) > 0 && $toggleDown(this$static);
  this$static.allowClick = true;
  evt = $createMouseEvent($doc, 'click', true, true, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  $dispatchEvent(($clinit_DOM() , this$static.element), evt);
  this$static.allowClick = false;
}

function PushButton(){
  $clinit_FocusWidget();
  ButtonBase.call(this, ($clinit_FocusPanel() , createFocusable0(($clinit_FocusImpl() , focusHandler_0)?focusHandler_0:(focusHandler_0 = $createFocusHandler()))));
  this.eventsToSink == -1?sinkEvents(($clinit_DOM() , this.element), 7165 | (this.element.__eventBits || 0)):(this.eventsToSink |= 7165);
  $setUpFace(this, new CustomButton$2(this, null, 'up', 0));
  $setClassName(($clinit_DOM() , this.element), 'gwt-CustomButton');
  $clinit_Roles();
  $set(BUTTON, this.element);
  $setClassName(this.element, 'gwt-PushButton');
}

defineClass(674, 673, $intern_35, PushButton);
var Lcom_google_gwt_user_client_ui_PushButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PushButton', 674);
function $sinkEvents_0(this$static, eventBitsToAdd){
  if (this$static.eventsToSink == -1) {
    sinkEvents_0(this$static.inputElem, eventBitsToAdd | getEventsSunk(this$static.inputElem));
    sinkEvents_0(this$static.labelElem, eventBitsToAdd | getEventsSunk(this$static.labelElem));
  }
   else {
    this$static.eventsToSink == -1?sinkEvents_0(this$static.inputElem, eventBitsToAdd | getEventsSunk(this$static.inputElem)):this$static.eventsToSink == -1?sinkEvents(($clinit_DOM() , this$static.element), eventBitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
  }
}

function RadioButton(){
  var elem;
  $clinit_FocusWidget();
  CheckBox.call(this, ($clinit_DOM() , elem = $doc.createElement('INPUT') , elem.type = 'radio' , elem.name = 'friendType' , elem.value = 'on' , elem));
  $setClassName(this.element, 'gwt-RadioButton');
  $sinkEvents_0(this, 1);
  $sinkEvents_0(this, 8);
  $sinkEvents_0(this, 4096);
  $sinkEvents_0(this, 128);
}

defineClass(222, 151, $intern_35, RadioButton);
_.onBrowserEvent = function onBrowserEvent_6(event_0){
  var target;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 8:
    case 4096:
    case 128:
      this.oldValue = this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_1:FALSE_1):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_1:FALSE_1);
      break;
    case 1:
      target = $eventGetTarget(event_0);
      if (is_0(target) && $isOrHasChild(this.labelElem, target)) {
        this.oldValue = this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_1:FALSE_1):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_1:FALSE_1);
        return;
      }

      $onBrowserEvent(this, event_0);
      fireIfNotEqual(this, this.oldValue, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_1:FALSE_1):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_1:FALSE_1));
      return;
  }
  $onBrowserEvent(this, event_0);
}
;
_.sinkEvents = function sinkEvents_3(eventBitsToAdd){
  $sinkEvents_0(this, eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_RadioButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RadioButton', 222);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_9(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    widgetsToDetach.map_0.clear_0();
    rootPanels.clear_0();
  }
}

function get_1(id_0){
  $clinit_RootPanel();
  var elem, rp;
  rp = dynamicCast(rootPanels.get_1(id_0), 133);
  elem = null;
  if (id_0 != null) {
    if (!(elem = $getElementById($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || ($clinit_DOM() , rp.element == elem)) {
      return rp;
    }
  }
  if (rootPanels.size_1() == 0) {
    addCloseHandler(new RootPanel$2);
    $clinit_LocaleInfo();
  }
  !elem?(rp = new RootPanel$DefaultRootPanel):(rp = new RootPanel(elem));
  rootPanels.put(id_0, rp);
  $add_12(widgetsToDetach, rp);
  return rp;
}

defineClass(133, 321, $intern_44, RootPanel);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 133);
function RootPanel$1(){
}

defineClass(323, 1, {}, RootPanel$1);
_.execute_2 = function execute_10(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 323);
function RootPanel$2(){
}

defineClass(324, 1, {684:1, 31:1}, RootPanel$2);
_.onClose = function onClose(closeEvent){
  detachWidgets();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 324);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(322, 133, $intern_44, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 322);
function $getMaximumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?0:($getSubPixelScrollWidth(scrollable) | 0) - (scrollable.clientWidth | 0);
}

function $getMinimumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?(scrollable.clientWidth | 0) - ($getSubPixelScrollWidth(scrollable) | 0):0;
}

function $isRtl(scrollable){
  var computedStyle = $doc.defaultView.getComputedStyle(scrollable, null);
  return computedStyle.getPropertyValue('direction') == 'rtl';
}

function ScrollImpl(){
}

defineClass(178, 1, {}, ScrollImpl);
var impl_2;
var Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollImpl', 178);
function $getHorizontalScrollPosition(this$static){
  return $getScrollLeft_0(($clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumHorizontalScrollPosition_0(this$static){
  return $getMaximumHorizontalScrollPosition((!impl_2 && (impl_2 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getMaximumVerticalScrollPosition(this$static){
  return ((($clinit_DOM() , this$static.scrollableElem).scrollHeight || 0) | 0) - (this$static.scrollableElem.clientHeight | 0);
}

function $getMinimumHorizontalScrollPosition_0(this$static){
  return $getMinimumHorizontalScrollPosition((!impl_2 && (impl_2 = new ScrollImpl) , $clinit_DOM() , this$static.scrollableElem));
}

function $getVerticalScrollPosition(this$static){
  return (($clinit_DOM() , this$static.scrollableElem).scrollTop || 0) | 0;
}

function $scrollToBottom(this$static){
  $setScrollPosition(this$static, ((($clinit_DOM() , this$static.scrollableElem).scrollHeight || 0) | 0) - (this$static.scrollableElem.clientHeight | 0));
}

function $setAlwaysShowScrollBars(this$static){
  ($clinit_DOM() , this$static.scrollableElem).style['overflow'] = ($clinit_Style$Overflow() , 'auto');
}

function $setHorizontalScrollPosition(this$static, position){
  $setScrollLeft(($clinit_DOM() , this$static.scrollableElem), position);
}

function $setScrollPosition(this$static, position){
  $setScrollTop(($clinit_DOM() , this$static.scrollableElem), position);
}

function $setTouchScrollingDisabled(this$static){
  var scroller, ua;
  if (this$static.touchScroller) {
    return false;
  }
  this$static.touchScroller = (scroller = (!isSupported && (isSupported = ($clinit_Boolean() , !impl && (impl = new TouchEvent$TouchSupportDetector) , impl.isSupported && !(ua = navigator.userAgent.toLowerCase() , /android ([3-9]+)\.([0-9]+)/.exec(ua) != null)?TRUE_1:FALSE_1)) , isSupported.value_0?new TouchScroller:null) , !!scroller && $setTargetWidget(scroller, this$static) , scroller);
  return !this$static.touchScroller;
}

function $setVerticalScrollPosition(this$static, position){
  $setScrollTop(($clinit_DOM() , this$static.scrollableElem), position);
}

function ScrollPanel(){
  SimplePanel.call(this);
  this.scrollableElem = ($clinit_DOM() , this.element);
  this.containerElem = $doc.createElement('div');
  $appendChild(this.scrollableElem, this.containerElem);
  this.scrollableElem.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  this.scrollableElem.style['position'] = ($clinit_Style$Position() , 'relative');
  this.containerElem.style['position'] = 'relative';
  $setPropertyImpl(this.scrollableElem.style, 'zoom', '1');
  $setPropertyImpl(this.containerElem.style, 'zoom', '1');
  $setTouchScrollingDisabled(this);
  !impl_2 && (impl_2 = new ScrollImpl);
}

function ScrollPanel_0(child){
  ScrollPanel.call(this);
  $setWidget(this, child);
}

defineClass(66, 42, {13:1, 11:1, 12:1, 10:1, 43:1, 14:1, 66:1, 9:1, 6:1}, ScrollPanel, ScrollPanel_0);
_.getContainerElement = function getContainerElement_2(){
  return $clinit_DOM() , this.containerElem;
}
;
_.onAttach = function onAttach_3(){
  $onAttach(this);
  setEventListener(($clinit_DOM() , this.scrollableElem), this);
}
;
_.onDetach = function onDetach_3(){
  setEventListener(($clinit_DOM() , this.scrollableElem), null);
  $onDetach(this);
}
;
_.setHeight = function setHeight_1(height){
  ($clinit_DOM() , this.element).style['height'] = height;
}
;
_.setWidth = function setWidth_1(width_0){
  ($clinit_DOM() , this.element).style['width'] = width_0;
}
;
var Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollPanel', 66);
function $next_0(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw new NoSuchElementException;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(195, 1, {}, SimplePanel$1);
_.hasNext = function hasNext_0(){
  return this.hasElement;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_0 = function remove_11(){
  !!this.returned && this.this$01.remove(this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 195);
function $addChangeListener(this$static, listener){
  $setSource(add_9(this$static.box, listener), this$static);
}

function $refreshSuggestions(this$static){
  var text_0;
  text_0 = $getPropertyString($getElement(this$static.box), 'value');
  if ($equals_1(text_0, this$static.currentText)) {
    return;
  }
   else {
    this$static.currentText = text_0;
  }
  text_0.length == 0?$requestDefaultSuggestions(this$static.oracle, (new SuggestOracle$Request(null) , this$static.callback)):$requestSuggestions(this$static.oracle, new SuggestOracle$Request(text_0), this$static.callback);
}

function $setNewSelection(this$static, curSuggestion){
  this$static.currentText = curSuggestion.replacementString;
  $setText_2(this$static, this$static.currentText);
  this$static.display_0.suggestionPopup.hide(false);
  fire_4(this$static, curSuggestion);
}

function $setText_2(this$static, text_0){
  $setText_3(this$static.box, text_0);
}

function SuggestBox(oracle, box){
  SuggestBox_0.call(this, oracle, box, new SuggestBox$DefaultSuggestionDisplay);
}

function SuggestBox_0(oracle, box, suggestDisplay){
  var events;
  this.callback = new SuggestBox$1(this);
  this.suggestionCallback = new SuggestBox$2(this);
  this.box = box;
  this.display_0 = suggestDisplay;
  $initWidget(this, box);
  events = new SuggestBox$1TextBoxEvents(this);
  $addDomHandler(this.box, events, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
  $addDomHandler(this.box, events, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
  $addValueChangeHandler_0(this.box, events);
  this.oracle = oracle;
  $setClassName(($clinit_DOM() , this.element), 'gwt-SuggestBox');
}

defineClass(152, 708, {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 152:1, 9:1, 6:1}, SuggestBox);
_.addKeyDownHandler = function addKeyDownHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
}
;
_.addKeyPressHandler = function addKeyPressHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_4));
}
;
_.addKeyUpHandler = function addKeyUpHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
}
;
_.selectsFirstItem = true;
var Lcom_google_gwt_user_client_ui_SuggestBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox', 152);
function $onSuggestionsReady(this$static, response){
  if (!$isEnabled(this$static.this$01.box)) {
    return;
  }
  $showSuggestions(this$static.this$01.display_0, this$static.this$01, response.suggestions, this$static.this$01.selectsFirstItem, this$static.this$01.suggestionCallback);
}

function SuggestBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(599, 1, {}, SuggestBox$1);
var Lcom_google_gwt_user_client_ui_SuggestBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/1', 599);
function SuggestBox$1TextBoxEvents(this$0){
  this.this$01 = this$0;
}

defineClass(601, 1, {188:1, 695:1, 143:1, 31:1}, SuggestBox$1TextBoxEvents);
_.onKeyDown = function onKeyDown_0(event_0){
  var suggestion;
  switch ($eventGetKeyCode(event_0.nativeEvent)) {
    case 40:
      $moveSelectionDown_0(this.this$01.display_0);
      break;
    case 38:
      $moveSelectionUp_0(this.this$01.display_0);
      break;
    case 13:
    case 9:
      suggestion = $getCurrentSelection(this.this$01.display_0);
      !suggestion?this.this$01.display_0.suggestionPopup.hide(false):$setNewSelection(this.this$01, suggestion);
  }
}
;
_.onKeyUp = function onKeyUp_0(event_0){
  $refreshSuggestions(this.this$01);
}
;
_.onValueChange = function onValueChange_2(event_0){
  $delegateEvent(this.this$01, event_0);
}
;
var Lcom_google_gwt_user_client_ui_SuggestBox$1TextBoxEvents_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/1TextBoxEvents', 601);
function $onSuggestionSelected(this$static, suggestion){
  $setFocus(this$static.this$01.box);
  $setNewSelection(this$static.this$01, suggestion);
}

function SuggestBox$2(this$0){
  this.this$01 = this$0;
}

defineClass(600, 1, {}, SuggestBox$2);
var Lcom_google_gwt_user_client_ui_SuggestBox$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/2', 600);
defineClass(731, 1, {});
var Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionDisplay_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/SuggestionDisplay', 731);
function $getCurrentSelection(this$static){
  var item_0;
  if (!this$static.suggestionPopup.showing) {
    return null;
  }
  item_0 = this$static.suggestionMenu.selectedItem;
  return !item_0?null:dynamicCast(item_0, 181).suggestion;
}

function $moveSelectionDown_0(this$static){
  this$static.suggestionPopup.showing && $selectItem_0(this$static.suggestionMenu, $getSelectedItemIndex(this$static.suggestionMenu) + 1);
}

function $moveSelectionUp_0(this$static){
  this$static.suggestionPopup.showing && ($getSelectedItemIndex(this$static.suggestionMenu) == -1?$selectItem_0(this$static.suggestionMenu, this$static.suggestionMenu.items.array.length - 1):$selectItem_0(this$static.suggestionMenu, $getSelectedItemIndex(this$static.suggestionMenu) - 1));
}

function $showSuggestions(this$static, suggestBox, suggestions, isAutoSelectEnabled, callback){
  var anySuggestions, curSuggestion, curSuggestion$iterator, menuItem;
  anySuggestions = !!suggestions && suggestions.array.length > 0;
  if (!anySuggestions && this$static.hideWhenEmpty) {
    this$static.suggestionPopup.hide(false);
    return;
  }
  this$static.suggestionPopup.attached && this$static.suggestionPopup.hide(false);
  $clearItems(this$static.suggestionMenu);
  for (curSuggestion$iterator = new AbstractList$IteratorImpl(suggestions); curSuggestion$iterator.i < curSuggestion$iterator.this$01_0.size_1();) {
    curSuggestion = (checkCriticalElement(curSuggestion$iterator.i < curSuggestion$iterator.this$01_0.size_1()) , dynamicCast(curSuggestion$iterator.this$01_0.get_0(curSuggestion$iterator.last = curSuggestion$iterator.i++), 693));
    menuItem = new SuggestBox$SuggestionMenuItem(curSuggestion);
    $setScheduledCommand(menuItem, new SuggestBox$DefaultSuggestionDisplay$1(callback, curSuggestion));
    $addItem_0(this$static.suggestionMenu, menuItem);
  }
  isAutoSelectEnabled && anySuggestions && $selectItem_0(this$static.suggestionMenu, 0);
  if (this$static.lastSuggestBox != suggestBox) {
    !!this$static.lastSuggestBox && $removeAutoHidePartner(this$static.suggestionPopup, $getElement(this$static.lastSuggestBox));
    this$static.lastSuggestBox = suggestBox;
    $addAutoHidePartner(this$static.suggestionPopup, ($clinit_DOM() , suggestBox.element));
  }
  $showRelativeTo(this$static.suggestionPopup, suggestBox);
}

function SuggestBox$DefaultSuggestionDisplay(){
  var p;
  this.suggestionMenu = new SuggestBox$SuggestionMenu;
  this.suggestionPopup = (p = new DecoratedPopupPanel(true, false, 'suggestPopup') , $setClassName($getParentElement(($clinit_DOM() , $getFirstChildElement(p.element))), 'gwt-SuggestBoxPopup') , p.previewAllNativeEvents = true , $setAnimationType(p, ($clinit_PopupPanel$AnimationType() , ROLL_DOWN)) , p);
  $setWidget_1(this.suggestionPopup, this.suggestionMenu);
}

defineClass(596, 731, {}, SuggestBox$DefaultSuggestionDisplay);
_.hideWhenEmpty = true;
_.lastSuggestBox = null;
var Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/DefaultSuggestionDisplay', 596);
function $execute_0(this$static){
  $onSuggestionSelected(this$static.val$callback2, this$static.val$curSuggestion3);
}

function SuggestBox$DefaultSuggestionDisplay$1(val$callback, val$curSuggestion){
  this.val$callback2 = val$callback;
  this.val$curSuggestion3 = val$curSuggestion;
}

defineClass(598, 1, {}, SuggestBox$DefaultSuggestionDisplay$1);
_.execute_1 = function execute_11(){
  $execute_0(this);
}
;
var Lcom_google_gwt_user_client_ui_SuggestBox$DefaultSuggestionDisplay$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/DefaultSuggestionDisplay/1', 598);
function $getSelectedItemIndex(this$static){
  var selectedItem;
  selectedItem = this$static.selectedItem;
  if (selectedItem) {
    return $indexOf_0(this$static.items, selectedItem, 0);
  }
  return -1;
}

function $selectItem_0(this$static, index_0){
  var items;
  items = this$static.items;
  index_0 > -1 && index_0 < items.array.length && $itemOver(this$static, (checkElementIndex(index_0, items.array.length) , dynamicCast(items.array[index_0], 67)), false);
}

function SuggestBox$SuggestionMenu(){
  this.allItems = new ArrayList;
  this.items = new ArrayList;
  $init_0(this, true, create_3($clinit_MenuBar_Resources_default_InlineClientBundleGenerator$menuBarSubMenuIconInitializer()));
  $setClassName(($clinit_DOM() , this.element), '');
  this.focusOnHover = false;
}

defineClass(597, 226, $intern_35, SuggestBox$SuggestionMenu);
var Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenu_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/SuggestionMenu', 597);
function SuggestBox$SuggestionMenuItem(suggestion){
  MenuItem.call(this, suggestion.displayString);
  ($clinit_DOM() , this.element).style['whiteSpace'] = 'nowrap';
  $setClassName(this.element, 'item');
  this.suggestion = suggestion;
}

defineClass(181, 67, {10:1, 67:1, 181:1, 9:1}, SuggestBox$SuggestionMenuItem);
var Lcom_google_gwt_user_client_ui_SuggestBox$SuggestionMenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestBox/SuggestionMenuItem', 181);
function $requestDefaultSuggestions(this$static, callback){
  $onSuggestionsReady(callback, this$static.emptyResponse);
}

defineClass(594, 1, {});
var Lcom_google_gwt_user_client_ui_SuggestOracle_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestOracle', 594);
function SuggestOracle$Request(query){
  this.query = query;
}

defineClass(224, 1, {}, SuggestOracle$Request);
var Lcom_google_gwt_user_client_ui_SuggestOracle$Request_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestOracle/Request', 224);
function SuggestOracle$Response(suggestions){
  this.suggestions = suggestions;
}

defineClass(225, 1, {}, SuggestOracle$Response);
var Lcom_google_gwt_user_client_ui_SuggestOracle$Response_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestOracle/Response', 225);
defineClass(649, 1, {});
var Ljava_util_EventObject_2_classLit = createForClass('java.util', 'EventObject', 649);
function SuggestionEvent(sender, selectedSuggestion){
  this.source = sender;
  this.selectedSuggestion = selectedSuggestion;
}

defineClass(650, 649, {}, SuggestionEvent);
_.toString$ = function toString_14(){
  return '[source=' + this.source + ', selectedSuggestion=' + this.selectedSuggestion + ']';
}
;
var Lcom_google_gwt_user_client_ui_SuggestionEvent_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SuggestionEvent', 650);
function $addTab(this$static, widget){
  $insertTabWidget(this$static, widget, this$static.panel.children.size_0 - 2);
}

function $checkInsertBeforeTabIndex(this$static, beforeIndex){
  if (beforeIndex < 0 || beforeIndex > this$static.panel.children.size_0 - 2) {
    throw new IndexOutOfBoundsException;
  }
}

function $checkTabIndex(this$static, index_0){
  if (index_0 < -1 || index_0 >= this$static.panel.children.size_0 - 2) {
    throw new IndexOutOfBoundsException;
  }
}

function $getSelectedTab(this$static){
  if (!this$static.selectedTab) {
    return -1;
  }
  return $getWidgetIndex(this$static.panel, this$static.selectedTab) - 1;
}

function $insertTabWidget(this$static, widget, beforeIndex){
  var delWidget, focusablePanel;
  $checkInsertBeforeTabIndex(this$static, beforeIndex);
  delWidget = new TabBar$ClickDelegatePanel(this$static, widget);
  $setClassName(($clinit_DOM() , delWidget.element), 'gwt-TabBarItem');
  focusablePanel = delWidget.focusablePanel;
  $clinit_Roles();
  $set(TAB, focusablePanel.element);
  $insert_1(this$static.panel, delWidget, beforeIndex + 1);
  setStyleName((null , $getParentElement(delWidget.element)), 'gwt-TabBarItem-wrapper', true);
}

function $selectTab(this$static, index_0){
  $checkTabIndex(this$static, index_0);
  fire_1(valueOf_1(index_0));
  $setSelectionStyle_0(this$static.selectedTab, false);
  if (index_0 == -1) {
    this$static.selectedTab = null;
    return true;
  }
  this$static.selectedTab = $getWidget(this$static.panel, index_0 + 1);
  $setSelectionStyle_0(this$static.selectedTab, true);
  fire_4(this$static, valueOf_1(index_0));
  return true;
}

function $selectTabByTabWidget(this$static, tabWidget){
  var i, numTabs;
  numTabs = this$static.panel.children.size_0 - 1;
  for (i = 1; i < numTabs; ++i) {
    if ($getWidget(this$static.panel, i) == tabWidget) {
      return $selectTab(this$static, i - 1);
    }
  }
  return false;
}

function $setSelectionStyle_0(item_0, selected){
  if (item_0) {
    if (selected) {
      item_0.addStyleName('gwt-TabBarItem-selected');
      setStyleName(($clinit_DOM() , $clinit_DOM() , $getParentElement(item_0.element)), 'gwt-TabBarItem-wrapper-selected', true);
    }
     else {
      item_0.removeStyleName('gwt-TabBarItem-selected');
      setStyleName(($clinit_DOM() , $clinit_DOM() , $getParentElement(item_0.element)), 'gwt-TabBarItem-wrapper-selected', false);
    }
  }
}

function $setTabEnabled(this$static, index_0, enabled){
  var delPanel;
  delPanel = dynamicCast($getWidget(this$static.panel, index_0 + 1), 161);
  delPanel.enabled = enabled;
  setStyleName(($clinit_DOM() , delPanel.element), 'gwt-TabBarItem-disabled', !enabled);
  setStyleName($getParentElement(delPanel.element), 'gwt-TabBarItem-wrapper-disabled', !enabled);
}

function TabBar(){
  var first, rest;
  this.panel = new HorizontalPanel;
  $initWidget(this, this.panel);
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this.element, 1 | (this.element.__eventBits || 0))):(this.eventsToSink |= 1);
  $setClassName(($clinit_DOM() , this.element), 'gwt-TabBar');
  $clinit_Roles();
  $set(TABLIST, $getElement(this.panel));
  $setVerticalAlignment(this.panel, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM));
  first = new HTML_1;
  rest = new HTML_1;
  $setClassName(first.element, 'gwt-TabBarFirst');
  $setClassName(rest.element, 'gwt-TabBarRest');
  first.element.style['height'] = '100%';
  rest.element.style['height'] = '100%';
  $add_3(this.panel, first);
  $add_3(this.panel, rest);
  first.element.style['height'] = '100%';
  $setCellHeight(this.panel, first, '100%');
  $setCellWidth(this.panel, rest, '100%');
  $setClassName($getParentElement(first.element), 'gwt-TabBarFirst-wrapper');
  $setClassName($getParentElement(rest.element), 'gwt-TabBarRest-wrapper');
}

defineClass(296, 708, {13:1, 11:1, 12:1, 27:1, 10:1, 21:1, 14:1, 113:1, 9:1, 6:1}, TabBar);
_.onClick_0 = function onClick_0(sender){
}
;
_.onKeyDown_0 = function onKeyDown_1(sender, keyCode, modifiers){
}
;
_.onKeyPress = function onKeyPress(sender, keyCode, modifiers){
}
;
_.onKeyUp_0 = function onKeyUp_1(sender, keyCode, modifiers){
}
;
var Lcom_google_gwt_user_client_ui_TabBar_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabBar', 296);
function TabBar$ClickDelegatePanel(this$0, child){
  this.this$01 = this$0;
  this.focusablePanel = new SimplePanel_0(($clinit_FocusPanel() , createFocusable0(($clinit_FocusImpl() , focusHandler_0)?focusHandler_0:(focusHandler_0 = $createFocusHandler()))));
  this.focusablePanel.setWidget(child);
  $initWidget(this, this.focusablePanel);
  this.eventsToSink == -1?($clinit_DOM() , $sinkEvents(this.element, 129 | (this.element.__eventBits || 0))):(this.eventsToSink |= 129);
}

defineClass(161, 708, {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 161:1, 9:1, 6:1}, TabBar$ClickDelegatePanel);
_.addClickHandler = function addClickHandler_5(handler){
  return $addHandler_0(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}
;
_.addKeyDownHandler = function addKeyDownHandler_2(handler){
  return $addHandler_0(this, handler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
}
;
_.addKeyPressHandler = function addKeyPressHandler_2(handler){
  return $addDomHandler(this, handler, ($clinit_KeyPressEvent() , $clinit_KeyPressEvent() , TYPE_4));
}
;
_.addKeyUpHandler = function addKeyUpHandler_2(handler){
  return $addDomHandler(this, handler, ($clinit_KeyUpEvent() , $clinit_KeyUpEvent() , TYPE_5));
}
;
_.onBrowserEvent = function onBrowserEvent_7(event_0){
  if (!this.enabled) {
    return;
  }
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 1:
      $selectTabByTabWidget(this.this$01, this);
      break;
    case 128:
      ($eventGetKeyCode(event_0) & $intern_12) == 13 && $selectTabByTabWidget(this.this$01, this);
      $eventGetKeyCode(event_0) & $intern_12;
      ($eventGetShiftKey(event_0)?1:0) | ($eventGetMetaKey(event_0)?8:0) | ($eventGetCtrlKey(event_0)?2:0) | ($eventGetAltKey(event_0)?4:0);
  }
  $onBrowserEvent(this, event_0);
  this.widget_0.onBrowserEvent(event_0);
}
;
_.enabled = true;
var Lcom_google_gwt_user_client_ui_TabBar$ClickDelegatePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TabBar/ClickDelegatePanel', 161);
function $addValueChangeHandler_0(this$static, handler){
  if (!this$static.valueChangeHandlerInitialized) {
    this$static.valueChangeHandlerInitialized = true;
    $addDomHandler(this$static, new ValueBoxBase$1(this$static), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
  }
  return $addHandler_0(this$static, handler, (!TYPE_20 && (TYPE_20 = new GwtEvent$Type) , TYPE_20));
}

function $getText(this$static){
  return $getPropertyString(($clinit_DOM() , this$static.element), 'value');
}

function $getValueOrThrow(this$static){
  var text_0;
  text_0 = $getPropertyString(($clinit_DOM() , this$static.element), 'value');
  if ($equals_1('', text_0)) {
    return null;
  }
  return text_0;
}

function $selectAll(this$static){
  var length_0;
  length_0 = $getPropertyString(($clinit_DOM() , this$static.element), 'value').length;
  length_0 > 0 && $setSelectionRange(this$static, length_0);
}

function $setReadOnly(this$static){
  ($clinit_DOM() , this$static.element)['readOnly'] = true;
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + 'readonly', true);
}

function $setSelectionRange(this$static, length_0){
  if (!this$static.attached) {
    return;
  }
  if (length_0 < 0) {
    throw new IndexOutOfBoundsException_0('Length must be a positive integer. Length: ' + length_0);
  }
  if (length_0 > $getPropertyString(($clinit_DOM() , this$static.element), 'value').length) {
    throw new IndexOutOfBoundsException_0('From Index: 0  To Index: ' + length_0 + '  Text Length: ' + $getPropertyString(this$static.element, 'value').length);
  }
  $setSelectionRange_0(this$static.element, 0, length_0);
}

function $setText_3(this$static, text_0){
  ($clinit_DOM() , this$static.element)['value'] = text_0 != null?text_0:'';
}

function ValueBoxBase(elem){
  $clinit_FocusWidget();
  FocusWidget.call(this, elem);
  $clinit_LocaleInfo();
}

defineClass(604, 174, $intern_35);
_.onBrowserEvent = function onBrowserEvent_8(event_0){
  var type_0;
  type_0 = ($clinit_DOM() , $eventGetTypeInt(event_0.type));
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_2(){
}
;
_.valueChangeHandlerInitialized = false;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 604);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_FocusWidget();
  $clinit_ValueBoxBase$TextAlignment();
}

function $getValue_0(this$static){
  var raw;
  raw = $getValueOrThrow(this$static);
  return raw == null?'':raw;
}

function TextBoxBase(elem){
  ValueBoxBase.call(this, elem, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser)));
}

defineClass(228, 604, $intern_35);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 228);
function TextArea_0(){
  $clinit_TextBoxBase();
  TextBoxBase.call(this, $doc.createElement('textarea'));
  $setClassName(($clinit_DOM() , this.element), 'gwt-TextArea');
}

defineClass(651, 228, $intern_35, TextArea_0);
var Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextArea', 651);
function TextBox(){
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e));
}

function TextBox_0(element){
  TextBoxBase.call(this, element);
  $setClassName(($clinit_DOM() , this.element), 'gwt-TextBox');
}

defineClass(30, 228, {13:1, 11:1, 12:1, 10:1, 14:1, 30:1, 9:1, 6:1}, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 30);
function ValueBoxBase$1(this$0){
  this.this$01 = this$0;
}

defineClass(609, 1, $intern_45, ValueBoxBase$1);
_.onChange = function onChange(event_0){
  fire_5(this.this$01, $getValue_0(this.this$01));
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase/1', 609);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_1 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_ValueBoxBase$TextAlignment();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_2, 81, 0, [CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(81, 7, $intern_46);
var CENTER_1, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 81, Ljava_lang_Enum_2_classLit, values_12);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(605, 81, $intern_46, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 605, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(606, 81, $intern_46, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 606, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(607, 81, $intern_46, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 607, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(608, 81, $intern_46, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 608, Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, null);
function $add_6(this$static, w){
  var td, tr;
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = $createAlignedTd_0(this$static);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $createAlignedTd_0(this$static){
  var td;
  td = ($clinit_DOM() , $doc.createElement('td'));
  $setCellHorizontalAlignment(td, this$static.horzAlign);
  $setCellVerticalAlignment(td, this$static.vertAlign);
  return td;
}

function $insert_2(this$static, w, beforeIndex){
  var td, tr;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  tr = ($clinit_DOM() , $doc.createElement('tr'));
  td = $createAlignedTd_0(this$static);
  $appendChild(tr, resolve(td));
  insertChild(this$static.body_0, tr, beforeIndex);
  $insert(this$static, w, td, beforeIndex, false);
}

function $remove_6(this$static, w){
  var removed, td;
  td = ($clinit_DOM() , $clinit_DOM() , $getParentElement(w.element));
  removed = $remove_0(this$static, w);
  removed && $removeChild(this$static.body_0, (null , $getParentElement(td)));
  return removed;
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(($clinit_DOM() , this.table), 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(39, 192, $intern_36, VerticalPanel);
_.remove = function remove_12(w){
  return $remove_6(this, w);
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 39);
function $add_7(this$static, w){
  $insert_3(this$static, w, this$static.size_0);
}

function $get_1(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  return this$static.array[index_0];
}

function $indexOf_1(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_3(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 6, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_7(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_8(this$static, w){
  var index_0;
  index_0 = $indexOf_1(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_7(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_2, 6, 4, 0, 1);
}

defineClass(200, 1, {}, WidgetCollection);
_.iterator = function iterator_5(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 200);
function $next_1(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(201, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_1(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.remove_0 = function remove_13(){
  if (!this.currentWidget) {
    throw new IllegalStateException;
  }
  this.this$01.parent_0.remove(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 201);
function $clinit_ClippedImageImpl(){
  $clinit_ClippedImageImpl = emptyMethod;
  $clinit_UriUtils();
  new SafeUriString(getModuleBaseURL() + 'clear.cache.gif');
}

function $clinit_ClippedImagePrototype(){
  $clinit_ClippedImagePrototype = emptyMethod;
  $clinit_ClippedImageImpl();
}

function ClippedImagePrototype(){
  $clinit_ClippedImagePrototype();
}

defineClass(672, 742, {}, ClippedImagePrototype);
var Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImagePrototype', 672);
function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplSafari;
  implWidget = implPanel?new FocusImpl:implPanel;
}

function FocusImpl(){
}

defineClass(483, 1, {}, FocusImpl);
_.focus_0 = function focus_1(elem){
  elem.focus();
}
;
var implPanel, implWidget;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImpl', 483);
function $createFocusHandler(){
  return function(evt){
    var div = this.parentNode;
    div.onfocus && $wnd.setTimeout(function(){
      div.focus();
    }
    , 0);
  }
  ;
}

function createFocusable0(focusHandler){
  $clinit_FocusImpl();
  var div = $doc.createElement('div');
  div.tabIndex = 0;
  var input_0 = $doc.createElement('input');
  input_0.type = 'text';
  input_0.tabIndex = -1;
  input_0.setAttribute('role', 'presentation');
  var style = input_0.style;
  style.opacity = 0;
  style.height = '1px';
  style.width = '1px';
  style.zIndex = -1;
  style.overflow = 'hidden';
  style.position = 'absolute';
  input_0.addEventListener('focus', focusHandler, false);
  div.appendChild(input_0);
  return div;
}

defineClass(726, 483, {});
var focusHandler_0;
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplStandard', 726);
function $blur(elem){
  $wnd.setTimeout(function(){
    elem.blur();
  }
  , 0);
}

function $focus(elem){
  $wnd.setTimeout(function(){
    elem.focus();
  }
  , 0);
}

function FocusImplSafari(){
}

defineClass(499, 726, {}, FocusImplSafari);
_.focus_0 = function focus_2(elem){
  $focus(elem);
}
;
var Lcom_google_gwt_user_client_ui_impl_FocusImplSafari_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'FocusImplSafari', 499);
function $clinit_HyperlinkImplSafari(){
  $clinit_HyperlinkImplSafari = emptyMethod;
  shiftIsModifier = navigator.userAgent.indexOf('Chrome') != -1;
}

var shiftIsModifier = false;
function $setClip(popup, rect){
  $setPropertyImpl(popup.style, 'clip', rect);
}

function $setSelectionRange_0(elem, pos, length_0){
  try {
    elem.setSelectionRange(pos, pos + length_0);
  }
   catch (e) {
  }
}

function $clinit_CalendarModel(){
  $clinit_CalendarModel = emptyMethod;
  dayOfWeekNames = initDim(Ljava_lang_String_2_classLit, $intern_2, 2, 7, 4, 1);
  dayOfMonthNames = initDim(Ljava_lang_String_2_classLit, $intern_2, 2, 32, 4, 1);
}

function $formatCurrentMonthAndYear(this$static){
  return $format(getFormat(($clinit_DateTimeFormat$PredefinedFormat() , YEAR_MONTH_ABBR)), this$static.currentMonth, null);
}

function $formatDayOfMonth(date){
  return dayOfMonthNames[date.getDate_0()];
}

function $formatMonth_0(this$static, month){
  return this$static.monthOfYearNames[month];
}

function $getCurrentFirstDayOfFirstWeek(this$static){
  var d, offset, start_0, wkDayOfMonth1st;
  wkDayOfMonth1st = this$static.currentMonth.getDay_0();
  start_0 = ($clinit_CalendarUtil() , $clinit_CalendarUtil() , startingDay);
  if (wkDayOfMonth1st == start_0) {
    return new Date_2(this$static.currentMonth.getTime_0());
  }
   else {
    d = new Date_2(this$static.currentMonth.getTime_0());
    offset = wkDayOfMonth1st - start_0 > 0?wkDayOfMonth1st - start_0:7 - (start_0 - wkDayOfMonth1st);
    d.setDate_0(d.getDate_0() + -offset);
    return d;
  }
}

function $isInCurrentMonth(this$static, date){
  return this$static.currentMonth.getMonth_0() == date.getMonth_0();
}

function $isMonthBeforeYear(){
  var i, monthAndYearPattern;
  monthAndYearPattern = getFormat(($clinit_DateTimeFormat$PredefinedFormat() , YEAR_MONTH_ABBR)).pattern;
  for (i = 0; i < monthAndYearPattern.length; ++i) {
    switch (monthAndYearPattern.charCodeAt(i)) {
      case 121:
        return false;
      case 77:
      case 76:
        return true;
    }
  }
  return true;
}

function $setCurrentMonth(this$static, currentDate){
  this$static.currentMonth.setYear(currentDate.getYear());
  this$static.currentMonth.setMonth_0(currentDate.getMonth_0());
}

function $shiftCurrentMonth(this$static, deltaMonths){
  addMonthsToDate(this$static.currentMonth, deltaMonths);
}

function CalendarModel(){
  $clinit_CalendarModel();
  var date, dayOfWeek, i, i0, i1;
  this.monthOfYearNames = initDim(Ljava_lang_String_2_classLit, $intern_2, 2, 12, 4, 1);
  this.currentMonth = new Date_0;
  setToFirstDayOfMonth(this.currentMonth);
  date = new Date_0;
  for (i0 = 1; i0 <= 7; i0++) {
    date.setDate_0(i0);
    dayOfWeek = date.getDay_0();
    dayOfWeekNames[dayOfWeek] = $format(($clinit_DateTimeFormat_0() , getFormat_0('ccccc', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), date, null);
  }
  date.setMonth_0(0);
  for (i1 = 1; i1 < 32; ++i1) {
    date.setDate_0(i1);
    dayOfMonthNames[i1] = $format(($clinit_DateTimeFormat_0() , getFormat_0('d', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), date, null);
  }
  date.setDate_0(1);
  for (i = 0; i < 12; ++i) {
    date.setMonth_0(i);
    this.monthOfYearNames[i] = $format(getFormat(($clinit_DateTimeFormat$PredefinedFormat() , MONTH_ABBR)), date, null);
  }
}

defineClass(665, 1, {}, CalendarModel);
var dayOfMonthNames, dayOfWeekNames;
var Lcom_google_gwt_user_datepicker_client_CalendarModel_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CalendarModel', 665);
function $clinit_CalendarUtil(){
  $clinit_CalendarUtil = emptyMethod;
  var dateTimeFormatInfo;
  dateTimeFormatInfo = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1));
  firstDayOfWeekend = 6;
  lastDayOfWeekend = 0;
  startingDay = dateTimeFormatInfo.firstDayOfTheWeek();
}

function addMonthsToDate(date, months){
  $clinit_CalendarUtil();
  var month, resultMonth, resultMonthCount, resultYear, year;
  if (months != 0) {
    month = date.getMonth_0();
    year = date.getYear();
    resultMonthCount = year * 12 + month + months;
    resultYear = round_int(Math.floor(resultMonthCount / 12));
    resultMonth = resultMonthCount - resultYear * 12;
    date.setMonth_0(resultMonth);
    date.setYear(resultYear);
  }
}

function copyDate(date){
  $clinit_CalendarUtil();
  var newDate;
  if (!date) {
    return null;
  }
  newDate = new Date_0;
  newDate.setTime_0(date.getTime_0());
  return newDate;
}

function getDaysBetween(start_0, finish){
  $clinit_CalendarUtil();
  var aTime, adjust, bTime;
  start_0 = copyDate(start_0);
  resetTime(start_0);
  finish = copyDate(finish);
  resetTime(finish);
  aTime = start_0.getTime_0();
  bTime = finish.getTime_0();
  adjust = {l:3600000, m:0, h:0};
  adjust = gt(bTime, aTime)?adjust:neg(adjust);
  return toInt(div_0(add_1(sub_0(bTime, aTime), adjust), {l:2513920, m:20, h:0}));
}

function resetMilliseconds(msec){
  var offset;
  offset = toInt(mod(msec, {l:1000, m:0, h:0}));
  offset < 0 && (offset += 1000);
  return sub_0(msec, fromInt(offset));
}

function resetTime(date){
  var msec;
  msec = resetMilliseconds(date.getTime_0());
  date.setTime_0(msec);
  date.setHours_0(0);
  date.setMinutes_0(0);
  date.setSeconds_0(0);
}

function setToFirstDayOfMonth(date){
  $clinit_CalendarUtil();
  resetTime(date);
  date.setDate_0(1);
}

var firstDayOfWeekend = 0, lastDayOfWeekend = 0, startingDay = 0;
function $addMonths(this$static, numMonths){
  $shiftCurrentMonth(this$static.datePicker.model, numMonths);
  $refreshAll(this$static.datePicker);
}

defineClass(736, 708, $intern_37);
var Lcom_google_gwt_user_datepicker_client_DatePickerComponent_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePickerComponent', 736);
defineClass(737, 736, $intern_37);
var Lcom_google_gwt_user_datepicker_client_CalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CalendarView', 737);
function $getCell(this$static, i){
  return dynamicCast($get_0(this$static.cellList, i), 93);
}

function $isActive(cell){
  return !!cell && cell.enabled;
}

function $setHighlighted(this$static, nextHighlighted){
  var oldHighlighted;
  if (nextHighlighted == this$static.highlightedCell) {
    return;
  }
  oldHighlighted = this$static.highlightedCell;
  this$static.highlightedCell = nextHighlighted;
  !!oldHighlighted && ($fireEvent_0(oldHighlighted.this$11.this$01.datePicker, new DatePicker$DateHighlightEvent) , $updateStyle(oldHighlighted));
  !!this$static.highlightedCell && $onHighlighted(this$static.highlightedCell);
}

function $setSelected(this$static, cell){
  var last;
  last = this$static.selectedCell;
  this$static.selectedCell = cell;
  !!last && $onSelected(last, false);
  !!this$static.selectedCell && $onSelected(this$static.selectedCell, true);
}

defineClass(659, 658, $intern_36);
_.onBrowserEvent = function onBrowserEvent_9(event_0){
  var cell, e, td;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 1:
      {
        cell = (td = $getEventTargetCell(this, event_0) , td?dynamicCast($get(this.elementToCell, td), 93):null);
        !!cell && cell.enabled && $setSelected(this, cell);
        break;
      }

    case 32:
      {
        e = $eventGetFromElement(event_0);
        if (e) {
          cell = dynamicCast($get(this.elementToCell, e), 93);
          cell == this.highlightedCell && $setHighlighted(this, null);
        }
        break;
      }

    case 16:
      {
        e = $eventGetToElement(event_0);
        if (e) {
          cell = dynamicCast($get(this.elementToCell, e), 93);
          !!cell && cell.enabled && $setHighlighted(this, cell);
        }
        break;
      }

  }
}
;
_.onUnload = function onUnload_2(){
  $setHighlighted(this, null);
}
;
var Lcom_google_gwt_user_datepicker_client_CellGridImpl_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CellGridImpl', 659);
function CellGridImpl$Cell(this$0, elem, value_0){
  this.this$01 = this$0;
  this.value_0 = value_0;
  $add_5(this$0.cellList, this);
  !!elem && $setElement_0(this, ($clinit_DOM() , elem));
  $put(this$0.elementToCell, this);
  $addDomHandler(this, new CellGridImpl$Cell$1(this), ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
  $addDomHandler(this, new CellGridImpl$Cell$2(this), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
}

function CellGridImpl$Cell_0(this$0, value_0){
  CellGridImpl$Cell.call(this, this$0, $doc.createElement('div'), value_0);
}

defineClass(93, 6, $intern_47);
_.enabled = true;
var Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CellGridImpl/Cell', 93);
function CellGridImpl$Cell$1(this$1){
  this.this$11 = this$1;
}

defineClass(662, 1, {188:1, 31:1}, CellGridImpl$Cell$1);
_.onKeyDown = function onKeyDown_2(event_0){
  ($eventGetKeyCode(event_0.nativeEvent) == 13 || $eventGetKeyCode(event_0.nativeEvent) == 32) && $isActive(this.this$11) && $setSelected(this.this$11.this$01, this.this$11);
}
;
var Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CellGridImpl/Cell/1', 662);
function CellGridImpl$Cell$2(this$1){
  this.this$11 = this$1;
}

defineClass(663, 1, $intern_42, CellGridImpl$Cell$2);
_.onClick = function onClick_1(event_0){
  $isActive(this.this$11) && $setSelected(this.this$11.this$01, this.this$11);
}
;
var Lcom_google_gwt_user_datepicker_client_CellGridImpl$Cell$2_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'CellGridImpl/Cell/2', 663);
function $clinit_DateBox(){
  $clinit_DateBox = emptyMethod;
  DEFAULT_FORMAT = new DateBox$DefaultFormat;
}

function $parseDate(this$static, reportError){
  var text_0;
  reportError && this$static.format.reset_0(this$static, false);
  text_0 = $trim($getText(this$static.box));
  return this$static.format.parse_0(this$static, text_0, reportError);
}

function $preventDatePickerPopup(this$static){
  this$static.allowDPShow = false;
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new DateBox$1(this$static));
}

function $setFormat(this$static, format){
  var date;
  if (this$static.format != format) {
    date = $parseDate(this$static, true);
    this$static.format.reset_0(this$static, true);
    this$static.format = format;
    $setValue_0(this$static, copyDate(this$static.picker.value_0), date, false, true);
  }
}

function $setValue_0(this$static, oldDate, date, fireEvents, updateText){
  !!date && $setCurrentMonth_0(this$static.picker, date);
  $setValue_1(this$static.picker, date, false);
  if (updateText) {
    this$static.format.reset_0(this$static, false);
    $setText_3(this$static.box, this$static.format.format_0(this$static, date));
  }
  fireEvents && !!TYPE_20 && oldDate != date && (!oldDate || !oldDate.equals$(date)) && $fireEvent_0(this$static, new DateChangeEvent(date));
}

function $showDatePicker(this$static){
  var current;
  current = $parseDate(this$static, false);
  !current && (current = new Date_0);
  $setCurrentMonth_0(this$static.picker, current);
  $showRelativeTo(this$static.popup, this$static);
}

function $updateDateFromTextBox(this$static){
  var parsedDate;
  parsedDate = $parseDate(this$static, true);
  !!parsedDate && $setValue_0(this$static, copyDate(this$static.picker.value_0), parsedDate, true, false);
}

function DateBox(){
  $clinit_DateBox();
  DateBox_0.call(this, new DatePicker, DEFAULT_FORMAT);
}

function DateBox_0(picker, format){
  var handler;
  this.box = new TextBox;
  this.picker = picker;
  this.popup = new PopupPanel(true);
  this.format = format;
  $addAutoHidePartner(this.popup, $getElement(this.box));
  this.popup.setWidget(picker);
  $setStyleName(this.popup, 'dateBoxPopup');
  $initWidget(this, this.box);
  $setClassName(($clinit_DOM() , this.element), 'gwt-DateBox');
  handler = new DateBox$DateBoxHandler(this);
  $addHandler_0(picker, handler, (!TYPE_20 && (TYPE_20 = new GwtEvent$Type) , TYPE_20));
  $addDomHandler(this.box, handler, ($clinit_FocusEvent() , $clinit_FocusEvent() , TYPE_2));
  $addDomHandler(this.box, handler, ($clinit_BlurEvent() , $clinit_BlurEvent() , TYPE));
  $addDomHandler(this.box, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $addDomHandler(this.box, handler, ($clinit_KeyDownEvent() , $clinit_KeyDownEvent() , TYPE_3));
  $addHandler_0(this.popup, handler, TYPE_16?TYPE_16:(TYPE_16 = new GwtEvent$Type));
  $setValue_0(this, copyDate(this.picker.value_0), null, false, true);
}

defineClass(71, 708, {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 9:1, 6:1, 71:1}, DateBox);
_.allowDPShow = true;
var DEFAULT_FORMAT;
var Lcom_google_gwt_user_datepicker_client_DateBox_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateBox', 71);
function DateBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(619, 1, {}, DateBox$1);
_.execute_1 = function execute_12(){
  this.this$01.allowDPShow = true;
}
;
var Lcom_google_gwt_user_datepicker_client_DateBox$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateBox/1', 619);
function $normalize(this$static, date){
  var dateBox;
  dateBox = this$static.this$01;
  return this$static.this$01.format.parse_0(dateBox, this$static.this$01.format.format_0(dateBox, date), false);
}

function DateBox$DateBoxHandler(this$0){
  this.this$01 = this$0;
}

defineClass(618, 1, {694:1, 187:1, 749:1, 188:1, 684:1, 143:1, 31:1}, DateBox$DateBoxHandler);
_.onBlur = function onBlur_0(event_0){
  this.this$01.popup.showing || $updateDateFromTextBox(this.this$01);
}
;
_.onClick = function onClick_2(event_0){
  $showDatePicker(this.this$01);
}
;
_.onClose = function onClose_0(event_0){
  this.this$01.allowDPShow && $updateDateFromTextBox(this.this$01);
}
;
_.onKeyDown = function onKeyDown_3(event_0){
  switch ($eventGetKeyCode(event_0.nativeEvent)) {
    case 13:
    case 9:
      $updateDateFromTextBox(this.this$01);
    case 27:
    case 38:
      this.this$01.popup.hide(false);
      break;
    case 40:
      $showDatePicker(this.this$01);
  }
}
;
_.onValueChange = function onValueChange_3(event_0){
  $setValue_0(this.this$01, $parseDate(this.this$01, false), $normalize(this, dynamicCast(event_0.getValue(), 18)), true, true);
  this.this$01.popup.hide(false);
  $preventDatePickerPopup(this.this$01);
  $setFocus(this.this$01.box);
}
;
var Lcom_google_gwt_user_datepicker_client_DateBox$DateBoxHandler_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateBox/DateBoxHandler', 618);
function DateBox$DefaultFormat(){
  this.dateTimeFormat = getFormat(($clinit_DateTimeFormat$PredefinedFormat() , DATE_TIME_MEDIUM));
}

defineClass(617, 1, {}, DateBox$DefaultFormat);
_.format_0 = function format_1(box, date){
  return !date?'':$format(this.dateTimeFormat, date, null);
}
;
_.parse_0 = function parse_1(dateBox, dateText, reportError){
  var date;
  date = null;
  try {
    dateText.length > 0 && (date = $parse_1(this.dateTimeFormat, dateText));
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 23)) {
      try {
        date = new Date_3(dateText);
        date = $parse_1(this.dateTimeFormat, $format(this.dateTimeFormat, date, null));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 23)) {
          reportError && setStyleName(($clinit_DOM() , dateBox.element), 'dateBoxFormatError', true);
          return null;
        }
         else
          throw unwrap($e0);
      }
    }
     else
      throw unwrap($e1);
  }
  return date;
}
;
_.reset_0 = function reset_0(dateBox, abandon){
  setStyleName(($clinit_DOM() , dateBox.element), 'dateBoxFormatError', false);
}
;
var Lcom_google_gwt_user_datepicker_client_DateBox$DefaultFormat_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateBox/DefaultFormat', 617);
function DateChangeEvent(value_0){
  ValueChangeEvent.call(this, copyDate(value_0));
}

defineClass(234, 167, {}, DateChangeEvent);
_.getValue = function getValue_0(){
  return copyDate(dynamicCast(this.value_0, 18));
}
;
var Lcom_google_gwt_user_datepicker_client_DateChangeEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DateChangeEvent', 234);
function $addStyleToDates(this$static, styleName, date){
  $setStyleName_3(this$static.styler, date, styleName, true);
  $isDateVisible(this$static, date) && $addStyleToDate(this$static.view, styleName, date);
}

function $getStyleOfDate(this$static, date){
  return $getStyleName(this$static.styler, date);
}

function $isDateVisible(this$static, date){
  var first, last, r;
  r = this$static.view;
  first = r.firstDisplayed;
  last = r.lastDisplayed;
  return !!date && ($clinit_CalendarUtil() , first.getYear() == date.getYear() && first.getMonth_0() == date.getMonth_0() && first.getDate_0() == date.getDate_0() || last.getYear() == date.getYear() && last.getMonth_0() == date.getMonth_0() && last.getDate_0() == date.getDate_0() || lt(first.getTime_0(), date.getTime_0()) && gt(last.getTime_0(), date.getTime_0()));
}

function $refreshAll(this$static){
  $refresh(this$static.view);
  $refresh_0(this$static.monthAndYearSelector);
  $isAttached(this$static) && undefined;
  $setAriaSelectedCell(this$static.view, this$static.value_0);
}

function $removeStyleFromDates(this$static, styleName, date){
  $setStyleName_3(this$static.styler, date, styleName, false);
  $isDateVisible(this$static, date) && $removeStyleFromDate(this$static.view, styleName, date);
}

function $setCurrentMonth_0(this$static, month){
  $setCurrentMonth(this$static.model, month);
  $refreshAll(this$static);
}

function $setStyleName_2(this$static, styleName){
  this$static.css = new DatePicker$StandardCss(styleName);
  $setClassName(($clinit_DOM() , this$static.element), styleName);
}

function $setValue_1(this$static, newValue, fireEvents){
  var oldValue;
  oldValue = this$static.value_0;
  !!oldValue && $removeStyleFromDates(this$static, $day(this$static.css, 'Value'), oldValue);
  this$static.value_0 = copyDate(newValue);
  !!this$static.value_0 && $addStyleToDates(this$static, $day(this$static.css, 'Value'), this$static.value_0);
  $setAriaSelectedCell(this$static.view, newValue);
  fireEvents && !!TYPE_20 && oldValue != newValue && (!oldValue || !oldValue.equals$(newValue)) && $fireEvent_0(this$static, new DateChangeEvent(newValue));
}

function DatePicker(){
  DatePicker_0.call(this, new DefaultMonthSelector, new DefaultCalendarView, new CalendarModel);
}

function DatePicker_0(monthAndYearSelector, view, model){
  var panel, yearListBox;
  this.styler = new DatePicker$DateStyler;
  this.css = ($clinit_DatePicker$StandardCss() , DEFAULT_0);
  this.model = model;
  this.monthAndYearSelector = monthAndYearSelector;
  monthAndYearSelector.datePicker = this;
  this.view = view;
  view.datePicker = this;
  $setup(view);
  monthAndYearSelector.monthBackwards = $createNavigationButton(monthAndYearSelector, '&lsaquo;', -1, monthAndYearSelector.datePicker.css.baseName + 'PreviousButton');
  monthAndYearSelector.monthForwards = $createNavigationButton(monthAndYearSelector, '&rsaquo;', 1, monthAndYearSelector.datePicker.css.baseName + 'NextButton');
  monthAndYearSelector.yearBackwards = $createNavigationButton(monthAndYearSelector, '&laquo;', -12, monthAndYearSelector.datePicker.css.baseName + 'PreviousYearButton');
  monthAndYearSelector.yearForwards = $createNavigationButton(monthAndYearSelector, '&raquo;', 12, monthAndYearSelector.datePicker.css.baseName + 'NextYearButton');
  monthAndYearSelector.monthSelect = $createMonthSelect(monthAndYearSelector);
  monthAndYearSelector.yearSelect = (yearListBox = new ListBox , $addDomHandler(yearListBox, new DefaultMonthSelector$3(monthAndYearSelector, yearListBox), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0)) , yearListBox);
  monthAndYearSelector.grid = new FlexTable;
  $setStyleName(monthAndYearSelector.grid, monthAndYearSelector.datePicker.css.baseName + 'MonthSelector');
  $setupGrid(monthAndYearSelector);
  $initWidget(monthAndYearSelector, monthAndYearSelector.grid);
  panel = new VerticalPanel;
  $initWidget(this, panel);
  $setClassName(($clinit_DOM() , panel.element), this.css.widgetName);
  $setStyleName_2(this, this.css.widgetName);
  $add_6(panel, this.monthAndYearSelector);
  $add_6(panel, this.view);
  $setCurrentMonth_0(this, new Date_0);
  $addStyleToDates(this, $day(this.css, 'Today'), new Date_0);
}

defineClass(229, 708, $intern_37, DatePicker);
_.onLoad = function onLoad_3(){
}
;
_.setStyleName = function setStyleName_1(styleName){
  $setStyleName_2(this, styleName);
}
;
_.visibleYearCount = 21;
_.yearAndMonthDropdownVisible = false;
_.yearArrowsVisible = false;
var Lcom_google_gwt_user_datepicker_client_DatePicker_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePicker', 229);
function DatePicker$DateHighlightEvent(){
}

defineClass(231, 733, {}, DatePicker$DateHighlightEvent);
var Lcom_google_gwt_user_datepicker_client_DatePicker$DateHighlightEvent_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePicker/DateHighlightEvent', 231);
function $getStyleName(this$static, d){
  return dynamicCastToString(this$static.info.get_1(d.getYear() + '/' + d.getMonth_0() + '/' + d.getDate_0()));
}

function $setStyleName_3(this$static, d, styleName, add_0){
  var current, key_0, newValue;
  styleName = ' ' + styleName + ' ';
  key_0 = d.getYear() + '/' + d.getMonth_0() + '/' + d.getDate_0();
  current = dynamicCastToString(this$static.info.get_1(key_0));
  if (add_0) {
    current == null?this$static.info.put(key_0, styleName):current.indexOf(styleName) == -1 && this$static.info.put(key_0, current + styleName);
  }
   else {
    if (current != null) {
      newValue = $replaceAll(current, styleName, '');
      $trim(newValue).length == 0?this$static.info.remove_3(key_0):this$static.info.put(key_0, newValue);
    }
  }
}

function DatePicker$DateStyler(){
  this.info = new HashMap;
}

defineClass(616, 1, {}, DatePicker$DateStyler);
var Lcom_google_gwt_user_datepicker_client_DatePicker$DateStyler_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePicker/DateStyler', 616);
function $clinit_DatePicker$StandardCss(){
  $clinit_DatePicker$StandardCss = emptyMethod;
  DEFAULT_0 = new DatePicker$StandardCss('gwt-DatePicker');
}

function $day(this$static, dayModifier){
  return this$static.baseName + 'Day' + 'Is' + dayModifier;
}

function DatePicker$StandardCss(widgetName){
  $clinit_DatePicker$StandardCss();
  this.widgetName = widgetName;
  this.baseName = 'datePicker';
}

defineClass(230, 1, {}, DatePicker$StandardCss);
var DEFAULT_0;
var Lcom_google_gwt_user_datepicker_client_DatePicker$StandardCss_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DatePicker/StandardCss', 230);
function $addStyleToDate(this$static, styleName, date){
  $addStyleName_0($getCell_0(this$static, date), styleName);
}

function $getCell_0(this$static, d){
  var cell, index_0;
  index_0 = getDaysBetween(this$static.firstDisplayed, d);
  if (index_0 < 0 || this$static.grid.cellList.array.length <= index_0) {
    return null;
  }
  cell = $getCell(this$static.grid, index_0);
  if (cell.value_0.getDate_0() != d.getDate_0()) {
    throw new IllegalStateException_0(d + ' cannot be associated with cell ' + cell + ' as it has date ' + cell.value_0);
  }
  return cell;
}

function $refresh(this$static){
  var cell, i;
  this$static.firstDisplayed = $getCurrentFirstDayOfFirstWeek(this$static.datePicker.model);
  this$static.firstDisplayed.getDate_0() == 1 && addDays(this$static.firstDisplayed, -7);
  this$static.lastDisplayed.setTime_0(this$static.firstDisplayed.getTime_0());
  for (i = 0; i < this$static.grid.cellList.array.length; i++) {
    i != 0 && addDays(this$static.lastDisplayed, 1);
    cell = $getCell(this$static.grid, i);
    $update_0(cell, this$static.lastDisplayed);
  }
  $setAriaSelectedCell(this$static, null);
}

function $removeStyleFromDate(this$static, styleName, date){
  $removeStyleName_0($getCell_0(this$static, date), styleName);
}

function $setAriaSelectedCell(this$static, date){
  var newSelectedCell;
  !!this$static.ariaSelectedCell && $setAriaSelected(this$static.ariaSelectedCell);
  newSelectedCell = date?$getCell_0(this$static, date):null;
  !!newSelectedCell && ($clinit_Roles() , $setAriaSelectedState(($clinit_DOM() , newSelectedCell.element), ($clinit_SelectedValue() , $clinit_SelectedValue() , TRUE_0)));
  this$static.ariaSelectedCell = newSelectedCell;
}

function $setup(this$static){
  var cell, column, dayIdx, formatter, i, row, shift_0, weekendEndColumn, weekendStartColumn;
  formatter = this$static.grid.cellFormatter;
  weekendStartColumn = -1;
  weekendEndColumn = -1;
  for (i = 0; i < 7; i++) {
    shift_0 = ($clinit_CalendarUtil() , $clinit_CalendarUtil() , startingDay);
    dayIdx = i + shift_0 < 7?i + shift_0:i + shift_0 - 7;
    $setText_1(this$static.grid, i, ($clinit_CalendarModel() , dayOfWeekNames)[dayIdx]);
    if (dayIdx == firstDayOfWeekend || dayIdx == lastDayOfWeekend) {
      $setStyleName_1(formatter, i, this$static.datePicker.css.baseName + 'WeekendLabel');
      weekendStartColumn == -1?(weekendStartColumn = i):(weekendEndColumn = i);
    }
     else {
      $setStyleName_1(formatter, i, this$static.datePicker.css.baseName + 'WeekdayLabel');
    }
  }
  for (row = 1; row <= 6; row++) {
    for (column = 0; column < 7; column++) {
      cell = new DefaultCalendarView$CellGrid$DateCell(this$static.grid, column == weekendStartColumn || column == weekendEndColumn);
      $setWidget_2(this$static.grid, row, column, cell);
    }
  }
  $initWidget(this$static, this$static.grid);
  $setStyleName(this$static.grid, this$static.datePicker.css.baseName + 'Days');
}

function DefaultCalendarView(){
  this.grid = new DefaultCalendarView$CellGrid(this);
  this.lastDisplayed = new Date_0;
}

function addDays(date, days){
  $clinit_CalendarUtil();
  date.setDate_0(date.getDate_0() + days);
  date.getHours_0() != 0 && date.setHours_0(0);
}

defineClass(657, 737, $intern_37, DefaultCalendarView);
var Lcom_google_gwt_user_datepicker_client_DefaultCalendarView_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultCalendarView', 657);
function DefaultCalendarView$CellGrid(this$0){
  this.this$01 = this$0;
  HTMLTable.call(this);
  $setCellFormatter(this, new HTMLTable$CellFormatter(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter(this));
  this.elementToCell = new ElementMapperImpl;
  this.cellList = new ArrayList;
  $setPropertyInt(this.tableElem, 'cellPadding', 0);
  $setPropertyInt(this.tableElem, 'cellSpacing', 0);
  $setPropertyString(this.tableElem, 'border', '0');
  this.eventsToSink == -1?sinkEvents(($clinit_DOM() , this.element), 49 | (this.element.__eventBits || 0)):(this.eventsToSink |= 49);
  $resizeColumns(this);
  $resizeRows(this);
}

defineClass(660, 659, $intern_36, DefaultCalendarView$CellGrid);
var Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultCalendarView/CellGrid', 660);
function $addStyleName_0(this$static, styleName){
  $indexOf_2(this$static.dateStyle, ' ' + styleName + ' ') == -1 && (this$static.dateStyle += styleName + ' ');
  $updateStyle(this$static);
}

function $onHighlighted(this$static){
  $fireEvent_0(this$static.this$11.this$01.datePicker, new DatePicker$DateHighlightEvent);
  $updateStyle(this$static);
}

function $onSelected(this$static, selected){
  if (selected) {
    $setValue_1(this$static.this$11.this$01.datePicker, this$static.value_0, true);
    !$isInCurrentMonth(this$static.this$11.this$01.datePicker.model, this$static.value_0) && $setCurrentMonth_0(this$static.this$11.this$01.datePicker, this$static.value_0);
  }
  $updateStyle(this$static);
}

function $removeStyleName_0(this$static, styleName){
  this$static.dateStyle = $replace_1(this$static.dateStyle, ' ' + styleName + ' ');
  $updateStyle(this$static);
}

function $setAriaSelected(this$static){
  $clinit_Roles();
  $setAriaSelectedState(($clinit_DOM() , this$static.element), ($clinit_SelectedValue() , $clinit_SelectedValue() , FALSE_0));
}

function $update_0(this$static, current){
  var extraStyle, value_0;
  this$static.enabled = true;
  $updateStyle(this$static);
  this$static.value_0.setTime_0(current.getTime_0());
  value_0 = $formatDayOfMonth(this$static.value_0);
  $setInnerText(($clinit_DOM() , this$static.element), value_0);
  this$static.dateStyle = this$static.cellStyle;
  if ($isInCurrentMonth(this$static.this$11.this$01.datePicker.model, this$static.value_0)) {
    $setTabIndex(this$static.element, 0);
    extraStyle = $getStyleOfDate(this$static.this$11.this$01.datePicker, current);
    extraStyle != null && (this$static.dateStyle += ' ' + extraStyle);
  }
   else {
    $setTabIndex(this$static.element, -1);
    this$static.dateStyle += ' ' + (this$static.this$11.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Filler');
  }
  this$static.dateStyle += ' ';
  $updateStyle(this$static);
}

function $updateStyle(this$static){
  var accum;
  accum = this$static.dateStyle;
  if (this$static == this$static.this$01.highlightedCell) {
    accum += ' ' + (this$static.this$11.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Highlighted');
    this$static == this$static.this$01.highlightedCell && this$static.this$01.selectedCell == this$static && (accum += ' ' + (this$static.this$11.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Value' + 'AndHighlighted'));
  }
  this$static.enabled || (accum += ' ' + (this$static.this$11.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Disabled'));
  $setClassName(($clinit_DOM() , this$static.element), accum);
}

function DefaultCalendarView$CellGrid$DateCell(this$1, isWeekend){
  this.this$11 = this$1;
  CellGridImpl$Cell_0.call(this, this$1, new Date_0);
  this.cellStyle = this$1.this$01.datePicker.css.baseName + 'Day';
  isWeekend && (this.cellStyle += ' ' + (this$1.this$01.datePicker.css.baseName + 'Day' + 'Is' + 'Weekend'));
  $setTabIndex(($clinit_DOM() , this.element), $isInCurrentMonth(this.this$11.this$01.datePicker.model, this.value_0)?0:-1);
  $clinit_Roles();
  $setAriaSelectedState(this.element, ($clinit_SelectedValue() , $clinit_SelectedValue() , FALSE_0));
}

defineClass(661, 93, $intern_47, DefaultCalendarView$CellGrid$DateCell);
_.addStyleName = function addStyleName_0(styleName){
  $addStyleName_0(this, styleName);
}
;
_.removeStyleName = function removeStyleName_0(styleName){
  $removeStyleName_0(this, styleName);
}
;
var Lcom_google_gwt_user_datepicker_client_DefaultCalendarView$CellGrid$DateCell_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultCalendarView/CellGrid/DateCell', 661);
defineClass(741, 736, $intern_37);
var Lcom_google_gwt_user_datepicker_client_MonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'MonthSelector', 741);
function $addCell(this$static, widget, width_0, className){
  var cell;
  cell = $getCellCount(this$static.grid, 0);
  $setWidget_2(this$static.grid, 0, cell, widget);
  $setWidth_1(this$static.grid.cellFormatter, cell, width_0);
  className != null && $setStyleName_1(this$static.grid.cellFormatter, cell, className);
  return cell;
}

function $createMonthSelect(this$static){
  var i, monthListBox;
  monthListBox = new ListBox;
  for (i = 0; i < 12; i++) {
    $addItem(monthListBox, $formatMonth_0(this$static.datePicker.model, i));
  }
  $addDomHandler(monthListBox, new DefaultMonthSelector$2(this$static, monthListBox), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
  return monthListBox;
}

function $createNavigationButton(this$static, label_0, noOfMonths, styleName){
  var button;
  button = new PushButton;
  $addDomHandler(button, new DefaultMonthSelector$1(this$static, noOfMonths), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1));
  $setHTML(button.up, label_0);
  $setClassName(($clinit_DOM() , button.element), styleName);
  return button;
}

function $refresh_0(this$static){
  var isMonthCurrentlySelectable, isYearNavigationCurrentlyEnabled;
  (isMonthCurrentlySelectable = !!this$static.monthSelect.parent_0 , isYearNavigationCurrentlyEnabled = !!this$static.yearBackwards.parent_0 , this$static.datePicker.yearAndMonthDropdownVisible != isMonthCurrentlySelectable || this$static.datePicker.yearArrowsVisible != isYearNavigationCurrentlyEnabled) && $setupGrid(this$static);
  $setDate_0(this$static, this$static.datePicker.model.currentMonth);
}

function $setDate_0(this$static, date){
  var endYear, i, month, newDate, startYear, year;
  if (this$static.datePicker.yearAndMonthDropdownVisible) {
    month = date.getMonth_0();
    $setSelectedIndex_0(this$static.monthSelect, month);
    $getElement(this$static.yearSelect).options.length = 0;
    year = date.getYear();
    startYear = year - ~~((this$static.datePicker.visibleYearCount - 1) / 2);
    endYear = year + ~~(this$static.datePicker.visibleYearCount / 2);
    newDate = new Date_0;
    for (i = startYear; i <= endYear; i++) {
      newDate.setYear(i);
      $addItem(this$static.yearSelect, $format(getFormat(($clinit_DateTimeFormat$PredefinedFormat() , YEAR)), newDate, null));
    }
    $setSelectedIndex_0(this$static.yearSelect, year - startYear);
  }
   else {
    $setText_1(this$static.grid, this$static.monthColumn, $formatCurrentMonthAndYear(this$static.datePicker.model));
  }
}

function $setupGrid(this$static){
  $removeAllRows(this$static.grid);
  $insertRow(this$static.grid, 0);
  this$static.datePicker.yearArrowsVisible && $addCell(this$static, this$static.yearBackwards, '1', null);
  $addCell(this$static, this$static.monthBackwards, '1', null);
  if (this$static.datePicker.yearAndMonthDropdownVisible) {
    if ($isMonthBeforeYear()) {
      $addCell(this$static, this$static.monthSelect, '50%', this$static.datePicker.css.baseName + 'Month');
      $addCell(this$static, this$static.yearSelect, '50%', this$static.datePicker.css.baseName + 'Year');
    }
     else {
      $addCell(this$static, this$static.yearSelect, '50%', this$static.datePicker.css.baseName + 'Year');
      $addCell(this$static, this$static.monthSelect, '50%', this$static.datePicker.css.baseName + 'Month');
    }
  }
   else {
    this$static.monthColumn = $addCell(this$static, null, '100%', this$static.datePicker.css.baseName + 'Month');
  }
  $addCell(this$static, this$static.monthForwards, '1', null);
  this$static.datePicker.yearArrowsVisible && $addCell(this$static, this$static.yearForwards, '1', null);
}

function DefaultMonthSelector(){
}

defineClass(653, 741, $intern_37, DefaultMonthSelector);
_.monthColumn = 0;
var Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultMonthSelector', 653);
function DefaultMonthSelector$1(this$0, val$noOfMonths){
  this.this$01 = this$0;
  this.val$noOfMonths2 = val$noOfMonths;
}

defineClass(654, 1, $intern_42, DefaultMonthSelector$1);
_.onClick = function onClick_3(event_0){
  $addMonths(this.this$01, this.val$noOfMonths2);
}
;
_.val$noOfMonths2 = 0;
var Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$1_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultMonthSelector/1', 654);
function DefaultMonthSelector$2(this$0, val$monthListBox){
  this.this$01 = this$0;
  this.val$monthListBox2 = val$monthListBox;
}

defineClass(655, 1, $intern_45, DefaultMonthSelector$2);
_.onChange = function onChange_0(event_0){
  var delta, newMonth, previousMonth;
  previousMonth = this.this$01.datePicker.model.currentMonth.getMonth_0();
  newMonth = $getElement(this.val$monthListBox2).selectedIndex;
  delta = newMonth - previousMonth;
  $addMonths(this.this$01, delta);
}
;
var Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$2_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultMonthSelector/2', 655);
function DefaultMonthSelector$3(this$0, val$yearListBox){
  this.this$01 = this$0;
  this.val$yearListBox2 = val$yearListBox;
}

defineClass(656, 1, $intern_45, DefaultMonthSelector$3);
_.onChange = function onChange_1(event_0){
  var deltaYears;
  deltaYears = $getElement(this.val$yearListBox2).selectedIndex - ~~((this.this$01.datePicker.visibleYearCount - 1) / 2);
  $addMonths(this.this$01, deltaYears * 12);
}
;
var Lcom_google_gwt_user_datepicker_client_DefaultMonthSelector$3_2_classLit = createForClass('com.google.gwt.user.datepicker.client', 'DefaultMonthSelector/3', 656);
function assertCompileTimeUserAgent() {}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(157, 19, $intern_3);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 157);
defineClass(56, 157, $intern_3);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 56);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 19)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 19):null);
}

defineClass(242, 56, $intern_3, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 242);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(332, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 332);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(333, 1, {685:1}, SimpleEventBus$2);
_.execute_1 = function execute_13(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 333);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(334, 1, {685:1}, SimpleEventBus$3);
_.execute_1 = function execute_14(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 334);
function $addUpdateListener(this$static, user){
  $addUserListener(this$static.commController, user);
}

function $completeSetupAndIdentification(this$static){
  $setVisible(this$static.tabBar, true);
  $enableAllTabs(this$static);
  $selectTab(this$static.tabBar, 0);
  $redraw(this$static.titleAndButtons, false, true);
  $updateTricountFields(this$static.titleAndButtons);
}

function $decideLogin(this$static){
  var facebookID, found, u, u$iterator, users;
  if (fbid == null || $equals_1(fbid, '')) {
    $clinit_System();
    $redraw(this$static.titleAndButtons, false, false);
    $displayIdentifiezVous_0(this$static);
    this$static.identificationUpdated = true;
    $disableAllTabs(this$static);
  }
   else {
    $clinit_System();
    try {
      facebookID = valueOf_2(__parseAndValidateLong(fbid));
      users = $getUsers(tricount_0);
      found = false;
      for (u$iterator = new AbstractList$IteratorImpl(users); u$iterator.i < u$iterator.this$01_0.size_1();) {
        u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
        if (neq(u.facebookid, {l:$intern_20, m:$intern_20, h:$intern_21}) && $equals_0(facebookID, valueOf_2(u.facebookid))) {
          currentUser = u;
          found = true;
          break;
        }
      }
      if (found) {
        $completeSetupAndIdentification(this$static);
      }
       else {
        $redraw(this$static.titleAndButtons, false, false);
        $displayIdentifiezVous_0(this$static);
        $disableAllTabs(this$static);
      }
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 54)) {
        $redraw(this$static.titleAndButtons, false, false);
        $displayIdentifiezVous_0(this$static);
        this$static.identificationUpdated = true;
        $disableAllTabs(this$static);
      }
       else
        throw unwrap($e0);
    }
  }
}

function $disableAllTabs(this$static){
  var i;
  for (i = 0; i < this$static.tabBar.panel.children.size_0 - 2; i++) {
    $setTabEnabled(this$static.tabBar, i, false);
  }
  $setClassName($getParentElement(($clinit_DOM() , this$static.tabBar.element)), 'tabLineDisabled');
}

function $displayAddEditPayement(this$static, t){
  var cancel, links_0, ok, payment, scroll_0, text_0;
  $getSelectedTab(this$static.tabBar) != 0 && $selectTab(this$static.tabBar, 0);
  $clinit_History();
  newItem(H_ADDLINE);
  this$static.header.clear_0();
  text_0 = ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Add an expense');
  !!t && (text_0 = (!localizedStrings && (localizedStrings = new Locale_) , 'Expense detais "' + t.name_0 + '"'));
  $add_1(this$static.header, new Application$HeaderPanel_0(text_0, true));
  this$static.contentPanel.clear_0();
  scroll_0 = new ScrollPanel;
  $setPixelSize(scroll_0, this$static.WIDTHBODY_INT, 300);
  ($clinit_DOM() , scroll_0.scrollableElem).style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  payment = new PaymentPanel(t);
  $add_1(scroll_0, payment);
  $add_1(this$static.contentPanel, scroll_0);
  payment.edition || $setFocus(dynamicCast(payment.quoi.widget, 30));
  ok = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Save'));
  cancel = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Cancel'));
  add_7(ok, new Application$8(this$static, payment));
  add_7(cancel, new Application$9(this$static));
  links_0 = new Vector;
  $add_5(links_0.arrayList, ok);
  $add_5(links_0.arrayList, cancel);
  this$static.footer.clear_0();
  $add_1(this$static.footer, new Application$FooterPanel(links_0));
  GA_trackPageView(H_ADDLINE);
}

function $displayCreationStep2(this$static){
  var continuer, hp, identifiezVous, links_0, scroll_0;
  $clinit_History();
  newItem(H_STEP2);
  this$static.header.clear_0();
  hp = new Application$HeaderPanel_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'List tricount participants'), false);
  $add_1(this$static.header, hp);
  this$static.contentPanel.clear_0();
  identifiezVous = new IdentifiezVousPanel(true);
  scroll_0 = new ScrollPanel;
  ($clinit_DOM() , scroll_0.scrollableElem).style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  $add_1(scroll_0, identifiezVous);
  $setPixelSize(scroll_0, this$static.WIDTHBODY_INT, 300);
  $add_1(this$static.contentPanel, scroll_0);
  this$static.footer.clear_0();
  continuer = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'End'));
  add_7(continuer, new Application$13(this$static));
  links_0 = new Vector;
  $add_5(links_0.arrayList, continuer);
  $add_1(this$static.footer, new Application$FooterPanel(links_0));
  GA_trackPageView(H_STEP2);
}

function $displayEditTricount(this$static){
  var cancel, links_0, ok, scroll_0, tricountPanel;
  if ($getSelectedTab(this$static.tabBar) != 3) {
    $selectTab(this$static.tabBar, 3);
    return;
  }
  $clinit_History();
  newItem(H_EDITTRICOUNT);
  this$static.header.clear_0();
  $add_1(this$static.header, new Application$HeaderPanel_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'General Information'), true));
  this$static.contentPanel.clear_0();
  tricountPanel = new TricountEditionPanel;
  $setTricount(tricountPanel, tricount_0);
  scroll_0 = new ScrollPanel;
  ($clinit_DOM() , scroll_0.scrollableElem).style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  $add_1(scroll_0, tricountPanel);
  $setPixelSize(scroll_0, this$static.WIDTHBODY_INT, 300);
  $add_1(this$static.contentPanel, scroll_0);
  ok = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Save'));
  cancel = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Cancel'));
  add_7(ok, new Application$11(this$static, tricountPanel));
  add_7(cancel, new Application$12(this$static));
  links_0 = new Vector;
  $add_5(links_0.arrayList, ok);
  $add_5(links_0.arrayList, cancel);
  this$static.footer.clear_0();
  $add_1(this$static.footer, new Application$FooterPanel(links_0));
  GA_trackPageView(H_EDITTRICOUNT);
}

function $displayIdentifiezVous(this$static){
  $displayIdentifiezVous_0(this$static);
  this$static.identificationUpdated = true;
}

function $displayIdentifiezVous_0(this$static){
  var IdentifiezVousWithGdprScroll, hp;
  $clinit_History();
  newItem(H_IDENTIFY);
  this$static.header.clear_0();
  hp = new Application$HeaderPanel_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Who are you?'), false);
  $add_1(this$static.header, hp);
  this$static.contentPanel.clear_0();
  IdentifiezVousWithGdprScroll = new Application$IdentifiezVousWithGdprPolicies(this$static);
  $setPixelSize(IdentifiezVousWithGdprScroll, this$static.WIDTHBODY_INT, 300);
  $add_1(this$static.contentPanel, IdentifiezVousWithGdprScroll);
  this$static.footer.clear_0();
  $add_1(this$static.footer, new Application$FooterPanel(new Vector));
  GA_trackPageView(H_IDENTIFY);
}

function $displayPaymentList(this$static){
  var addLine, pPanel, scroll_0, v;
  if ($getSelectedTab(this$static.tabBar) != 0) {
    $selectTab(this$static.tabBar, 0);
    return;
  }
  if (!!this$static.paymentListPanel && this$static.identificationUpdated) {
    $refresh_1(this$static.paymentListPanel);
    this$static.identificationUpdated = false;
  }
  $clinit_History();
  newItem(H_PAYMENTLIST);
  this$static.header.clear_0();
  $add_1(this$static.header, new Application$HeaderPanel_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Expense list'), true));
  addLine = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Add an expense'));
  add_7(addLine, new Application$6(this$static));
  this$static.contentPanel.clear_0();
  scroll_0 = new ScrollPanel;
  ($clinit_DOM() , scroll_0.scrollableElem).style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  pPanel = (!this$static.paymentListPanel && (this$static.paymentListPanel = new PaymentListPanel) , this$static.paymentListPanel);
  $add_1(scroll_0, pPanel);
  $setPixelSize(scroll_0, this$static.WIDTHBODY_INT, 300);
  $add_1(this$static.contentPanel, scroll_0);
  $addTransactionAddedListener(tricount_0, new Application$7(scroll_0));
  $setWidth(pPanel, this$static.WIDTHBODY_INT - 30 + 'px');
  $setClassName(pPanel.element, 'paymentPanel');
  v = new Vector;
  $add_5(v.arrayList, addLine);
  this$static.footer.clear_0();
  $add_1(this$static.footer, new Application$FooterPanel(v));
  GA_trackPageView(H_PAYMENTLIST);
}

function $displayShare(this$static){
  var sp;
  if ($getSelectedTab(this$static.tabBar) != 2) {
    $selectTab(this$static.tabBar, 2);
    return;
  }
  $clinit_History();
  newItem(H_SHARE);
  this$static.header.clear_0();
  $add_1(this$static.header, new Application$HeaderPanel_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Invite your friends to participate in the tricount'), true));
  this$static.contentPanel.clear_0();
  sp = new SharePanel;
  ($clinit_DOM() , sp.element).style['width'] = '100%';
  $add_1(this$static.contentPanel, sp);
  this$static.footer.clear_0();
}

function $displaySummary(this$static){
  var fp, sp;
  $clinit_System();
  if ($getSelectedTab(this$static.tabBar) != 1) {
    $selectTab(this$static.tabBar, 1);
    return;
  }
  this$static.header.clear_0();
  fp = new HTML;
  $setHTML_0(fp, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The reds must become green'));
  $add_1(this$static.header, new Application$HeaderPanel(fp));
  this$static.contentPanel.clear_0();
  sp = new SummaryPanel;
  ($clinit_DOM() , sp.element).style['height'] = '100%';
  sp.element.style['width'] = '100%';
  $add_1(this$static.contentPanel, sp);
  this$static.footer.clear_0();
  $add_1(this$static.footer, new Application$FooterPanel(null));
  GA_trackPageView(H_SUMMARY);
}

function $enableAllTabs(this$static){
  var i;
  for (i = 0; i < this$static.tabBar.panel.children.size_0 - 2; i++) {
    $setTabEnabled(this$static.tabBar, i, true);
  }
  $setClassName($getParentElement(($clinit_DOM() , this$static.tabBar.element)), 'tabLineEnabled');
}

function $generatePrint(){
  var amount, at, at$iterator, currentDate, e, e$iterator, printHTML, solution, t;
  t = tricount_0;
  currentDate = new Date_0;
  printHTML = '<div id="header">';
  printHTML += ' <h1>Tricount<\/h1>';
  printHTML += '<\/div>';
  printHTML += '<div id="content">';
  printHTML += ' <div id="tricountInfo">';
  printHTML += ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , '  <h1>' + ('Tricount "' + htmlEscape(t.name_0) + '"') + '<\/h1>');
  printHTML += '  <h2>' + (t.description == null || $equals_1(t.description, '')?(!localizedStrings && (localizedStrings = new Locale_) , 'No Description'):htmlEscape(t.description)) + '<\/h2>';
  printHTML += '  <h3>' + (!t.createdBy || tricount_0.createdBy.id_0 == 0?(!localizedStrings && (localizedStrings = new Locale_) , 'Created on a mobile, on ' + getStringDate(t.creationDate)):(!localizedStrings && (localizedStrings = new Locale_) , 'Created by ' + htmlEscape(t.createdBy.name_0) + ', on ' + getStringDate(t.creationDate))) + '<\/h3>';
  printHTML += ' <\/div>';
  printHTML += ' <div id="tricountContent">';
  printHTML += (!localizedStrings && (localizedStrings = new Locale_) , '  <p class="contentHeader">' + ('Printed by ' + htmlEscape(currentUser.name_0)) + ' <span> ' + getStringDate(currentDate) + ' &nbsp;-&nbsp; ' + $format(($clinit_DateTimeFormat_0() , getFormat_0('HH:mm', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1)))), currentDate, createTimeZone((new Date_0).jsdate.getTimezoneOffset())) + ' <\/span><\/p>');
  printHTML += (!localizedStrings && (localizedStrings = new Locale_) , '  <p> ' + (htmlEscape(currentUser.name_0) + ' should verify that all expenses below are error-free:') + '<\/p>');
  printHTML += '   <table class="expensesTable">';
  printHTML += (!localizedStrings && (localizedStrings = new Locale_) , !localizedStrings && (localizedStrings = new Locale_) , !localizedStrings && (localizedStrings = new Locale_) , !localizedStrings && (localizedStrings = new Locale_) , '    <tr><th colspan="3">Who paid?  How much? For what reasons?<\/th><th>When?<\/th><th>Involves?<\/th><th>' + ('How much for ' + htmlEscape(currentUser.name_0) + ' ?') + '<\/th><\/tr>');
  if ($getTransactions(t).array.length != 0) {
    for (e$iterator = new AbstractList$IteratorImpl($getTransactions(t)); e$iterator.i < e$iterator.this$01_0.size_1();) {
      e = (checkCriticalElement(e$iterator.i < e$iterator.this$01_0.size_1()) , dynamicCast(e$iterator.this$01_0.get_0(e$iterator.last = e$iterator.i++), 68));
      printHTML += '<tr>';
      printHTML += ' <td width="8%">' + htmlEscape(e.payedBy.name_0) + '<\/td>';
      printHTML += ' <td width="9%">' + getStringNumber(e.amount) + '&nbsp;' + htmlEscape(t.currency) + '<\/td>';
      printHTML += ' <td width="21%">' + htmlEscape(e.name_0) + '<\/td>';
      printHTML += ' <td>' + (!e.paymentDate?'&nbsp;':getStringDate(e.paymentDate)) + '<\/td>';
      printHTML += ' <td>' + htmlEscape(getConcerneQui(t, e)) + '<\/td>';
      printHTML += ' <td>' + getStringNumber(abs_1($getBalanceForUser(e, currentUser, true, true))) + ' ' + htmlEscape(t.currency) + '<\/td>';
      printHTML += '<\/tr>';
    }
  }
   else {
    printHTML += (!localizedStrings && (localizedStrings = new Locale_) , '<tr><td colspan="6">No expense<\/td><\/tr>');
  }
  printHTML += '<tbody class="TotalFocusPanel">';
  printHTML += '<tr>';
  printHTML += (!localizedStrings && (localizedStrings = new Locale_) , ' <td width="8%"><div class="totalContent">Total<\/div><\/td>');
  printHTML += ' <td width="9%"><div class="totalContent">' + getStringNumber($getTotalAmount(t)) + '&nbsp;' + htmlEscape(t.currency) + '<\/div><\/td>';
  printHTML += ' <td width="21%"><div class="totalContent">&nbsp;<\/div><\/td>';
  printHTML += ' <td><div class="totalContent">&nbsp;<\/div><\/td>';
  printHTML += ' <td><div class="totalContent">&nbsp;<\/div><\/td>';
  printHTML += ' <td><div class="totalContent">' + getStringNumber(abs_1($getTotalForUser(t, currentUser))) + ' ' + htmlEscape(t.currency) + '<\/div><\/td>';
  printHTML += '<\/tr>';
  printHTML += '<\/tbody>';
  printHTML += '   <\/table>';
  printHTML += '  <table>';
  printHTML += (!localizedStrings && (localizedStrings = new Locale_) , '  <tr><th colspan=3>Tricount Solution :<\/th><\/tr>');
  try {
    solution = refreshRepartition();
    if (solution.arrayList.array.length == 0) {
      printHTML += (!localizedStrings && (localizedStrings = new Locale_) , '<tr><td clospan="2">No reimboursement necessary, everyone has contributed equally!<\/td>');
    }
     else {
      for (at$iterator = new AbstractList$IteratorImpl(solution.arrayList); at$iterator.i < at$iterator.this$01_0.size_1();) {
        at = (checkCriticalElement(at$iterator.i < at$iterator.this$01_0.size_1()) , dynamicCast(at$iterator.this$01_0.get_0(at$iterator.last = at$iterator.i++), 78));
        amount = getStringNumber(at.amount / 100);
        printHTML += '<tr>';
        printHTML += (!localizedStrings && (localizedStrings = new Locale_) , ' <td align="left"><b>' + ('<span class="summaryEqContentBold">' + htmlEscape(at.from) + '<\/span><span class="summaryEqContent">&nbsp; should pay &nbsp;' + htmlEscape(at.to) + '<\/span>') + '<\/td>');
        printHTML += ' <td align="right"> ' + amount + ' ' + htmlEscape(tricount_0.currency) + '<\/td>';
        printHTML += '<\/tr>';
      }
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 22)) {
      printHTML += (!localizedStrings && (localizedStrings = new Locale_) , '<tr><td clospan="2">An error has occured during the calculation of the redistribution of funds!<\/td><\/tr>');
    }
     else
      throw unwrap($e0);
  }
  printHTML += '   <\/table>';
  printHTML += (!localizedStrings && (localizedStrings = new Locale_) , '   <p> To add, delete or comment on the expenses, balance a tricount or print this page, it is necessary to access the tricount via a traditional browser.<\/p>');
  printHTML += '   <p class="contentFooter">&nbsp;<\/p>';
  printHTML += ' <\/div>';
  printHTML += '<\/div>';
  return printHTML;
}

function $getPaymentListPanel(this$static){
  !this$static.paymentListPanel && (this$static.paymentListPanel = new PaymentListPanel);
  return this$static.paymentListPanel;
}

function $isDemoTricount(this$static, s){
  var i;
  if (this$static.demoTricount == -1) {
    if (s == null) {
      return -1;
    }
    for (i = 0; i < ($clinit_TricountConstants() , DEMO_TRICOUNTS).length; i++) {
      if ($equals_1(s, DEMO_TRICOUNTS[i])) {
        this$static.demoTricount = 1;
        break;
      }
    }
  }
  this$static.demoTricount == -1 && (this$static.demoTricount = 0);
  return this$static.demoTricount;
}

function $isRunningOnFacebook(){
  if (fbid == null || $equals_1(fbid, '')) {
    return false;
  }
  return true;
}

function $onModuleLoad_0(this$static){
  var margin, marginPanel, tricountRandom;
  this$static.tricountManager = new TricountManager;
  this$static.commController = new TricountCommController(this$static.tricountManager);
  singleton_0 = this$static;
  tricountRandom = getGwtMetaProperty('tricount:key', null, true);
  $clinit_System();
  'Tricount Facebook Key : ' + getGwtMetaProperty('facebook:session', null, false);
  getGwtMetaProperty('facebook:session', null, false) != null && setCurrentUserFBSession(getGwtMetaProperty('facebook:session', null, false));
  getGwtMetaProperty('facebook:userID', null, false) != null && setCurrentUserFBID(getGwtMetaProperty('facebook:userID', null, false));
  this$static.isInCreationProcess = getIsCreation();
  this$static.rootPanel = new VerticalPanel;
  this$static.titleAndButtons = new Application$TitleAndButtonPanel(this$static);
  this$static.header = new SimplePanel;
  $setStyleName(this$static.header, 'headerPanel');
  this$static.header.setWidth(WIDTH_INT - 10 + 'px');
  this$static.header.setHeight('25px');
  marginPanel = new HorizontalPanel;
  margin = new SimplePanel;
  margin.setWidth('20px');
  $add_3(marginPanel, margin);
  this$static.contentPanel = new SimplePanel;
  this$static.contentPanel.setWidth(this$static.WIDTHBODY);
  this$static.contentPanel.setHeight('300px');
  $add_3(marginPanel, this$static.contentPanel);
  this$static.footer = new SimplePanel;
  $setStyleName(this$static.footer, 'footerPanel');
  this$static.footer.setWidth(WIDTH_INT - 10 + 'px');
  this$static.footer.setHeight('25px');
  $addTab(this$static.tabBar, new TabBarHeader('tabBarHeaderDepense', ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Expenses ')));
  $addTab(this$static.tabBar, new TabBarHeader('tabBarHeaderEquilibre', (!localizedStrings && (localizedStrings = new Locale_) , 'Balance')));
  $addTab(this$static.tabBar, new TabBarHeader('tabBarHeaderPartage', (!localizedStrings && (localizedStrings = new Locale_) , 'Share')));
  $addTab(this$static.tabBar, new TabBarHeader('tabBarHeaderConfig', (!localizedStrings && (localizedStrings = new Locale_) , 'Config')));
  $addHandler_0(this$static.tabBar, new Application$1(this$static), (!TYPE_19 && (TYPE_19 = new GwtEvent$Type) , TYPE_19));
  $add_6(this$static.rootPanel, this$static.titleAndButtons);
  $setVisible(this$static.tabBar, false);
  $add_6(this$static.rootPanel, this$static.tabBar);
  $disableAllTabs(this$static);
  $add_6(this$static.rootPanel, this$static.header);
  $add_6(this$static.rootPanel, marginPanel);
  $add_6(this$static.rootPanel, this$static.footer);
  $setInnerHTML(($clinit_DOM() , get_1('slot1').element), '');
  $add_0(get_1('slot1'), this$static.rootPanel);
  $addTricountLoadedListener(this$static.tricountManager, new Application$2(this$static));
  $addErrorOccuredListener(this$static.tricountManager, new Application$3);
  $clinit_History();
  addValueChangeHandler(new History$WrapHistory(new Application$4(this$static)));
  $loadTricount(this$static.commController, tricountRandom);
  session != null && $getSuggestedFriends(this$static.commController, session);
  $addSuggestedFriendsReceivedListener(this$static.tricountManager, new Application$5);
  this$static.header.clear_0();
  $add_1(this$static.header, new Application$HeaderPanel_0((!localizedStrings && (localizedStrings = new Locale_) , 'Chargement : Please wait...'), false));
  this$static.contentPanel.clear_0();
  this$static.footer.clear_0();
  prefetch('Images/vImage.png');
  prefetch('Images/hint.gif');
  prefetch('Images/redCross.jpg');
  prefetch('Images/roundedLeft.png');
  prefetch('Images/roundedRight.png');
}

function Application(){
  this.tabBar = new TabBar;
}

function GA_trackEvent(category, action){
  try {
    var pageTracker = $wnd._gat._getTracker('UA-12006563-7');
    pageTracker._setDomainName('none');
    pageTracker._setAllowLinker(true);
    pageTracker._initData();
    pageTracker._trackEvent(category, action, 'noAction', 0);
  }
   catch (err) {
  }
}

function GA_trackPageView(p){
  try {
    var pageTracker = $wnd._gat._getTracker('UA-12006563-7');
    pageTracker._setDomainName('none');
    pageTracker._setAllowLinker(true);
    pageTracker._trackPageview(p);
  }
   catch (err) {
  }
}

function getDateFormat(){
  var timeFormat;
  timeFormat = ($clinit_DateTimeFormat_0() , getFormat_0('dd/MM/yy', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_1))));
  return timeFormat;
}

function getIndividualBalances(){
  var balance, toReturn, u, u$iterator;
  toReturn = new HashMap;
  for (u$iterator = new AbstractList$IteratorImpl($getUsers(tricount_0)); u$iterator.i < u$iterator.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
    balance = toInt(fromDouble(round0($getBalanceForUser_0(tricount_0, u) * 100)));
    toReturn.put(u, valueOf_1(balance));
  }
  return toReturn;
}

function getStringDate(d){
  if (!d) {
    return '';
  }
  return $format(getDateFormat(), d, createTimeZone((new Date_0).jsdate.getTimezoneOffset()));
}

function getStringNumber(d){
  return $format_0(($clinit_NumberFormat() , new NumberFormat_0(['USD', 'US$', 2, 'US$', '$'])), d);
}

function goToURL(url_0){
  top.location = url_0;
}

function parseStringDate(s){
  return $parse_1(getDateFormat(), s);
}

function printPage(url_0, htmlContent){
  var popupWin = window.open(url_0, '_blank');
  setTimeout(function(){
    popupWin.document.getElementById('impressionDiv').innerHTML = htmlContent;
    popupWin.setDone();
  }
  , 2000);
}

function refreshRepartition(){
  var algo, e, solutions, toSort, u, u$iterator, values;
  try {
    $clinit_System();
    algo = new CircleDetectionAlgo;
    values = getIndividualBalances();
    toSort = new Vector_0(new AbstractMap$1(values));
    sort_0(toSort, new UserComparator($useHarmonisedSorting(tricount_0)));
    for (u$iterator = new AbstractList$IteratorImpl(toSort.arrayList); u$iterator.i < u$iterator.this$01_0.size_1();) {
      u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
      $addPeople(algo, u.name_0, dynamicCast(values.get_1(u), 44).value_0);
    }
    $run(algo);
    solutions = $getSolutions(algo);
    sort_0(solutions, new Application$10);
    return solutions;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 22)) {
      e = $e0;
      $clinit_System();
      $printStackTrace(e, $clinit_System());
      throw unwrap(e);
    }
     else
      throw unwrap($e0);
  }
}

function setCurrentUser(u){
  currentUser = u;
}

function setCurrentUserFBID(id_0){
  fbid = id_0;
}

function setCurrentUserFBSession(s){
  session = s;
}

defineClass(243, 1, {}, Application);
_.WIDTHBODY = '738px';
_.WIDTHBODY_INT = 738;
_.demoTricount = -1;
_.identificationUpdated = false;
_.isInCreationProcess = false;
_.paymentListPanel = null;
_.rootPanel = null;
var HEIGHT_INT = 375, H_ADDLINE = '__addline', H_EDITTRICOUNT = '__edittricount', H_IDENTIFY = '__identify', H_PAYMENTLIST = '__pl', H_SHARE = '__share', H_STEP2 = '__step2', H_SUMMARY = '__summary', WIDTH_INT = 758, currentUser = null, fbid = null, session = null, singleton_0, tricount_0;
var Lcom_tribab_tricount_client_Application_2_classLit = createForClass('com.tribab.tricount.client', 'Application', 243);
function Application$1(this$0){
  this.this$01 = this$0;
}

defineClass(251, 1, $intern_43, Application$1);
_.onSelection = function onSelection_0(event_0){
  dynamicCast(event_0.selectedItem, 44).value_0 == 0 && $displayPaymentList(this.this$01);
  dynamicCast(event_0.selectedItem, 44).value_0 == 1 && $displaySummary(this.this$01);
  dynamicCast(event_0.selectedItem, 44).value_0 == 2 && $displayShare(this.this$01);
  dynamicCast(event_0.selectedItem, 44).value_0 == 3 && $displayEditTricount(this.this$01);
}
;
var Lcom_tribab_tricount_client_Application$1_2_classLit = createForClass('com.tribab.tricount.client', 'Application/1', 251);
function $compare(o1, o2){
  var comp;
  comp = new ParticipantNameComparator($useHarmonisedSorting(tricount_0));
  return $compare_0(comp, o1.from, o2.from);
}

function Application$10(){
}

defineClass(262, 1, $intern_48, Application$10);
_.compare = function compare_1(o1, o2){
  return $compare(dynamicCast(o1, 78), dynamicCast(o2, 78));
}
;
var Lcom_tribab_tricount_client_Application$10_2_classLit = createForClass('com.tribab.tricount.client', 'Application/10', 262);
function Application$11(this$0, val$tricountPanel){
  this.this$01 = this$0;
  this.val$tricountPanel2 = val$tricountPanel;
}

defineClass(263, 1, $intern_49, Application$11);
_.onClick_0 = function onClick_4(sender){
  var ok;
  ok = $saveTricount(this.val$tricountPanel2);
  ok && $displayPaymentList(this.this$01);
}
;
var Lcom_tribab_tricount_client_Application$11_2_classLit = createForClass('com.tribab.tricount.client', 'Application/11', 263);
function Application$12(this$0){
  this.this$01 = this$0;
}

defineClass(264, 1, $intern_49, Application$12);
_.onClick_0 = function onClick_5(sender){
  $displayPaymentList(this.this$01);
}
;
var Lcom_tribab_tricount_client_Application$12_2_classLit = createForClass('com.tribab.tricount.client', 'Application/12', 264);
function Application$13(this$0){
  this.this$01 = this$0;
}

defineClass(265, 1, $intern_49, Application$13);
_.onClick_0 = function onClick_6(sender){
  $completeSetupAndIdentification(this.this$01);
}
;
var Lcom_tribab_tricount_client_Application$13_2_classLit = createForClass('com.tribab.tricount.client', 'Application/13', 265);
function $onEvent(this$static, parameter){
  var timeDelta, users;
  $clinit_System();
  tricount_0 = parameter;
  timeDelta = sub_0((new Date_0).getTime_0(), tricount_0.creationDate.getTime_0());
  lt(timeDelta, {l:10000, m:0, h:0}) && $getUsers(tricount_0).array.length == 1 && $getTransactions(tricount_0).array.length == 0 && (this$static.this$01.isInCreationProcess = true);
  $redraw(this$static.this$01.titleAndButtons, this$static.this$01.isInCreationProcess, false);
  $updateTricountFields(this$static.this$01.titleAndButtons);
  if (this$static.this$01.isInCreationProcess) {
    $setVisible(this$static.this$01.tabBar, false);
    users = $getUsers(tricount_0);
    users.array.length == 0 && out_0;
    setCurrentUser(dynamicCast($next_3(new AbstractList$IteratorImpl(users)), 37));
    $displayCreationStep2(this$static.this$01);
  }
   else {
    $decideLogin(this$static.this$01);
  }
  $addTricountModifiedListener(tricount_0, new Application$2$1(this$static));
  !!tricount_0.createdBy && $addUserUpdatedListener(tricount_0.createdBy, new Application$2$2(this$static));
}

function Application$2(this$0){
  this.this$01 = this$0;
}

defineClass(252, 1, $intern_50, Application$2);
_.onEvent = function onEvent(parameter){
  $onEvent(this, dynamicCast(parameter, 124));
}
;
var Lcom_tribab_tricount_client_Application$2_2_classLit = createForClass('com.tribab.tricount.client', 'Application/2', 252);
function $onEvent_0(this$static){
  $updateTricountFields(this$static.this$11.this$01.titleAndButtons);
}

function Application$2$1(this$1){
  this.this$11 = this$1;
}

defineClass(253, 1, $intern_50, Application$2$1);
_.onEvent = function onEvent_0(parameter){
  $onEvent_0(this, dynamicCast(parameter, 124));
}
;
var Lcom_tribab_tricount_client_Application$2$1_2_classLit = createForClass('com.tribab.tricount.client', 'Application/2/1', 253);
function $onEvent_1(this$static){
  $updateTricountFields(this$static.this$11.this$01.titleAndButtons);
}

function Application$2$2(this$1){
  this.this$11 = this$1;
}

defineClass(254, 1, $intern_50, Application$2$2);
_.onEvent = function onEvent_1(parameter){
  $onEvent_1(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_Application$2$2_2_classLit = createForClass('com.tribab.tricount.client', 'Application/2/2', 254);
function $onEvent_2(parameter){
  var errorPanel;
  errorPanel = new ErrorPanel(parameter);
  !errorPanel.resizeHandlerRegistration && (errorPanel.resizeHandlerRegistration = addResizeHandler(new DialogBox$1(errorPanel)));
  $show(errorPanel);
}

function Application$3(){
}

defineClass(255, 1, $intern_50, Application$3);
_.onEvent = function onEvent_2(parameter){
  $onEvent_2(dynamicCastToString(parameter));
}
;
var Lcom_tribab_tricount_client_Application$3_2_classLit = createForClass('com.tribab.tricount.client', 'Application/3', 255);
function $onHistoryChanged(this$static, historyToken){
  $equals_1(historyToken, H_PAYMENTLIST) && $displayPaymentList(this$static.this$01);
  $equals_1(historyToken, H_SUMMARY) && $displaySummary(this$static.this$01);
  $equals_1(historyToken, H_ADDLINE) && $displayAddEditPayement(this$static.this$01, null);
  $equals_1(historyToken, H_IDENTIFY) && $displayIdentifiezVous(this$static.this$01);
  $equals_1(historyToken, H_SHARE) && $displayShare(this$static.this$01);
  $equals_1(historyToken, H_STEP2) && $displayCreationStep2(this$static.this$01);
}

function Application$4(this$0){
  this.this$01 = this$0;
}

defineClass(256, 1, {743:1}, Application$4);
var Lcom_tribab_tricount_client_Application$4_2_classLit = createForClass('com.tribab.tricount.client', 'Application/4', 256);
function $onEvent_3(parameter){
  $setFriends((!singleton_1 && (singleton_1 = new FBFriendManager) , singleton_1), parameter);
}

function Application$5(){
}

defineClass(257, 1, $intern_50, Application$5);
_.onEvent = function onEvent_3(parameter){
  $onEvent_3(dynamicCast(parameter, 34));
}
;
var Lcom_tribab_tricount_client_Application$5_2_classLit = createForClass('com.tribab.tricount.client', 'Application/5', 257);
function Application$6(this$0){
  this.this$01 = this$0;
}

defineClass(258, 1, $intern_49, Application$6);
_.onClick_0 = function onClick_7(w){
  $displayAddEditPayement(this.this$01, null);
}
;
var Lcom_tribab_tricount_client_Application$6_2_classLit = createForClass('com.tribab.tricount.client', 'Application/6', 258);
function $onEvent_4(this$static){
  $scrollToBottom(this$static.val$scroll2);
}

function Application$7(val$scroll){
  this.val$scroll2 = val$scroll;
}

defineClass(259, 1, $intern_50, Application$7);
_.onEvent = function onEvent_4(parameter){
  $onEvent_4(this, dynamicCast(parameter, 77));
}
;
var Lcom_tribab_tricount_client_Application$7_2_classLit = createForClass('com.tribab.tricount.client', 'Application/7', 259);
function Application$8(this$0, val$payment){
  this.this$01 = this$0;
  this.val$payment2 = val$payment;
}

defineClass(260, 1, $intern_49, Application$8);
_.onClick_0 = function onClick_8(sender){
  var t;
  t = $saveAndGetTransaction(this.val$payment2);
  if (!t) {
    return;
  }
  $displayPaymentList(this.this$01);
  if ($indexOf_0($getTransactions(tricount_0), t, 0) != -1) {
    $fire(t.transactionModifiedEvent, t);
  }
   else {
    $setAddedDate(t, new Date_0);
    $addTransaction_1(tricount_0, t);
  }
  $refresh_1($getPaymentListPanel(this.this$01));
}
;
var Lcom_tribab_tricount_client_Application$8_2_classLit = createForClass('com.tribab.tricount.client', 'Application/8', 260);
function Application$9(this$0){
  this.this$01 = this$0;
}

defineClass(261, 1, $intern_49, Application$9);
_.onClick_0 = function onClick_9(sender){
  $displayPaymentList(this.this$01);
}
;
var Lcom_tribab_tricount_client_Application$9_2_classLit = createForClass('com.tribab.tricount.client', 'Application/9', 261);
function Application$FooterPanel(v){
  var list;
  this.panel = new HorizontalPanel;
  $setWidth(this.panel, '100%');
  if (v) {
    list = new HyperlinkList(v);
    $setStylePrimaryName_0(list, 'footerPanelText');
    $add_3(this.panel, list);
    $setCellHorizontalAlignment_0(this.panel, list, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  }
  $initWidget(this, this.panel);
}

defineClass(117, 708, $intern_37, Application$FooterPanel);
var Lcom_tribab_tricount_client_Application$FooterPanel_2_classLit = createForClass('com.tribab.tricount.client', 'Application/FooterPanel', 117);
function Application$GdprPolicyScrollPanel(){
  var content_0;
  content_0 = new HTML_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The information that you may enter in this application is handled and stored by Tricount in order to conduct its service. More information about data privacy is available <a href="https://www.tricount.com/fr/politique-de-confidentialite#tricountData" target="_blank">here<\/a> '));
  setStylePrimaryName(($clinit_DOM() , content_0.element), 'shareEmailWarning');
  this.scroll_0 = new ScrollPanel_0(content_0);
  $setAlwaysShowScrollBars(this.scroll_0);
  $initWidget(this, this.scroll_0);
}

defineClass(246, 708, $intern_37, Application$GdprPolicyScrollPanel);
var Lcom_tribab_tricount_client_Application$GdprPolicyScrollPanel_2_classLit = createForClass('com.tribab.tricount.client', 'Application/GdprPolicyScrollPanel', 246);
function $$init_0(this$static){
  this$static.panel = new HorizontalPanel;
}

function Application$HeaderPanel(w){
  var vousetes;
  $$init_0(this);
  $setWidth(this.panel, '100%');
  setStylePrimaryName(($clinit_DOM() , w.element), 'headerPanelText');
  $add_3(this.panel, w);
  vousetes = new HTML;
  $setClassName(vousetes.element, 'headerPanelText');
  $setHTML_0(vousetes, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'You are logged in as <b>' + htmlEscape(currentUser.name_0) + '<\/b>'));
  $add_3(this.panel, vousetes);
  $setCellHorizontalAlignment_0(this.panel, vousetes, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  $initWidget(this, this.panel);
}

function Application$HeaderPanel_0(l, showCurrentUser){
  var label_0, vousetes;
  $$init_0(this);
  $setWidth(this.panel, '100%');
  label_0 = new Label_1(l);
  setStylePrimaryName(($clinit_DOM() , label_0.element), 'headerPanelText');
  $add_3(this.panel, label_0);
  if (showCurrentUser) {
    vousetes = new HTML;
    $setClassName(vousetes.element, 'headerPanelText');
    $setHTML_0(vousetes, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'You are logged in as <b>' + htmlEscape(currentUser.name_0) + '<\/b>'));
    $add_3(this.panel, vousetes);
    $setCellHorizontalAlignment_0(this.panel, vousetes, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  }
  $initWidget(this, this.panel);
}

defineClass(88, 708, $intern_37, Application$HeaderPanel, Application$HeaderPanel_0);
var Lcom_tribab_tricount_client_Application$HeaderPanel_2_classLit = createForClass('com.tribab.tricount.client', 'Application/HeaderPanel', 88);
function Application$IdentifiezVousScrollPanel(){
  var identifiezVous;
  this.IdentifiezVousScroll = new ScrollPanel;
  $setAlwaysShowScrollBars(this.IdentifiezVousScroll);
  identifiezVous = new IdentifiezVousPanel(false);
  $add_1(this.IdentifiezVousScroll, identifiezVous);
  $initWidget(this, this.IdentifiezVousScroll);
}

defineClass(245, 708, $intern_37, Application$IdentifiezVousScrollPanel);
var Lcom_tribab_tricount_client_Application$IdentifiezVousScrollPanel_2_classLit = createForClass('com.tribab.tricount.client', 'Application/IdentifiezVousScrollPanel', 245);
function Application$IdentifiezVousWithGdprPolicies(this$0){
  var gdprScroll, identifiezVousScroll;
  this.panel = new HorizontalPanel;
  identifiezVousScroll = new Application$IdentifiezVousScrollPanel;
  $setPixelSize(identifiezVousScroll, ~~(this$0.WIDTHBODY_INT / 2), 300);
  gdprScroll = new Application$GdprPolicyScrollPanel;
  $setPixelSize(gdprScroll, ~~(this$0.WIDTHBODY_INT / 2), 300);
  $add_3(this.panel, identifiezVousScroll);
  $add_3(this.panel, gdprScroll);
  $initWidget(this, this.panel);
}

defineClass(244, 708, $intern_37, Application$IdentifiezVousWithGdprPolicies);
var Lcom_tribab_tricount_client_Application$IdentifiezVousWithGdprPolicies_2_classLit = createForClass('com.tribab.tricount.client', 'Application/IdentifiezVousWithGdprPolicies', 244);
function $demoTricountWidget(this$static){
  var demoTitle, demoWarning, left, right;
  if (!this$static.demoTricountWidget) {
    demoWarning = new HorizontalPanel;
    setStylePrimaryName(($clinit_DOM() , demoWarning.element), 'demoWarningTable');
    left = new Image_0;
    $setUrl_1(left, ($clinit_UriUtils() , new SafeUriString('Images/demoRoundedLeft.png')));
    $add_3(demoWarning, left);
    $setCellWidth(demoWarning, left, '20px');
    demoTitle = new Label_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Sample Tricount - updates are not saved !'));
    setStylePrimaryName(demoTitle.element, 'demoTitle');
    $add_3(demoWarning, demoTitle);
    right = new Image_0;
    $setUrl_1(right, new SafeUriString('Images/demoRoundedRight.png'));
    $add_3(demoWarning, right);
    $setCellWidth(demoWarning, right, '8px');
    this$static.demoTricountWidget = demoWarning;
  }
  return this$static.demoTricountWidget;
}

function $redraw(this$static, creation, identified){
  var a1, creerDesComptesLink, isOnFacebook, quitter, quitterLabel, vp;
  isOnFacebook = !(fbid == null || $equals_1(fbid, ''));
  $clear(this$static.panel);
  $clear(this$static.buttonsPanel);
  if (creation) {
    $add_3(this$static.panel, this$static.tricountCreationLabel);
  }
   else {
    $add_3(this$static.panel, this$static.titlePanel);
    if (identified) {
      a1 = new Anchor_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Print'));
      add_7(a1, new Application$TitleAndButtonPanel$1);
      setStyleName(($clinit_DOM() , a1.element), 'titleLink', true);
      $add_3(this$static.buttonsPanel, a1);
      $add_3(this$static.buttonsPanel, new Label_1('|'));
    }
  }
  if (!creation) {
    creerDesComptesLink = new Anchor_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Create a new tricount'));
    setStyleName(($clinit_DOM() , creerDesComptesLink.element), 'titleLink', true);
    add_7(creerDesComptesLink, new Application$TitleAndButtonPanel$2(this$static, isOnFacebook));
    $add_3(this$static.buttonsPanel, creerDesComptesLink);
    $add_3(this$static.buttonsPanel, new Label_1('|'));
    isOnFacebook?(quitterLabel = (!localizedStrings && (localizedStrings = new Locale_) , 'My tricounts')):(quitterLabel = (!localizedStrings && (localizedStrings = new Locale_) , 'Quit'));
    quitter = new Anchor_1(quitterLabel);
    $add_3(this$static.buttonsPanel, quitter);
    setStyleName(quitter.element, 'titleLink', true);
    add_7(quitter, new Application$TitleAndButtonPanel$3(this$static, isOnFacebook));
    if ($isDemoTricount(singleton_0, tricount_0.random_0) == 1) {
      vp = new VerticalPanel;
      $add_6(vp, $demoTricountWidget(this$static));
      $add_6(vp, this$static.buttonsPanel);
      $setCellHorizontalAlignment_0(vp, $demoTricountWidget(this$static), ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
      $setCellHorizontalAlignment_0(vp, this$static.buttonsPanel, ALIGN_RIGHT);
      $add_3(this$static.panel, vp);
      $setCellHorizontalAlignment_0(this$static.panel, vp, ALIGN_RIGHT);
      $setCellVerticalAlignment_1(this$static.panel, vp, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM));
      $setSpacing(this$static.panel, 1);
    }
     else {
      $add_3(this$static.panel, this$static.buttonsPanel);
      $setCellHorizontalAlignment_0(this$static.panel, this$static.buttonsPanel, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
      $setCellVerticalAlignment_1(this$static.panel, this$static.buttonsPanel, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM));
      $setSpacing(this$static.panel, 1);
    }
  }
}

function $updateTricountFields(this$static){
  $setText_0(this$static.titleLabel, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Tricount "' + tricount_0.name_0 + '"'));
  $setText_0(this$static.descriptionLabel, tricount_0.description);
  !!tricount_0.createdBy && tricount_0.createdBy.id_0 != 0?$setText_0(this$static.createdByLabel, (!localizedStrings && (localizedStrings = new Locale_) , 'Created by ' + tricount_0.createdBy.name_0 + ', on ' + getStringDate(tricount_0.creationDate))):$setText_0(this$static.createdByLabel, (!localizedStrings && (localizedStrings = new Locale_) , 'Created on a mobile, on ' + getStringDate(tricount_0.creationDate)));
}

function Application$TitleAndButtonPanel(this$0){
  this.this$01 = this$0;
  this.panel = new HorizontalPanel;
  this.titlePanel = new VerticalPanel;
  this.buttonsPanel = new HorizontalPanel;
  $setWidth(this.panel, '100%');
  $setStylePrimaryName(this.panel, 'titlePanel');
  this.titleLabel = new Label;
  $setStyleName(this.titleLabel, 'tricountTitle');
  this.descriptionLabel = new Label;
  $setStyleName(this.descriptionLabel, 'tricountDescription');
  this.createdByLabel = new Label;
  $setStyleName(this.createdByLabel, 'tricountDescription');
  $add_6(this.titlePanel, this.titleLabel);
  $add_6(this.titlePanel, this.descriptionLabel);
  $add_6(this.titlePanel, this.createdByLabel);
  this.tricountCreationLabel = new Label;
  $setText_0(this.tricountCreationLabel, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Create a tricount (Step 2 / 2)'));
  $setStylePrimaryName(this.tricountCreationLabel, 'headerTitleText');
  $initWidget(this, this.panel);
}

defineClass(247, 708, $intern_37, Application$TitleAndButtonPanel);
var Lcom_tribab_tricount_client_Application$TitleAndButtonPanel_2_classLit = createForClass('com.tribab.tricount.client', 'Application/TitleAndButtonPanel', 247);
function Application$TitleAndButtonPanel$1(){
}

defineClass(248, 1, $intern_49, Application$TitleAndButtonPanel$1);
_.onClick_0 = function onClick_10(sender){
  var url_0;
  url_0 = getGwtMetaProperty('gwt:url', null, true) + '/print.jsp?tricountID=' + tricount_0.random_0;
  neq(currentUser.facebookid, {l:$intern_20, m:$intern_20, h:$intern_21}) && (url_0 += '&fb=1');
  getTricountLang() != null && !$equals_1(getTricountLang(), '') && (url_0 += '&lang=' + getTricountLang());
  printPage(url_0, $generatePrint());
}
;
var Lcom_tribab_tricount_client_Application$TitleAndButtonPanel$1_2_classLit = createForClass('com.tribab.tricount.client', 'Application/TitleAndButtonPanel/1', 248);
function Application$TitleAndButtonPanel$2(this$1, val$isOnFacebook){
  this.this$11 = this$1;
  this.val$isOnFacebook2 = val$isOnFacebook;
}

defineClass(249, 1, $intern_49, Application$TitleAndButtonPanel$2);
_.onClick_0 = function onClick_11(sender){
  (!this.this$11.this$01.isInCreationProcess || this.val$isOnFacebook2 || confirm_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Have you shared your tricount?'))) && (this.val$isOnFacebook2?goToURL('http://apps.facebook.com/' + getGwtMetaProperty('facebook:app:name', null, true) + '/createTricount.jsp'):goToURL(getGwtMetaProperty('web:url', null, true) + '?create=1'));
}
;
_.val$isOnFacebook2 = false;
var Lcom_tribab_tricount_client_Application$TitleAndButtonPanel$2_2_classLit = createForClass('com.tribab.tricount.client', 'Application/TitleAndButtonPanel/2', 249);
function Application$TitleAndButtonPanel$3(this$1, val$isOnFacebook){
  this.this$11 = this$1;
  this.val$isOnFacebook2 = val$isOnFacebook;
}

defineClass(250, 1, $intern_49, Application$TitleAndButtonPanel$3);
_.onClick_0 = function onClick_12(sender){
  (!this.this$11.this$01.isInCreationProcess || this.val$isOnFacebook2 || confirm_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Have you shared your tricount?'))) && (this.val$isOnFacebook2?goToURL('http://apps.facebook.com/' + getGwtMetaProperty('facebook:app:name', null, true)):goToURL(getGwtMetaProperty('homepage:url', null, true)));
}
;
_.val$isOnFacebook2 = false;
var Lcom_tribab_tricount_client_Application$TitleAndButtonPanel$3_2_classLit = createForClass('com.tribab.tricount.client', 'Application/TitleAndButtonPanel/3', 250);
function getGwtMetaProperty(property, defaultValue, mandatory){
  var properyElement, value_0;
  value_0 = null;
  properyElement = ($clinit_DOM() , $clinit_DOM() , $getElementById($doc, property));
  !!properyElement && (value_0 = $getPropertyString(properyElement, 'content'));
  if (value_0 == null && mandatory) {
    throw new RuntimeException_0('Mandatory property "' + property + '" not found!');
  }
  value_0 = value_0 != null?value_0:defaultValue;
  return value_0;
}

function getIsCreation(){
  var creation;
  creation = getGwtMetaProperty('tricount:creation', 'no', false);
  if (creation == null || $equals_1(creation, 'no'))
    return false;
  return true;
}

function getTRICOUNT_URL(random){
  return getGwtMetaProperty('web:url', null, true) + random;
}

function getTricountLang(){
  var lang_0, langParam;
  lang_0 = getGwtMetaProperty('tricount:lang', null, false);
  if (lang_0 == null)
    lang_0 = 'en';
  else {
    langParam = $split(lang_0, '=', 0);
    langParam.length != 2?(lang_0 = 'en'):(lang_0 = langParam[1]);
  }
  return lang_0;
}

function cleanTextNumber(t){
  var toConvert;
  toConvert = $replace_0(t, 44, 46);
  return toConvert;
}

function getConcerneQui(tricount, transaction){
  var first, i, impact, impact$iterator, toReturn, u, u$iterator;
  if ($getActualRepartitionSize(transaction) == $getUsers(tricount).array.length) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'all';
  }
   else if ($getActualRepartitionSize(transaction) > ~~($getUsers(tricount).array.length / 2)) {
    toReturn = ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'all except  ');
    first = true;
    for (u$iterator = new AbstractList$IteratorImpl($getUsers(tricount)); u$iterator.i < u$iterator.this$01_0.size_1();) {
      u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
      if ($getBalanceForUser(transaction, u, true, false) != 0)
        continue;
      first || (toReturn += ', ');
      first = false;
      toReturn += u.name_0;
    }
    return toReturn;
  }
   else {
    toReturn = '';
    i = 0;
    for (impact$iterator = transaction.repartition.iterator(); impact$iterator.hasNext();) {
      impact = dynamicCast(impact$iterator.next_0(), 115);
      u = impact.user;
      if ($getBalanceForUser(transaction, u, true, false) != 0) {
        toReturn += u.name_0;
        i < $getActualRepartitionSize(transaction) - 1 && (toReturn += ', ');
      }
      ++i;
    }
    return toReturn;
  }
}

function $clinit_TricountConstants(){
  $clinit_TricountConstants = emptyMethod;
  DEMO_TRICOUNTS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['WYnESKTlsSycdiNQ', 'vgDvuypwshGSSBxw', 'itChllJVTViaANcb', 'CxTTFMEZuNvjfHyaD', 'lWhxTbnvbTuYKaJde', 'GbotvyiPBXpGhIwNF', 'YvmEkGCUdmZTYRTfJ', 'ahybpXnOGjxGsySep', 'iAxShYAcggMzFElfQ', 'OTRCejzdhNllRKcvY', 'wBZUGCgTLOHJrexcG', 'BLBvIQhaMuaHuJyJS']);
}

var DEMO_TRICOUNTS, localizedStrings;
function $addUserListener(this$static, user){
  $addUserUpdatedListener(user, new TricountCommController$2(this$static));
}

function $deleteTransaction(this$static, t){
  $deleteTransaction_0(this$static.service, t, new TricountCommController$6(this$static));
}

function $getSuggestedFriends(this$static, s){
  $getSuggestedFriends_0(this$static.service, s, new TricountCommController$11(this$static));
}

function $loadTricount(this$static, tricountId){
  $fetchTricount(this$static.service, tricountId, new TricountCommController$1(this$static, tricountId));
}

function $sendTransaction(this$static, t){
  $addTransaction(this$static.service, t, new TricountCommController$5(this$static, t));
}

function $sendTransactionComment(this$static, c){
  $addTransactionComment(this$static.service, c, new TricountCommController$7(this$static));
}

function $sendTransactionUpdate(this$static, t){
  $updateTransaction(this$static.service, t, new TricountCommController$4(this$static));
}

function $sendTricountUpdate(this$static, t){
  $updateTricount(this$static.service, t, new TricountCommController$3(this$static));
}

function $sendUser(this$static, u){
  $addUser(this$static.service, u, new TricountCommController$8(this$static));
}

function $sendUserDeletion(this$static, u){
  $deleteUser(this$static.service, u, new TricountCommController$10(this$static));
}

function $sendUserUpdate(this$static, u){
  $updateUser(this$static.service, u, new TricountCommController$9(this$static));
}

function TricountCommController(model){
  this.service = getInstance();
  this.model = model;
}

defineClass(298, 1, {}, TricountCommController);
var Lcom_tribab_tricount_client_comm_TricountCommController_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController', 298);
function $onFailure(this$static, caught){
  $clinit_System();
  caught.getMessage();
  $printStackTrace(caught, $clinit_System());
  $errorOccured(this$static.this$01.model, 'Error loading tricount.');
  alert_0(caught.getMessage());
}

function $onSuccess(this$static, iResult){
  var f, f$iterator, f$iterator0;
  $clinit_System();
  $setTricount_0(this$static.this$01.model, iResult);
  $setRandom(iResult, this$static.val$tricountId2);
  if ($isDemoTricount(singleton_0, tricount_0.random_0) == 1) {
    return;
  }
  $addTricountModifiedListener(iResult, new TricountCommController$1$1(this$static));
  $addTransactionAddedListener(iResult, new TricountCommController$1$2(this$static));
  $addTransactionRemovedListener(iResult, new TricountCommController$1$3(this$static));
  $addUserAddedListener(iResult, new TricountCommController$1$4(this$static));
  $addUserRemovedListener(iResult, new TricountCommController$1$5(this$static));
  for (f$iterator0 = new AbstractList$IteratorImpl($getTransactions(iResult)); f$iterator0.i < f$iterator0.this$01_0.size_1();) {
    f = (checkCriticalElement(f$iterator0.i < f$iterator0.this$01_0.size_1()) , dynamicCast(f$iterator0.this$01_0.get_0(f$iterator0.last = f$iterator0.i++), 68));
    $addCommentAddedListener(f, new TricountCommController$1$6(this$static));
    $addTransactionModifiedListener(f, new TricountCommController$1$7(this$static));
  }
  for (f$iterator = new AbstractList$IteratorImpl($getUsers(iResult)); f$iterator.i < f$iterator.this$01_0.size_1();) {
    f = (checkCriticalElement(f$iterator.i < f$iterator.this$01_0.size_1()) , dynamicCast(f$iterator.this$01_0.get_0(f$iterator.last = f$iterator.i++), 37));
    $addUserUpdatedListener(f, new TricountCommController$1$8(this$static));
  }
}

function TricountCommController$1(this$0, val$tricountId){
  this.this$01 = this$0;
  this.val$tricountId2 = val$tricountId;
}

defineClass(299, 1, {}, TricountCommController$1);
_.onFailure = function onFailure(caught){
  $onFailure(this, caught);
}
;
_.onSuccess = function onSuccess(iResult){
  $onSuccess(this, dynamicCast(iResult, 744));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$1_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/1', 299);
function $onEvent_5(this$static, parameter){
  var toSend;
  toSend = new Tricount;
  $setId_0(toSend, parameter.id_0);
  $setRandom(toSend, parameter.random_0);
  $setName_0(toSend, parameter.name_0);
  $setDescription(toSend, parameter.description);
  $setCurrency_0(toSend, parameter.currency);
  $sendTricountUpdate(this$static.this$11.this$01, toSend);
}

function TricountCommController$1$1(this$1){
  this.this$11 = this$1;
}

defineClass(300, 1, $intern_50, TricountCommController$1$1);
_.onEvent = function onEvent_5(parameter){
  $onEvent_5(this, dynamicCast(parameter, 124));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$1$1_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/1/1', 300);
function $onEvent_6(this$static, parameter){
  $sendTransaction(this$static.this$11.this$01, parameter);
}

function TricountCommController$1$2(this$1){
  this.this$11 = this$1;
}

defineClass(301, 1, $intern_50, TricountCommController$1$2);
_.onEvent = function onEvent_6(parameter){
  $onEvent_6(this, dynamicCast(parameter, 77));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$1$2_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/1/2', 301);
function $onEvent_7(this$static, parameter){
  $deleteTransaction(this$static.this$11.this$01, parameter);
}

function TricountCommController$1$3(this$1){
  this.this$11 = this$1;
}

defineClass(302, 1, $intern_50, TricountCommController$1$3);
_.onEvent = function onEvent_7(parameter){
  $onEvent_7(this, dynamicCast(parameter, 77));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$1$3_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/1/3', 302);
function $onEvent_8(this$static, parameter){
  $sendUser(this$static.this$11.this$01, parameter);
}

function TricountCommController$1$4(this$1){
  this.this$11 = this$1;
}

defineClass(303, 1, $intern_50, TricountCommController$1$4);
_.onEvent = function onEvent_8(parameter){
  $onEvent_8(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$1$4_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/1/4', 303);
function $onEvent_9(this$static, parameter){
  $sendUserDeletion(this$static.this$11.this$01, parameter);
}

function TricountCommController$1$5(this$1){
  this.this$11 = this$1;
}

defineClass(304, 1, $intern_50, TricountCommController$1$5);
_.onEvent = function onEvent_9(parameter){
  $onEvent_9(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$1$5_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/1/5', 304);
function $onEvent_10(this$static, parameter){
  $sendTransactionComment(this$static.this$11.this$01, parameter);
}

function TricountCommController$1$6(this$1){
  this.this$11 = this$1;
}

defineClass(305, 1, $intern_50, TricountCommController$1$6);
_.onEvent = function onEvent_10(parameter){
  $onEvent_10(this, dynamicCast(parameter, 84));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$1$6_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/1/6', 305);
function $onEvent_11(this$static, parameter){
  $sendTransactionUpdate(this$static.this$11.this$01, parameter);
}

function TricountCommController$1$7(this$1){
  this.this$11 = this$1;
}

defineClass(306, 1, $intern_50, TricountCommController$1$7);
_.onEvent = function onEvent_11(parameter){
  $onEvent_11(this, dynamicCast(parameter, 77));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$1$7_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/1/7', 306);
function $onEvent_12(this$static, parameter){
  $sendUserUpdate(this$static.this$11.this$01, parameter);
}

function TricountCommController$1$8(this$1){
  this.this$11 = this$1;
}

defineClass(307, 1, $intern_50, TricountCommController$1$8);
_.onEvent = function onEvent_12(parameter){
  $onEvent_12(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$1$8_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/1/8', 307);
function TricountCommController$10(this$0){
  this.this$01 = this$0;
}

defineClass(318, 1, {}, TricountCommController$10);
_.onFailure = function onFailure_0(caught){
  $clinit_System();
  $errorOccured(this.this$01.model, 'Error deleting User');
}
;
_.onSuccess = function onSuccess_0(result){
  throwClassCastExceptionUnlessNull(result);
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$10_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/10', 318);
function $onSuccess_0(this$static, result){
  $suggestedFriendsReceived(this$static.this$01.model, dynamicCast(result, 34));
}

function TricountCommController$11(this$0){
  this.this$01 = this$0;
}

defineClass(319, 1, {}, TricountCommController$11);
_.onFailure = function onFailure_1(caught){
  $clinit_System();
}
;
_.onSuccess = function onSuccess_1(result){
  $onSuccess_0(this, dynamicCast(result, 36));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$11_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/11', 319);
function $onEvent_13(this$static, parameter){
  $sendUserUpdate(this$static.this$01, parameter);
}

function TricountCommController$2(this$0){
  this.this$01 = this$0;
}

defineClass(308, 1, $intern_50, TricountCommController$2);
_.onEvent = function onEvent_13(parameter){
  $onEvent_13(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$2_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/2', 308);
function TricountCommController$3(this$0){
  this.this$01 = this$0;
}

defineClass(309, 1, {}, TricountCommController$3);
_.onFailure = function onFailure_2(caught){
  $clinit_System();
  $errorOccured(this.this$01.model, 'Error updating Tricount');
}
;
_.onSuccess = function onSuccess_2(result){
  throwClassCastExceptionUnlessNull(result);
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$3_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/3', 309);
function TricountCommController$4(this$0){
  this.this$01 = this$0;
}

defineClass(310, 1, {}, TricountCommController$4);
_.onFailure = function onFailure_3(caught){
  $clinit_System();
  $errorOccured(this.this$01.model, 'Error updating Transaction');
}
;
_.onSuccess = function onSuccess_3(result){
  throwClassCastExceptionUnlessNull(result);
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$4_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/4', 310);
function $onSuccess_1(this$static, result){
  $updateTransactionID(tricount_0, result);
  $addCommentAddedListener(this$static.val$t2, new TricountCommController$5$1(this$static));
  $addTransactionModifiedListener(this$static.val$t2, new TricountCommController$5$2(this$static));
}

function TricountCommController$5(this$0, val$t){
  this.this$01 = this$0;
  this.val$t2 = val$t;
}

defineClass(311, 1, {}, TricountCommController$5);
_.onFailure = function onFailure_4(caught){
  $errorOccured(this.this$01.model, 'Error adding Transaction');
}
;
_.onSuccess = function onSuccess_4(result){
  $onSuccess_1(this, dynamicCast(result, 123));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$5_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/5', 311);
function $onEvent_14(this$static, parameter){
  $sendTransactionComment(this$static.this$11.this$01, parameter);
}

function TricountCommController$5$1(this$1){
  this.this$11 = this$1;
}

defineClass(312, 1, $intern_50, TricountCommController$5$1);
_.onEvent = function onEvent_14(parameter){
  $onEvent_14(this, dynamicCast(parameter, 84));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$5$1_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/5/1', 312);
function $onEvent_15(this$static, parameter){
  $sendTransactionUpdate(this$static.this$11.this$01, parameter);
}

function TricountCommController$5$2(this$1){
  this.this$11 = this$1;
}

defineClass(313, 1, $intern_50, TricountCommController$5$2);
_.onEvent = function onEvent_15(parameter){
  $onEvent_15(this, dynamicCast(parameter, 77));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$5$2_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/5/2', 313);
function TricountCommController$6(this$0){
  this.this$01 = this$0;
}

defineClass(314, 1, {}, TricountCommController$6);
_.onFailure = function onFailure_5(caught){
  $errorOccured(this.this$01.model, 'Error deleting Transaction');
}
;
_.onSuccess = function onSuccess_5(result){
  throwClassCastExceptionUnlessNull(result);
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$6_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/6', 314);
function TricountCommController$7(this$0){
  this.this$01 = this$0;
}

defineClass(315, 1, {}, TricountCommController$7);
_.onFailure = function onFailure_6(caught){
  $errorOccured(this.this$01.model, 'Error adding Comment');
}
;
_.onSuccess = function onSuccess_6(result){
  dynamicCast(result, 123);
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$7_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/7', 315);
function $onSuccess_2(result){
  $updateUserID(tricount_0, result);
}

function TricountCommController$8(this$0){
  this.this$01 = this$0;
}

defineClass(316, 1, {}, TricountCommController$8);
_.onFailure = function onFailure_7(caught){
  $clinit_System();
  $errorOccured(this.this$01.model, 'Error adding User');
}
;
_.onSuccess = function onSuccess_7(result){
  $onSuccess_2(dynamicCast(result, 123));
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$8_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/8', 316);
function TricountCommController$9(this$0){
  this.this$01 = this$0;
}

defineClass(317, 1, {}, TricountCommController$9);
_.onFailure = function onFailure_8(caught){
  $clinit_System();
  $errorOccured(this.this$01.model, 'Error updating User');
}
;
_.onSuccess = function onSuccess_8(result){
  throwClassCastExceptionUnlessNull(result);
}
;
var Lcom_tribab_tricount_client_comm_TricountCommController$9_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommController/9', 317);
function $clinit_TricountCommExposed(){
  $clinit_TricountCommExposed = emptyMethod;
  RPC_REQUEST_BUILDER = new TricountCommExposed$1;
}

function $addTransaction(this$static, t, callback){
  $addTransaction_0(this$static.service, this$static.token, t, callback);
}

function $addTransactionComment(this$static, c, callback){
  $addTransactionComment_0(this$static.service, this$static.token, c, callback);
}

function $addUser(this$static, u, callback){
  $addUser_0(this$static.service, this$static.token, u, callback);
}

function $deleteTransaction_0(this$static, t, callback){
  $deleteTransaction_1(this$static.service, this$static.token, t, callback);
}

function $deleteUser(this$static, u, callback){
  $deleteUser_0(this$static.service, this$static.token, u, callback);
}

function $fetchTricount(this$static, tricountRandom, callback){
  this$static.token = tricountRandom;
  $fetchTricount_0(this$static.service, tricountRandom, callback);
}

function $getSuggestedFriends_0(this$static, s, callback){
  $getSuggestedFriends_1(this$static.service, this$static.token, s, callback);
}

function $sendMail(this$static, email, callback){
  $sendMail_0(this$static.service, this$static.token, email, callback);
}

function $updateTransaction(this$static, transaction, callback){
  $updateTransaction_0(this$static.service, this$static.token, transaction, callback);
}

function $updateTricount(this$static, tricount, callback){
  $updateTricount_0(this$static.service, this$static.token, tricount, callback);
}

function $updateUser(this$static, u, callback){
  $updateUser_0(this$static.service, this$static.token, u, callback);
}

function TricountCommExposed(){
  $clinit_TricountCommExposed();
}

defineClass(347, 1, {}, TricountCommExposed);
var RPC_REQUEST_BUILDER;
var Lcom_tribab_tricount_client_comm_TricountCommExposed_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommExposed', 347);
function TricountCommExposed$1(){
}

defineClass(349, 348, {}, TricountCommExposed$1);
_.doCreate = function doCreate_0(serviceEntryPoint){
  var requestBuilder;
  requestBuilder = new RequestBuilder(($clinit_RequestBuilder() , POST), serviceEntryPoint);
  if (currentUser) {
    $setHeader(requestBuilder, 'user-in-tricount-uuid', currentUser.uniqueIdentifier.uuidValue);
    $setHeader(requestBuilder, 'user-in-tricount-soft-name', currentUser.name_0);
  }
  return requestBuilder;
}
;
var Lcom_tribab_tricount_client_comm_TricountCommExposed$1_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountCommExposed/1', 349);
function getInstance(){
  var toReturn, endpoint, moduleRelativeURL;
  if (service_0)
    return service_0;
  toReturn = new TricountCommExposed;
  toReturn.service = new TricountComm_Proxy;
  endpoint = toReturn.service;
  moduleRelativeURL = getModuleBaseURL() + 'tricount';
  endpoint.remoteServiceURL = moduleRelativeURL;
  $setRpcRequestBuilder(endpoint, RPC_REQUEST_BUILDER);
  $clinit_System();
  service_0 = toReturn;
  return toReturn;
}

var service_0 = null;
function $clinit_TricountComm_Proxy(){
  $clinit_TricountComm_Proxy = emptyMethod;
  SERIALIZER = new TricountComm_TypeSerializer;
}

function $addTransaction_0(this$static, token, transaction, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'addTransaction');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.tribab.tricount.common.client.model.ITransaction'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeObject(streamWriter, transaction);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      $errorOccured(callback.this$01.model, 'Error adding Transaction');
    }
     else
      throw unwrap($e0);
  }
}

function $addTransactionComment_0(this$static, token, comment, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'addTransactionComment');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.tribab.tricount.common.client.model.IComment'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeObject(streamWriter, comment);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      $errorOccured(callback.this$01.model, 'Error adding Comment');
    }
     else
      throw unwrap($e0);
  }
}

function $addUser_0(this$static, token, u, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'addUser');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.tribab.tricount.common.client.model.IUser'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeObject(streamWriter, u);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      $clinit_System();
      $errorOccured(callback.this$01.model, 'Error adding User');
    }
     else
      throw unwrap($e0);
  }
}

function $createStreamWriter(this$static){
  var toReturn, clientSerializationStreamWriter;
  toReturn = (clientSerializationStreamWriter = new ClientSerializationStreamWriter(this$static.serializer, this$static.moduleBaseURL, this$static.serializationPolicyName) , clientSerializationStreamWriter.objectCount = 0 , $reset(clientSerializationStreamWriter.objectMap) , clientSerializationStreamWriter.stringMap.clear_0() , clientSerializationStreamWriter.stringTable.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1) , clientSerializationStreamWriter.encodeBuffer = new StringBuilder , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.moduleBaseURL) , $writeString(clientSerializationStreamWriter, clientSerializationStreamWriter.serializationPolicyStrongName) , clientSerializationStreamWriter);
  return toReturn;
}

function $deleteTransaction_1(this$static, token, transaction, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'deleteTransaction');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.tribab.tricount.common.client.model.ITransaction'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeObject(streamWriter, transaction);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , VOID));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      $errorOccured(callback.this$01.model, 'Error deleting Transaction');
    }
     else
      throw unwrap($e0);
  }
}

function $deleteUser_0(this$static, token, u, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'deleteUser');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.tribab.tricount.common.client.model.IUser'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeObject(streamWriter, u);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , VOID));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      $clinit_System();
      $errorOccured(callback.this$01.model, 'Error deleting User');
    }
     else
      throw unwrap($e0);
  }
}

function $fetchTricount_0(this$static, tricountRandom, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'fetchTricount');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 1) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, tricountRandom));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      ex = $e0;
      $onFailure(callback, ex);
    }
     else
      throw unwrap($e0);
  }
}

function $getSuggestedFriends_1(this$static, token, FBSession, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'getSuggestedFriends');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeInt(streamWriter, $addString(streamWriter, FBSession));
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , OBJECT));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      $clinit_System();
    }
     else
      throw unwrap($e0);
  }
}

function $sendMail_0(this$static, token, email, callback){
  var ex, helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'sendMail');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.tribab.tricount.common.client.model.ITricountCreationEmail'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeObject(streamWriter, email);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , VOID));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      ex = $e0;
      $onFailure_0(callback);
    }
     else
      throw unwrap($e0);
  }
}

function $updateTransaction_0(this$static, token, transaction, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'updateTransaction');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.tribab.tricount.common.client.model.ITransaction'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeObject(streamWriter, transaction);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , VOID));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      $clinit_System();
      $errorOccured(callback.this$01.model, 'Error updating Transaction');
    }
     else
      throw unwrap($e0);
  }
}

function $updateTricount_0(this$static, token, tricount, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'updateTricount');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.tribab.tricount.common.client.model.ITricount'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeObject(streamWriter, tricount);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , VOID));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      $clinit_System();
      $errorOccured(callback.this$01.model, 'Error updating Tricount');
    }
     else
      throw unwrap($e0);
  }
}

function $updateUser_0(this$static, token, u, callback){
  var helper, streamWriter;
  helper = new RemoteServiceProxy$ServiceHelper(this$static, 'updateUser');
  try {
    streamWriter = ($isStatsAvailable() && $stats_0($timeStat(helper.statsContext, helper.fullServiceName, 'begin')) , helper.streamWriter = $createStreamWriter(helper.this$01) , $writeString(helper.streamWriter, 'com.tribab.tricount.client.comm.TricountComm') , $writeString(helper.streamWriter, helper.methodName) , $writeInt(helper.streamWriter, 2) , helper.streamWriter);
    $writeInt(streamWriter, $addString(streamWriter, 'java.lang.String/2004016611'));
    $writeInt(streamWriter, $addString(streamWriter, 'com.tribab.tricount.common.client.model.IUser'));
    $writeInt(streamWriter, $addString(streamWriter, token));
    $writeObject(streamWriter, u);
    $finish_1(helper, callback, ($clinit_RequestCallbackAdapter$ResponseReader() , VOID));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 53)) {
      $clinit_System();
      $errorOccured(callback.this$01.model, 'Error updating User');
    }
     else
      throw unwrap($e0);
  }
}

function TricountComm_Proxy(){
  $clinit_TricountComm_Proxy();
  RemoteServiceProxy.call(this, getModuleBaseURL(), SERIALIZER);
}

defineClass(468, 467, {}, TricountComm_Proxy);
var SERIALIZER;
var Lcom_tribab_tricount_client_comm_TricountComm_1Proxy_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountComm_Proxy', 468);
function $clinit_TricountComm_TypeSerializer(){
  $clinit_TricountComm_TypeSerializer = emptyMethod;
  methodMapNative_0 = loadMethodsNative();
  signatureMapNative_0 = loadSignaturesNative();
}

function TricountComm_TypeSerializer(){
  $clinit_TricountComm_TypeSerializer();
  SerializerBase.call(this, methodMapNative_0, signatureMapNative_0);
}

function loadMethodsNative(){
  var result = {};
  result['com.google.gwt.i18n.shared.impl.DateRecord/3173882066'] = [instantiate, deserialize, serialize];
  result['com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533'] = [instantiate_0, deserialize_0, serialize_0];
  result['com.google.gwt.user.client.rpc.RpcTokenException/2345075298'] = [instantiate_1, deserialize_1];
  result['com.google.gwt.user.client.rpc.XsrfToken/4254043109'] = [undefined, undefined, serialize_1];
  result['com.tribab.tricount.common.client.model.FBFriend/2396597480'] = [instantiate_28, deserialize_31];
  result['[Lcom.tribab.tricount.common.client.model.FBFriend;/1736264953'] = [instantiate_27, deserialize_30];
  result['[Lcom.tribab.tricount.common.client.model.IComment;/519848836'] = [instantiate_29, deserialize_32, serialize_30];
  result['[Lcom.tribab.tricount.common.client.model.IOtherUserCreationEmail;/177310526'] = [undefined, undefined, serialize_31];
  result['[Lcom.tribab.tricount.common.client.model.ITransactionImpact;/1020120615'] = [instantiate_30, deserialize_33, serialize_32];
  result['com.tribab.tricount.common.client.model.OldAndNewID/523958142'] = [instantiate_31, deserialize_34];
  result['com.tribab.tricount.common.client.model.OtherUserCreationEmail/3573169680'] = [undefined, undefined, serialize_34];
  result['[Lcom.tribab.tricount.common.client.model.OtherUserCreationEmail;/2904645522'] = [undefined, undefined, serialize_33];
  result['com.tribab.tricount.common.client.model.Transaction/1038437561'] = [instantiate_37, deserialize_40, serialize_40];
  result['com.tribab.tricount.common.client.model.TransactionComment/2633770126'] = [instantiate_33, deserialize_36, serialize_36];
  result['[Lcom.tribab.tricount.common.client.model.TransactionComment;/3694700101'] = [instantiate_32, deserialize_35, serialize_35];
  result['com.tribab.tricount.common.client.model.TransactionImpactOnUser/1768197003'] = [instantiate_35, deserialize_38, serialize_38];
  result['[Lcom.tribab.tricount.common.client.model.TransactionImpactOnUser;/2704602986'] = [instantiate_34, deserialize_37, serialize_37];
  result['com.tribab.tricount.common.client.model.TransactionTypeEnum/4084311570'] = [instantiate_36, deserialize_39, serialize_39];
  result['com.tribab.tricount.common.client.model.Tricount/436993697'] = [instantiate_38, deserialize_41, serialize_42];
  result['com.tribab.tricount.common.client.model.TricountCreationEmail/3767156221'] = [undefined, undefined, serialize_41];
  result['com.tribab.tricount.common.client.model.User/3600805838'] = [instantiate_39, deserialize_42, serialize_43];
  result['java.lang.Boolean/476441737'] = [instantiate_2, deserialize_2, serialize_2];
  result['java.lang.Integer/3438268394'] = [instantiate_3, deserialize_3, serialize_3];
  result['java.lang.String/2004016611'] = [instantiate_5, deserialize_6, serialize_6];
  result['[Ljava.lang.String;/2600011424'] = [instantiate_4, deserialize_5, serialize_5];
  result['java.sql.Date/730999118'] = [instantiate_6, deserialize_7, serialize_7];
  result['java.sql.Time/1816797103'] = [instantiate_7, deserialize_8, serialize_8];
  result['java.sql.Timestamp/3040052672'] = [instantiate_8, deserialize_9, serialize_9];
  result['java.util.ArrayList/4159755760'] = [instantiate_9, deserialize_10, serialize_10];
  result['java.util.Arrays$ArrayList/2507071751'] = [instantiate_10, deserialize_11, serialize_11];
  result['java.util.Collections$EmptyList/4157118744'] = [instantiate_11, deserialize_13, serialize_13];
  result['java.util.Collections$EmptyMap/4174664486'] = [instantiate_12, deserialize_14, serialize_14];
  result['java.util.Collections$EmptySet/3523698179'] = [instantiate_13, deserialize_15, serialize_15];
  result['java.util.Collections$SingletonList/1586180994'] = [instantiate_14, deserialize_16, serialize_16];
  result['java.util.Date/3385151746'] = [instantiate_15, deserialize_17, serialize_17];
  result['java.util.HashMap/1797211028'] = [instantiate_16, deserialize_18, serialize_18];
  result['java.util.HashSet/3273092938'] = [instantiate_17, deserialize_19, serialize_19];
  result['java.util.IdentityHashMap/1839153020'] = [instantiate_18, deserialize_20, serialize_20];
  result['java.util.LinkedHashMap/3008245022'] = [instantiate_19, deserialize_21, serialize_21];
  result['java.util.LinkedHashSet/95640124'] = [instantiate_20, deserialize_22, serialize_22];
  result['java.util.LinkedList/3953877921'] = [instantiate_21, deserialize_23, serialize_23];
  result['java.util.Stack/1346942793'] = [instantiate_22, deserialize_25, serialize_25];
  result['java.util.TreeMap/1493889780'] = [instantiate_23, deserialize_26, serialize_26];
  result['java.util.TreeSet/4043497002'] = [instantiate_24, deserialize_27, serialize_27];
  result['java.util.UUID/2940008275'] = [instantiate_25, deserialize_28, serialize_28];
  result['java.util.Vector/3057315478'] = [instantiate_26, deserialize_29, serialize_29];
  return result;
}

function loadSignaturesNative(){
  var result = [];
  result[getHashCode(Lcom_google_gwt_i18n_shared_impl_DateRecord_2_classLit)] = 'com.google.gwt.i18n.shared.impl.DateRecord/3173882066';
  result[getHashCode(Lcom_google_gwt_user_client_rpc_IncompatibleRemoteServiceException_2_classLit)] = 'com.google.gwt.user.client.rpc.IncompatibleRemoteServiceException/3936916533';
  result[getHashCode(Lcom_google_gwt_user_client_rpc_RpcTokenException_2_classLit)] = 'com.google.gwt.user.client.rpc.RpcTokenException/2345075298';
  result[getHashCode(Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit)] = 'com.google.gwt.user.client.rpc.XsrfToken/4254043109';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_FBFriend_2_classLit)] = 'com.tribab.tricount.common.client.model.FBFriend/2396597480';
  result[getHashCode(getClassLiteralForArray(Lcom_tribab_tricount_common_client_model_FBFriend_2_classLit, 1))] = '[Lcom.tribab.tricount.common.client.model.FBFriend;/1736264953';
  result[getHashCode(getClassLiteralForArray(Lcom_tribab_tricount_common_client_model_IComment_2_classLit, 1))] = '[Lcom.tribab.tricount.common.client.model.IComment;/519848836';
  result[getHashCode(getClassLiteralForArray(Lcom_tribab_tricount_common_client_model_IOtherUserCreationEmail_2_classLit, 1))] = '[Lcom.tribab.tricount.common.client.model.IOtherUserCreationEmail;/177310526';
  result[getHashCode(getClassLiteralForArray(Lcom_tribab_tricount_common_client_model_ITransactionImpact_2_classLit, 1))] = '[Lcom.tribab.tricount.common.client.model.ITransactionImpact;/1020120615';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_OldAndNewID_2_classLit)] = 'com.tribab.tricount.common.client.model.OldAndNewID/523958142';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_OtherUserCreationEmail_2_classLit)] = 'com.tribab.tricount.common.client.model.OtherUserCreationEmail/3573169680';
  result[getHashCode(getClassLiteralForArray(Lcom_tribab_tricount_common_client_model_OtherUserCreationEmail_2_classLit, 1))] = '[Lcom.tribab.tricount.common.client.model.OtherUserCreationEmail;/2904645522';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_Transaction_2_classLit)] = 'com.tribab.tricount.common.client.model.Transaction/1038437561';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_TransactionComment_2_classLit)] = 'com.tribab.tricount.common.client.model.TransactionComment/2633770126';
  result[getHashCode(getClassLiteralForArray(Lcom_tribab_tricount_common_client_model_TransactionComment_2_classLit, 1))] = '[Lcom.tribab.tricount.common.client.model.TransactionComment;/3694700101';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_TransactionImpactOnUser_2_classLit)] = 'com.tribab.tricount.common.client.model.TransactionImpactOnUser/1768197003';
  result[getHashCode(getClassLiteralForArray(Lcom_tribab_tricount_common_client_model_TransactionImpactOnUser_2_classLit, 1))] = '[Lcom.tribab.tricount.common.client.model.TransactionImpactOnUser;/2704602986';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_TransactionTypeEnum_2_classLit)] = 'com.tribab.tricount.common.client.model.TransactionTypeEnum/4084311570';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_Tricount_2_classLit)] = 'com.tribab.tricount.common.client.model.Tricount/436993697';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_TricountCreationEmail_2_classLit)] = 'com.tribab.tricount.common.client.model.TricountCreationEmail/3767156221';
  result[getHashCode(Lcom_tribab_tricount_common_client_model_User_2_classLit)] = 'com.tribab.tricount.common.client.model.User/3600805838';
  result[getHashCode(Ljava_lang_Boolean_2_classLit)] = 'java.lang.Boolean/476441737';
  result[getHashCode(Ljava_lang_Integer_2_classLit)] = 'java.lang.Integer/3438268394';
  result[getHashCode(Ljava_lang_String_2_classLit)] = 'java.lang.String/2004016611';
  result[getHashCode(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1))] = '[Ljava.lang.String;/2600011424';
  result[getHashCode(Ljava_sql_Date_2_classLit)] = 'java.sql.Date/730999118';
  result[getHashCode(Ljava_sql_Time_2_classLit)] = 'java.sql.Time/1816797103';
  result[getHashCode(Ljava_sql_Timestamp_2_classLit)] = 'java.sql.Timestamp/3040052672';
  result[getHashCode(Ljava_util_ArrayList_2_classLit)] = 'java.util.ArrayList/4159755760';
  result[getHashCode(Ljava_util_Arrays$ArrayList_2_classLit)] = 'java.util.Arrays$ArrayList/2507071751';
  result[getHashCode(Ljava_util_Collections$EmptyList_2_classLit)] = 'java.util.Collections$EmptyList/4157118744';
  result[getHashCode(Ljava_util_Collections$EmptyMap_2_classLit)] = 'java.util.Collections$EmptyMap/4174664486';
  result[getHashCode(Ljava_util_Collections$EmptySet_2_classLit)] = 'java.util.Collections$EmptySet/3523698179';
  result[getHashCode(Ljava_util_Collections$SingletonList_2_classLit)] = 'java.util.Collections$SingletonList/1586180994';
  result[getHashCode(Ljava_util_Date_2_classLit)] = 'java.util.Date/3385151746';
  result[getHashCode(Ljava_util_HashMap_2_classLit)] = 'java.util.HashMap/1797211028';
  result[getHashCode(Ljava_util_HashSet_2_classLit)] = 'java.util.HashSet/3273092938';
  result[getHashCode(Ljava_util_IdentityHashMap_2_classLit)] = 'java.util.IdentityHashMap/1839153020';
  result[getHashCode(Ljava_util_LinkedHashMap_2_classLit)] = 'java.util.LinkedHashMap/3008245022';
  result[getHashCode(Ljava_util_LinkedHashSet_2_classLit)] = 'java.util.LinkedHashSet/95640124';
  result[getHashCode(Ljava_util_LinkedList_2_classLit)] = 'java.util.LinkedList/3953877921';
  result[getHashCode(Ljava_util_Stack_2_classLit)] = 'java.util.Stack/1346942793';
  result[getHashCode(Ljava_util_TreeMap_2_classLit)] = 'java.util.TreeMap/1493889780';
  result[getHashCode(Ljava_util_TreeSet_2_classLit)] = 'java.util.TreeSet/4043497002';
  result[getHashCode(Ljava_util_UUID_2_classLit)] = 'java.util.UUID/2940008275';
  result[getHashCode(Ljava_util_Vector_2_classLit)] = 'java.util.Vector/3057315478';
  return result;
}

defineClass(473, 472, {}, TricountComm_TypeSerializer);
var methodMapNative_0, signatureMapNative_0;
var Lcom_tribab_tricount_client_comm_TricountComm_1TypeSerializer_2_classLit = createForClass('com.tribab.tricount.client.comm', 'TricountComm_TypeSerializer', 473);
function $addFriendRetrievedListener(this$static, l){
  $add_11(this$static.friendRetrievedListener, l);
}

function $setFriends(this$static, f){
  this$static.friends = f;
  !!f && $fire(this$static.friendRetrievedListener, f);
}

function FBFriendManager(){
  this.friendRetrievedListener = new Event_0;
}

defineClass(110, 1, {}, FBFriendManager);
var singleton_1;
var Lcom_tribab_tricount_client_facebook_FBFriendManager_2_classLit = createForClass('com.tribab.tricount.client.facebook', 'FBFriendManager', 110);
function $clinit_FBMultiWordSuggestOracle(){
  $clinit_FBMultiWordSuggestOracle = emptyMethod;
  convertMe = new HTML;
}

function $add_8(this$static, f_suggestion){
  var candidate, i, l, suggestion, word, words;
  suggestion = f_suggestion.fullName;
  $clinit_System();
  candidate = $normalizeSuggestion(this$static, suggestion);
  this$static.toRealSuggestions.put(candidate, suggestion);
  this$static.toFriend.put(candidate, f_suggestion);
  words = $split(candidate, ' ', 0);
  for (i = 0; i < words.length; i++) {
    word = words[i];
    $add_9(this$static.myTree, word);
    l = dynamicCast(this$static.toCandidates.get_1(word), 69);
    if (!l) {
      l = new HashSet;
      this$static.toCandidates.put(word, l);
    }
    l.add_0(candidate);
  }
}

function $clear_2(this$static){
  $clear_3(this$static.myTree);
  this$static.toCandidates.clear_0();
  this$static.toRealSuggestions.clear_0();
}

function $computeItemsFor(this$static, query){
  var candidates;
  query = $normalizeSearch(this$static, query);
  candidates = $createCandidatesFromSearch(this$static, query);
  return $convertToFormattedSuggestions(this$static, query, candidates);
}

function $convertToFormattedSuggestions(this$static, query, candidates){
  var accum, candidate, cursor, end, endIndex, formattedSuggestion, i, index_0, part1, part2, suggestion, suggestions;
  suggestions = new ArrayList;
  for (i = 0; i < candidates.array.length; i++) {
    candidate = (checkElementIndex(i, candidates.array.length) , dynamicCastToString(candidates.array[i]));
    index_0 = 0;
    cursor = 0;
    formattedSuggestion = dynamicCastToString(this$static.toRealSuggestions.get_1(candidate));
    accum = new StringBuffer;
    $append_0(accum, '<table border=0 cellspacing=0 cellpadding=1><tr><td><img src="' + (' http://graph.facebook.com/' + toString_7(dynamicCast(this$static.toFriend.get_1(candidate), 90).id_0) + '/picture') + '" width=25 height=25/><\/td><td valign=top>');
    while (true) {
      index_0 = candidate.indexOf(query, index_0);
      if (index_0 == -1) {
        break;
      }
      endIndex = index_0 + query.length;
      if (index_0 == 0 || 32 == candidate.charCodeAt(index_0 - 1)) {
        part1 = $escapeText(formattedSuggestion.substr(cursor, index_0 - cursor));
        part2 = $escapeText(formattedSuggestion.substr(index_0, endIndex - index_0));
        cursor = endIndex;
        $append_0($append_0($append_0((accum.string += part1 , accum), '<strong>'), part2), '<\/strong>');
      }
      index_0 = endIndex;
    }
    if (cursor == 0) {
      continue;
    }
    end = $escapeText(__substr(formattedSuggestion, cursor, formattedSuggestion.length - cursor));
    accum.string += end;
    accum.string += '<\/td><\/tr><\/table>';
    suggestion = new FBMultiWordSuggestOracle$FBMultiWordSuggestion(dynamicCast(this$static.toFriend.get_1(candidate), 90), formattedSuggestion, accum.string);
    setCheck(suggestions.array, suggestions.array.length, suggestion);
  }
  return suggestions;
}

function $createCandidatesFromSearch(this$static, query){
  var candidateSet, candidates, i, i0, searchWords, thisWordChoices, word;
  candidates = new ArrayList;
  if (query.length == 0) {
    return candidates;
  }
  searchWords = $split(query, ' ', 0);
  candidateSet = null;
  for (i0 = 0; i0 < searchWords.length; i0++) {
    word = searchWords[i0];
    if (word.length == 0 || (new RegExp('^( )$')).test(word)) {
      continue;
    }
    thisWordChoices = $createCandidatesFromWord(this$static, word);
    if (!candidateSet) {
      candidateSet = thisWordChoices;
    }
     else {
      $retainAll(candidateSet, thisWordChoices);
      if (candidateSet.map_0.size_1() < 2) {
        break;
      }
    }
  }
  if (candidateSet) {
    $addAll_0(candidates, candidateSet);
    $clinit_Collections();
    sort_0(candidates, null);
    for (i = candidates.array.length - 1; i > 5; i--) {
      candidates.remove_2(i);
    }
  }
  return candidates;
}

function $createCandidatesFromWord(this$static, query){
  var belongsTo, candidateSet, i, words;
  candidateSet = new HashSet;
  words = $getSuggestions(this$static.myTree, query, $intern_0);
  for (i = 0; i < words.array.length; i++) {
    belongsTo = dynamicCast(this$static.toCandidates.get_1((checkElementIndex(i, words.array.length) , words.array[i])), 36);
    !!belongsTo && $addAll(candidateSet, belongsTo);
  }
  return candidateSet;
}

function $escapeText(escapeMe){
  var escaped;
  $setText_0(convertMe, escapeMe);
  escaped = $getTextOrHtml(convertMe.directionalTextHelper);
  return escaped;
}

function $normalizeSearch(this$static, search){
  search = $normalizeSuggestion(this$static, search);
  search = $replaceAll(search, '\\s+', ' ');
  return $trim(search);
}

function $normalizeSuggestion(this$static, formattedSuggestion){
  var i, ignore;
  formattedSuggestion = formattedSuggestion.toLowerCase();
  if (this$static.whitespaceChars != null) {
    for (i = 0; i < this$static.whitespaceChars.length; i++) {
      ignore = this$static.whitespaceChars[i];
      formattedSuggestion = $replace_0(formattedSuggestion, ignore, 32);
    }
  }
  return formattedSuggestion;
}

function $requestSuggestions(this$static, request, callback){
  var response, suggestions;
  suggestions = $computeItemsFor(this$static, request.query);
  response = new SuggestOracle$Response(suggestions);
  $onSuggestionsReady(callback, response);
}

function FBMultiWordSuggestOracle(){
  $clinit_FBMultiWordSuggestOracle();
  FBMultiWordSuggestOracle_0.call(this);
}

function FBMultiWordSuggestOracle_0(){
  var i;
  this.emptyResponse = new SuggestOracle$Response(new ArrayList);
  this.myTree = new FBPrefixTree;
  this.toCandidates = new HashMap;
  this.toRealSuggestions = new HashMap;
  this.toFriend = new HashMap;
  this.whitespaceChars = initDim(C_classLit, $intern_15, 0, 1, 7, 1);
  for (i = 0; i < 1; i++) {
    this.whitespaceChars[i] = ' '.charCodeAt(i);
  }
}

defineClass(223, 594, {}, FBMultiWordSuggestOracle);
var convertMe;
var Lcom_tribab_tricount_client_facebook_FBMultiWordSuggestOracle_2_classLit = createForClass('com.tribab.tricount.client.facebook', 'FBMultiWordSuggestOracle', 223);
function FBMultiWordSuggestOracle$FBMultiWordSuggestion(fb, replacementString, displayString){
  this.replacementString = replacementString;
  this.displayString = displayString;
  this.friend = fb;
}

defineClass(595, 1, {693:1}, FBMultiWordSuggestOracle$FBMultiWordSuggestion);
_.friend = null;
var Lcom_tribab_tricount_client_facebook_FBMultiWordSuggestOracle$FBMultiWordSuggestion_2_classLit = createForClass('com.tribab.tricount.client.facebook', 'FBMultiWordSuggestOracle/FBMultiWordSuggestion', 595);
function $add_9(this$static, s){
  var suffixes = this$static.suffixes;
  var subtrees = this$static.subtrees_0;
  var prefixLength = this$static.prefixLength;
  if (s == null || s.length == 0) {
    return false;
  }
  if (s.length <= prefixLength) {
    var safeKey = ':' + s;
    if (suffixes.hasOwnProperty(safeKey)) {
      return false;
    }
     else {
      this$static.size_0++;
      suffixes[safeKey] = true;
      return true;
    }
  }
   else {
    var prefix = ':' + s.slice(0, prefixLength);
    var theTree;
    if (subtrees.hasOwnProperty(prefix)) {
      theTree = subtrees[prefix];
    }
     else {
      theTree = new FBPrefixTree_0(prefixLength << 1);
      subtrees[prefix] = theTree;
    }
    var slice_0 = s.slice(prefixLength);
    if (theTree.add_2(slice_0)) {
      this$static.size_0++;
      return true;
    }
     else {
      return false;
    }
  }
}

function $clear_3(this$static){
  this$static.size_0 = 0;
  this$static.subtrees_0 = {};
  this$static.suffixes = {};
}

function $contains(this$static, s){
  return $indexOf_0($getSuggestions(this$static, s, 1), s, 0) != -1;
}

function $getSuggestions(this$static, search, limit){
  var toReturn;
  toReturn = new ArrayList;
  search != null && limit > 0 && $suggestImpl(this$static, search, '', toReturn, limit);
  return toReturn;
}

function $suggestImpl(this$static, search, prefix, output, limit){
  var suffixes = this$static.suffixes;
  var subtrees = this$static.subtrees_0;
  var prefixLength = this$static.prefixLength;
  if (search.length > prefix.length + prefixLength) {
    var key_0 = ':' + search.slice(prefix.length, prefix.length + prefixLength);
    if (subtrees.hasOwnProperty(key_0)) {
      var subtree = subtrees[key_0];
      var target = prefix + unsafe_0(key_0);
      subtree.suggestImpl(search, target, output, limit);
    }
  }
   else {
    for (suffix_0 in suffixes) {
      var target = prefix + unsafe_0(suffix_0);
      target.indexOf(search) == 0 && output.add_0(target);
      if (output.size_1() >= limit) {
        return;
      }
    }
    for (var key_0 in subtrees) {
      var target = prefix + unsafe_0(key_0);
      var subtree = subtrees[key_0];
      if (target.indexOf(search) == 0) {
        if (subtree.size_0 <= limit - output.size_1() || subtree.size_0 == 1) {
          subtree.dump_0(output, target);
        }
         else {
          for (var suffix_0 in subtree.suffixes) {
            output.add_0(target + unsafe_0(suffix_0));
          }
          for (var subkey in subtree.subtrees_0) {
            output.add_0(target + unsafe_0(subkey) + '...');
          }
        }
      }
    }
  }
}

function FBPrefixTree(){
  FBPrefixTree_1.call(this, 2);
}

function FBPrefixTree_0(prefixLength){
  FBPrefixTree_1.call(this, prefixLength);
}

function FBPrefixTree_1(prefixLength){
  this.prefixLength = prefixLength;
  $clear_3(this);
}

function safe_0(s){
  return ':' + s;
}

function unsafe_0(s){
  return __substr(s, 1, s.length - 1);
}

defineClass(155, 712, {36:1}, FBPrefixTree, FBPrefixTree_0);
_.add_0 = function add_11(s){
  return $add_9(this, dynamicCastToString(s));
}
;
_.add_2 = function add_12(s){
  return $add_9(this, s);
}
;
_.contains_0 = function contains_1(o){
  return isJavaString(o) && $contains(this, dynamicCastToString(o));
}
;
_.dump_0 = function dump_0(output, prefix){
  var s, s$iterator;
  for (s$iterator = new FBPrefixTree$PrefixTreeIterator(this); $nextImpl(s$iterator, true) != null;) {
    s = $next_2(s$iterator);
    output.add_0(prefix + s);
  }
}
;
_.iterator = function iterator_6(){
  return new FBPrefixTree$PrefixTreeIterator(this);
}
;
_.size_1 = function size_2(){
  return this.size_0;
}
;
_.suggestImpl = function suggestImpl(search, prefix, output, limit){
  $suggestImpl(this, search, prefix, output, limit);
}
;
_.prefixLength = 0;
_.size_0 = 0;
var Lcom_tribab_tricount_client_facebook_FBPrefixTree_2_classLit = createForClass('com.tribab.tricount.client.facebook', 'FBPrefixTree', 155);
function $addTree(this$static, tree, prefix){
  var suffixes = [];
  for (suffix in tree.suffixes) {
    suffixes.push(suffix);
  }
  var frame_0 = {suffixNames:suffixes, subtrees:tree.subtrees_0, prefix:prefix, index:0};
  var stack_0 = this$static.stack_0;
  stack_0.push(frame_0);
}

function $next_2(this$static){
  var toReturn;
  toReturn = $nextImpl(this$static, false);
  if (toReturn == null) {
    if ($nextImpl(this$static, true) != null) {
      throw new RuntimeException_0('nextImpl() returned null, but hasNext says otherwise');
    }
     else {
      throw new NoSuchElementException_0;
    }
  }
  return toReturn;
}

function $nextImpl(this$static, peek){
  var stack_0 = this$static.stack_0;
  var safe = safe_0;
  var unsafe = unsafe_0;
  while (stack_0.length > 0) {
    var frame_0 = stack_0.pop();
    if (frame_0.index < frame_0.suffixNames.length) {
      var toReturn = frame_0.prefix + unsafe(frame_0.suffixNames[frame_0.index]);
      !peek && frame_0.index++;
      if (frame_0.index < frame_0.suffixNames.length) {
        stack_0.push(frame_0);
      }
       else {
        for (key in frame_0.subtrees) {
          var target = frame_0.prefix + unsafe(key);
          var subtree = frame_0.subtrees[key];
          this$static.addTree(subtree, target);
        }
      }
      return toReturn;
    }
     else {
      for (key in frame_0.subtrees) {
        var target = frame_0.prefix + unsafe(key);
        var subtree = frame_0.subtrees[key];
        this$static.addTree(subtree, target);
      }
    }
  }
  return null;
}

function FBPrefixTree$PrefixTreeIterator(tree){
  this.stack_0 = [];
  $addTree(this, tree, '');
}

defineClass(233, 1, {}, FBPrefixTree$PrefixTreeIterator);
_.addTree = function addTree(tree, prefix){
  $addTree(this, tree, prefix);
}
;
_.hasNext = function hasNext_2(){
  return $nextImpl(this, true) != null;
}
;
_.next_0 = function next_3(){
  return $next_2(this);
}
;
_.remove_0 = function remove_14(){
  throw new UnsupportedOperationException_0('PrefixTree does not support removal.  Use clear()');
}
;
var Lcom_tribab_tricount_client_facebook_FBPrefixTree$PrefixTreeIterator_2_classLit = createForClass('com.tribab.tricount.client.facebook', 'FBPrefixTree/PrefixTreeIterator', 233);
function $module_tricount_share_emailBody(arg0, arg1){
  return 'The group expense report "' + arg0 + '" is accessible on Tricount: <a href="' + arg1 + '">' + arg1 + '<\/a> <br><br>To access it:<ul> <li> <b>From a mobile<\/b>, download the Tricount App (iPhone, Android and Windows) and follow the link <li><b>From a computer<\/b>, simply click on the link<\/ul>Tricount is a tool that allows you to create group expense report after a group activity.<br>Follow us on <b>Facebook<\/b> (<a href="http://facebook.com/tricount">http://facebook.com/tricount<\/a>), or on <b>Twitter<\/b> (<a href="http://twitter.com/tricount">http://twitter.com/tricount<\/a>).';
}

function $module_tricount_share_emailTemplate(arg0, arg1){
  return 'The group expense report "' + arg0 + '" is accessible on Tricount: <a href="' + arg1 + '">' + arg1 + '<\/a> <br><br>To access it:<ul> <li> <b>From a mobile<\/b>, download the Tricount App (iPhone, Android and Windows) and follow the link <li><b>From a computer<\/b>, simply click on the link<\/ul>Tricount is a tool that allows you to create group expense report after a group activity.<br>Follow us on <b>Facebook<\/b> (<a href="http://facebook.com/tricount">http://facebook.com/tricount<\/a>), or on <b>Twitter<\/b> (<a href="http://twitter.com/tricount">http://twitter.com/tricount<\/a>).';
}

function Locale_(){
}

defineClass(4, 1, {}, Locale_);
var Lcom_tribab_tricount_client_locale_Locale_1_2_classLit = createForClass('com.tribab.tricount.client.locale', 'Locale_', 4);
function $createUser(this$static){
  var fv, textBox, user;
  textBox = dynamicCast(this$static.tb.widget, 30);
  fv = new FormValidator;
  $addValidation(fv, new TextBoxValidationElement(textBox, ($clinit_ValidationRules() , USER_NAME)), this$static.myErrorPanel);
  if (!$validate(fv))
    return;
  user = new User_0($trim($getPropertyString(($clinit_DOM() , textBox.element), 'value')));
  $addUser_2(tricount_0, user);
  $addUpdateListener(singleton_0, user);
  this$static.box.hide(false);
}

function $show_0(this$static){
  var bottomLimit, rightLimit, x_0, y_0;
  x_0 = ($clinit_DOM() , ((null , currentEvent).clientX || 0) | 0);
  y_0 = ((null , currentEvent).clientY || 0) | 0;
  rightLimit = $getAbsoluteLeft(singleton_0.rootPanel.element) + WIDTH_INT;
  bottomLimit = $getAbsoluteTop(singleton_0.rootPanel.element) + HEIGHT_INT - 70;
  x_0 + 310 > rightLimit && (x_0 = rightLimit - 310);
  y_0 + 50 > bottomLimit && (y_0 = bottomLimit - 50);
  $setPopupPosition(this$static.box, x_0, y_0);
  this$static.box.show();
  $setFocus(dynamicCast(this$static.tb.widget, 30));
}

function AddNewPersonDialogBox(){
  var annuler, content_0, footer, headerContent, list, ok, textField, title_0, v;
  this.panel = new VerticalPanel;
  this.headerPanel = new SimplePanel;
  this.footerPanel = new SimplePanel;
  this.contentPanel = new SimplePanel;
  this.box = new PopupPanel(true);
  $setHeight_0(this.box, '50px');
  $setWidth_0(this.box, '310px');
  this.box.setWidget(this.panel);
  $add_6(this.panel, this.headerPanel);
  $add_6(this.panel, this.contentPanel);
  $add_6(this.panel, this.footerPanel);
  this.headerPanel.setWidth('295px');
  this.headerPanel.setHeight('30px');
  $setStylePrimaryName(this.headerPanel, 'dialogHeaderPanel');
  this.contentPanel.setWidth('100%');
  this.contentPanel.setHeight('100%');
  this.footerPanel.setWidth('295px');
  this.footerPanel.setHeight('30px');
  $setStylePrimaryName(this.footerPanel, 'dialogFooterPanel');
  headerContent = new HorizontalPanel;
  title_0 = new Label_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Add a participant'));
  $add_3(headerContent, title_0);
  this.headerPanel.setWidget(headerContent);
  content_0 = new VerticalPanel;
  $setPropertyInt(content_0.table, 'cellSpacing', 10);
  this.tb = new LabelAndTextBox((!localizedStrings && (localizedStrings = new Locale_) , 'Name'));
  $add_6(content_0, this.tb);
  this.myErrorPanel = new ValidationErrorWidget;
  $add_6(content_0, this.myErrorPanel);
  textField = dynamicCast(this.tb.widget, 30);
  add_8(textField, new AddNewPersonDialogBox$1(this));
  this.contentPanel.setWidget(content_0);
  ok = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Ok'));
  add_7(ok, new AddNewPersonDialogBox$2(this));
  annuler = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Cancel'));
  add_7(annuler, new AddNewPersonDialogBox$3(this));
  v = new Vector;
  $add_5(v.arrayList, ok);
  $add_5(v.arrayList, annuler);
  list = new HyperlinkList(v);
  footer = new HorizontalPanel;
  $add_3(footer, list);
  this.footerPanel.setWidget(footer);
}

defineClass(180, 708, $intern_37, AddNewPersonDialogBox);
var Lcom_tribab_tricount_client_panel_AddNewPersonDialogBox_2_classLit = createForClass('com.tribab.tricount.client.panel', 'AddNewPersonDialogBox', 180);
function AddNewPersonDialogBox$1(this$0){
  this.this$01 = this$0;
}

defineClass(563, 1, $intern_51, AddNewPersonDialogBox$1);
_.onKeyDown_0 = function onKeyDown_4(sender, keyCode, modifiers){
}
;
_.onKeyPress = function onKeyPress_0(sender, keyCode, modifiers){
  keyCode == 13 && $createUser(this.this$01);
  keyCode == 27 && this.this$01.box.hide(false);
}
;
_.onKeyUp_0 = function onKeyUp_2(sender, keyCode, modifiers){
}
;
var Lcom_tribab_tricount_client_panel_AddNewPersonDialogBox$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'AddNewPersonDialogBox/1', 563);
function AddNewPersonDialogBox$2(this$0){
  this.this$01 = this$0;
}

defineClass(564, 1, $intern_49, AddNewPersonDialogBox$2);
_.onClick_0 = function onClick_13(sender){
  $createUser(this.this$01);
}
;
var Lcom_tribab_tricount_client_panel_AddNewPersonDialogBox$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'AddNewPersonDialogBox/2', 564);
function AddNewPersonDialogBox$3(this$0){
  this.this$01 = this$0;
}

defineClass(565, 1, $intern_49, AddNewPersonDialogBox$3);
_.onClick_0 = function onClick_14(sender){
  this.this$01.box.hide(false);
}
;
var Lcom_tribab_tricount_client_panel_AddNewPersonDialogBox$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'AddNewPersonDialogBox/3', 565);
function DateBoxFormat(){
}

defineClass(621, 1, {}, DateBoxFormat);
_.format_0 = function format_2(dateBox, date){
  if (!date)
    return '';
  return getStringDate(date);
}
;
_.parse_0 = function parse_2(dateBox, text_0, reportError){
  try {
    return $parse_1(getDateFormat(), text_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 22)) {
      return null;
    }
     else
      throw unwrap($e0);
  }
}
;
_.reset_0 = function reset_1(dateBox, abandon){
}
;
var Lcom_tribab_tricount_client_panel_DateBoxFormat_2_classLit = createForClass('com.tribab.tricount.client.panel', 'DateBoxFormat', 621);
function ErrorPanel(text_0){
  var button, dummy2, hp, text2, vp;
  DialogBox.call(this, new DialogBox$CaptionImpl);
  $setText_0(this.caption, text_0);
  vp = new VerticalPanel;
  ($clinit_DOM() , vp.element).style['width'] = '100%';
  vp.element.style['height'] = '100%';
  $setWidget(this.decPanel, vp);
  $maybeUpdateSize(this);
  text2 = new Label_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Another user has made a change that is not compatible with your action.  Please refresh your screen and try again.'));
  $add_6(vp, text2);
  dummy2 = new Label_1(' ');
  $add_6(vp, dummy2);
  $setCellHeight(vp, dummy2, '100px');
  hp = new HorizontalPanel;
  $add_6(vp, hp);
  $setCellHorizontalAlignment_0(vp, hp, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  button = new Button((!localizedStrings && (localizedStrings = new Locale_) , 'Refresh your tricount'));
  add_7(button, new ErrorPanel$1);
  $add_3(hp, button);
  $setWidth_0(this, '350px');
  $setHeight_0(this, '200px');
  $setPopupPosition(this, ~~($getClientWidth($doc) / 2) - 70, ~~($getClientHeight($doc) / 2) - 70);
}

defineClass(516, 212, $intern_38, ErrorPanel);
var Lcom_tribab_tricount_client_panel_ErrorPanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'ErrorPanel', 516);
function ErrorPanel$1(){
}

defineClass(517, 1, $intern_49, ErrorPanel$1);
_.onClick_0 = function onClick_15(sender){
  $wnd.location.reload();
}
;
var Lcom_tribab_tricount_client_panel_ErrorPanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'ErrorPanel/1', 517);
function $createUser_0(this$static){
  var fv, name_0, textBox, u;
  textBox = this$static.tb;
  fv = new FormValidator;
  $addValidation(fv, new TextBoxValidationElement(textBox, ($clinit_ValidationRules() , USER_NAME)), this$static.myErrorPanel);
  name_0 = $trim($getPropertyString(($clinit_DOM() , textBox.element), 'value'));
  if (neq(this$static.FBID, {l:$intern_20, m:$intern_20, h:$intern_21})) {
    name_0.length > 12 && (name_0 = name_0.substr(0, 12));
  }
   else {
    if (!$validate(fv))
      return;
  }
  u = new User_0(name_0);
  neq(this$static.FBID, {l:$intern_20, m:$intern_20, h:$intern_21}) && $setFacebookID(u, this$static.FBID);
  $addUser_2(tricount_0, u);
  this$static.box.hide(false);
}

function $show_1(this$static){
  var bottomLimit, rightLimit, x_0, y_0;
  x_0 = ($clinit_DOM() , ((null , currentEvent).clientX || 0) | 0);
  y_0 = ((null , currentEvent).clientY || 0) | 0;
  rightLimit = $getAbsoluteLeft(singleton_0.rootPanel.element) + WIDTH_INT;
  bottomLimit = $getAbsoluteTop(singleton_0.rootPanel.element) + HEIGHT_INT - 180;
  x_0 + 310 > rightLimit && (x_0 = rightLimit - 310);
  y_0 + 100 > bottomLimit && (y_0 = bottomLimit - 100);
  $setPopupPosition(this$static.box, x_0, y_0);
  this$static.box.show();
  $setFocus(this$static.tb);
}

function FBAddNewPersonDialogBox(){
  var annuler, button1, button2, content_0, dummy, f, f$iterator, footer, headerContent, hint, hp1, hp2, hp3, l, l2, list, loadingImage, loadingPanel, loadingText, ok, oracle, sb, sonNom, title_0, v;
  this.panel = new VerticalPanel;
  this.headerPanel = new SimplePanel;
  this.footerPanel = new SimplePanel;
  this.contentPanel = new SimplePanel;
  this.box = new PopupPanel(true);
  $setHeight_0(this.box, '100px');
  $setWidth_0(this.box, '310px');
  this.box.setWidget(this.panel);
  $add_6(this.panel, this.headerPanel);
  $add_6(this.panel, this.contentPanel);
  $add_6(this.panel, this.footerPanel);
  this.headerPanel.setWidth('295px');
  this.headerPanel.setHeight('30px');
  $setStylePrimaryName(this.headerPanel, 'dialogHeaderPanel');
  this.contentPanel.setWidth('100%');
  this.contentPanel.setHeight('100%');
  this.footerPanel.setWidth('295px');
  this.footerPanel.setHeight('30px');
  $setStylePrimaryName(this.footerPanel, 'dialogFooterPanel');
  headerContent = new HorizontalPanel;
  title_0 = new Label_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Add a participant'));
  $add_3(headerContent, title_0);
  this.headerPanel.setWidget(headerContent);
  content_0 = new VerticalPanel;
  $setPropertyInt(content_0.table, 'cellSpacing', 10);
  hp1 = new HorizontalPanel;
  button1 = new RadioButton;
  $add_3(hp1, button1);
  this.tb = new TextBox;
  oracle = new FBMultiWordSuggestOracle;
  sb = new SuggestBox(oracle, this.tb);
  loadingPanel = new HorizontalPanel;
  loadingImage = new Image_0;
  $setUrl(loadingImage, ($clinit_UriUtils() , new SafeUriString('Images/ajax-loader.gif')));
  loadingText = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'Downloading...'));
  $add_3(loadingPanel, loadingImage);
  $add_3(loadingPanel, loadingText);
  $setPropertyInt(loadingPanel.table, 'cellSpacing', 3);
  $addChangeListener(sb, new FBAddNewPersonDialogBox$1(sb));
  add_8(sb, new FBAddNewPersonDialogBox$2(sb));
  add_8(sb, new FBAddNewPersonDialogBox$3);
  $addHandler_0(sb, new ListenerWrapper$WrappedOldSuggestionHandler(new FBAddNewPersonDialogBox$4(this, sb)), (!TYPE_19 && (TYPE_19 = new GwtEvent$Type) , TYPE_19));
  hint = new HintPanel((!localizedStrings && (localizedStrings = new Locale_) , 'Facebook users will be notified automatically'), (!localizedStrings && (localizedStrings = new Locale_) , 'http://www.tricount.com/faq'));
  add_7(button1, new FBAddNewPersonDialogBox$5(button1, sb, loadingPanel, oracle, hint));
  $setValue(button1, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1));
  l = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'From Facebook'));
  $add_3(hp1, l);
  $add_6(content_0, hp1);
  hp2 = new HorizontalPanel;
  $add_6(content_0, hp2);
  button2 = new RadioButton;
  $add_3(hp2, button2);
  l2 = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'Another friend'));
  $add_3(hp2, l2);
  add_7(button2, new FBAddNewPersonDialogBox$6(this, oracle, sb, loadingPanel, hint));
  hp3 = new HorizontalPanel;
  $setPropertyInt(hp3.table, 'cellSpacing', 3);
  $add_6(content_0, hp3);
  dummy = new Label_1(' ');
  $add_3(hp3, dummy);
  sonNom = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'Name :'));
  $add_3(hp3, sonNom);
  $setCellVerticalAlignment_1(hp3, sonNom, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $add_3(hp3, sb);
  $add_3(hp3, loadingPanel);
  this.myErrorPanel = new ValidationErrorWidget;
  $add_6(content_0, this.myErrorPanel);
  $add_6(content_0, hint);
  if ((!singleton_1 && (singleton_1 = new FBFriendManager) , singleton_1).friends) {
    setVisible(($clinit_DOM() , sb.element), true);
    setVisible(loadingPanel.element, false);
    for (f$iterator = new AbstractList$IteratorImpl((!singleton_1 && (singleton_1 = new FBFriendManager) , singleton_1).friends.arrayList); f$iterator.i < f$iterator.this$01_0.size_1();) {
      f = (checkCriticalElement(f$iterator.i < f$iterator.this$01_0.size_1()) , dynamicCast(f$iterator.this$01_0.get_0(f$iterator.last = f$iterator.i++), 90));
      $add_8(oracle, f);
    }
  }
   else {
    setVisible(($clinit_DOM() , sb.element), false);
    setVisible(loadingPanel.element, true);
    $addFriendRetrievedListener((!singleton_1 && (singleton_1 = new FBFriendManager) , singleton_1), new FBAddNewPersonDialogBox$7(this, oracle, sb, loadingPanel));
  }
  $setStyleName(this.tb, 'inputTextField');
  add_8(this.tb, new FBAddNewPersonDialogBox$8(this, sb));
  this.contentPanel.setWidget(content_0);
  ok = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Ok'));
  add_7(ok, new FBAddNewPersonDialogBox$9(this));
  annuler = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Cancel'));
  add_7(annuler, new FBAddNewPersonDialogBox$10(this));
  v = new Vector;
  $add_5(v.arrayList, ok);
  $add_5(v.arrayList, annuler);
  list = new HyperlinkList(v);
  footer = new HorizontalPanel;
  $add_3(footer, list);
  this.footerPanel.setWidget(footer);
}

defineClass(179, 708, $intern_37, FBAddNewPersonDialogBox);
_.FBID = {l:$intern_20, m:$intern_20, h:$intern_21};
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox', 179);
function $onChange(this$static){
  $setFocus(this$static.val$sb2.box);
}

function FBAddNewPersonDialogBox$1(val$sb){
  this.val$sb2 = val$sb;
}

defineClass(553, 1, {747:1}, FBAddNewPersonDialogBox$1);
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/1', 553);
function FBAddNewPersonDialogBox$10(this$0){
  this.this$01 = this$0;
}

defineClass(562, 1, $intern_49, FBAddNewPersonDialogBox$10);
_.onClick_0 = function onClick_16(sender){
  this.this$01.box.hide(false);
}
;
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$10_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/10', 562);
function FBAddNewPersonDialogBox$2(val$sb){
  this.val$sb2 = val$sb;
}

defineClass(554, 1, $intern_51, FBAddNewPersonDialogBox$2);
_.onKeyDown_0 = function onKeyDown_5(sender, keyCode, modifiers){
}
;
_.onKeyPress = function onKeyPress_1(sender, keyCode, modifiers){
  keyCode == 27 && $setVisible(this.val$sb2, false);
}
;
_.onKeyUp_0 = function onKeyUp_3(sender, keyCode, modifiers){
}
;
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/2', 554);
function FBAddNewPersonDialogBox$3(){
}

defineClass(555, 1, $intern_51, FBAddNewPersonDialogBox$3);
_.onKeyDown_0 = function onKeyDown_6(sender, keyCode, modifiers){
}
;
_.onKeyPress = function onKeyPress_2(sender, keyCode, modifiers){
}
;
_.onKeyUp_0 = function onKeyUp_4(sender, keyCode, modifiers){
}
;
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/3', 555);
function $onSuggestionSelected_0(this$static, event_0){
  var friend;
  $setFocus(this$static.val$sb2.box);
  friend = event_0.selectedSuggestion.friend;
  $setText_3(this$static.this$01.tb, friend.firstName);
  this$static.this$01.FBID = friend.id_0;
}

function FBAddNewPersonDialogBox$4(this$0, val$sb){
  this.this$01 = this$0;
  this.val$sb2 = val$sb;
}

defineClass(556, 1, {748:1}, FBAddNewPersonDialogBox$4);
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$4_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/4', 556);
function FBAddNewPersonDialogBox$5(val$button1, val$sb, val$loadingPanel, val$oracle, val$hint){
  this.val$button12 = val$button1;
  this.val$sb3 = val$sb;
  this.val$loadingPanel4 = val$loadingPanel;
  this.val$oracle5 = val$oracle;
  this.val$hint6 = val$hint;
}

defineClass(557, 1, $intern_49, FBAddNewPersonDialogBox$5);
_.onClick_0 = function onClick_17(sender){
  var f, f$iterator;
  if ($getValue(this.val$button12).value_0) {
    if (!(!singleton_1 && (singleton_1 = new FBFriendManager) , singleton_1).friends) {
      $setVisible(this.val$sb3, false);
      $setVisible(this.val$loadingPanel4, true);
    }
     else {
      for (f$iterator = new AbstractList$IteratorImpl((!singleton_1 && (singleton_1 = new FBFriendManager) , singleton_1).friends.arrayList); f$iterator.i < f$iterator.this$01_0.size_1();) {
        f = (checkCriticalElement(f$iterator.i < f$iterator.this$01_0.size_1()) , dynamicCast(f$iterator.this$01_0.get_0(f$iterator.last = f$iterator.i++), 90));
        $add_8(this.val$oracle5, f);
      }
      $setText_2(this.val$sb3, '');
      $setFocus(this.val$sb3.box);
    }
    $setLabel(this.val$hint6, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Facebook users will be notified automatically'));
    $setKnowMore(this.val$hint6, (!localizedStrings && (localizedStrings = new Locale_) , 'http://www.tricount.com/faq'));
  }
}
;
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$5_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/5', 557);
function FBAddNewPersonDialogBox$6(this$0, val$oracle, val$sb, val$loadingPanel, val$hint){
  this.this$01 = this$0;
  this.val$oracle2 = val$oracle;
  this.val$sb3 = val$sb;
  this.val$loadingPanel4 = val$loadingPanel;
  this.val$hint5 = val$hint;
}

defineClass(558, 1, $intern_49, FBAddNewPersonDialogBox$6);
_.onClick_0 = function onClick_18(sender){
  $clear_2(this.val$oracle2);
  $setText_3(this.this$01.tb, '');
  $setFocus(this.this$01.tb);
  this.this$01.FBID = {l:$intern_20, m:$intern_20, h:$intern_21};
  $setVisible(this.val$sb3, true);
  $setVisible(this.val$loadingPanel4, false);
  $setLabel(this.val$hint5, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , "Don't forget to send your friend the address of the tricount:  " + getTRICOUNT_URL(tricount_0.random_0)));
  $setKnowMore(this.val$hint5, (!localizedStrings && (localizedStrings = new Locale_) , 'http://www.tricount.com/faq'));
}
;
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$6_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/6', 558);
function $onEvent_16(this$static){
  var f, f$iterator;
  for (f$iterator = new AbstractList$IteratorImpl((!singleton_1 && (singleton_1 = new FBFriendManager) , singleton_1).friends.arrayList); f$iterator.i < f$iterator.this$01_0.size_1();) {
    f = (checkCriticalElement(f$iterator.i < f$iterator.this$01_0.size_1()) , dynamicCast(f$iterator.this$01_0.get_0(f$iterator.last = f$iterator.i++), 90));
    $add_8(this$static.val$oracle2, f);
  }
  $setText_3(this$static.this$01.tb, '');
  $setVisible(this$static.val$sb3, true);
  $setVisible(this$static.val$loadingPanel4, false);
  $setFocus(this$static.this$01.tb);
  $setFocus(this$static.val$sb3.box);
}

function FBAddNewPersonDialogBox$7(this$0, val$oracle, val$sb, val$loadingPanel){
  this.this$01 = this$0;
  this.val$oracle2 = val$oracle;
  this.val$sb3 = val$sb;
  this.val$loadingPanel4 = val$loadingPanel;
}

defineClass(559, 1, $intern_50, FBAddNewPersonDialogBox$7);
_.onEvent = function onEvent_16(parameter){
  $onEvent_16(this, dynamicCast(parameter, 34));
}
;
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$7_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/7', 559);
function FBAddNewPersonDialogBox$8(this$0, val$sb){
  this.this$01 = this$0;
  this.val$sb2 = val$sb;
}

defineClass(560, 1, $intern_51, FBAddNewPersonDialogBox$8);
_.onKeyDown_0 = function onKeyDown_7(sender, keyCode, modifiers){
}
;
_.onKeyPress = function onKeyPress_3(sender, keyCode, modifiers){
  if (keyCode == 27) {
    this.this$01.box.hide(false);
    $setVisible(this.val$sb2, false);
  }
}
;
_.onKeyUp_0 = function onKeyUp_5(sender, keyCode, modifiers){
}
;
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$8_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/8', 560);
function FBAddNewPersonDialogBox$9(this$0){
  this.this$01 = this$0;
}

defineClass(561, 1, $intern_49, FBAddNewPersonDialogBox$9);
_.onClick_0 = function onClick_19(sender){
  $createUser_0(this.this$01);
}
;
var Lcom_tribab_tricount_client_panel_FBAddNewPersonDialogBox$9_2_classLit = createForClass('com.tribab.tricount.client.panel', 'FBAddNewPersonDialogBox/9', 561);
function IdentifiezVousPanel(isCreationStep2){
  var autre, tricount, u, u$iterator, ui;
  this.vp = new VerticalPanel;
  $setSpacing(this.vp, 7);
  $setWidth(this.vp, '600px');
  tricount = tricount_0;
  for (u$iterator = new AbstractList$IteratorImpl($getUsers(tricount)); u$iterator.i < u$iterator.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
    ui = new IdentifiezVousPanel$UserItem(u, !isCreationStep2 || currentUser == u, isCreationStep2 && currentUser != u && $canDeleteUser(tricount_0, u), currentUser == u);
    $add_6(this.vp, ui);
  }
  autre = new Anchor_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Add a participant'));
  add_7(autre, new IdentifiezVousPanel$1);
  $add_6(this.vp, autre);
  $addUserAddedListener(tricount_0, new IdentifiezVousPanel$2(this, isCreationStep2));
  $addUserRemovedListener(tricount_0, new IdentifiezVousPanel$3(this));
  $initWidget(this, this.vp);
}

defineClass(215, 708, $intern_37, IdentifiezVousPanel);
var Lcom_tribab_tricount_client_panel_IdentifiezVousPanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'IdentifiezVousPanel', 215);
function IdentifiezVousPanel$1(){
}

defineClass(530, 1, $intern_49, IdentifiezVousPanel$1);
_.onClick_0 = function onClick_20(sender){
  var db;
  if (fbid != null) {
    db = new FBAddNewPersonDialogBox;
    $show_1(db);
  }
   else {
    db = new AddNewPersonDialogBox;
    $show_0(db);
  }
}
;
var Lcom_tribab_tricount_client_panel_IdentifiezVousPanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'IdentifiezVousPanel/1', 530);
function $onEvent_17(this$static, parameter){
  var ui;
  ui = new IdentifiezVousPanel$UserItem(parameter, !this$static.val$isCreationStep22, this$static.val$isCreationStep22, false);
  $insert_2(this$static.this$01.vp, ui, this$static.this$01.vp.children.size_0 - 1);
}

function IdentifiezVousPanel$2(this$0, val$isCreationStep2){
  this.this$01 = this$0;
  this.val$isCreationStep22 = val$isCreationStep2;
}

defineClass(531, 1, $intern_50, IdentifiezVousPanel$2);
_.onEvent = function onEvent_17(parameter){
  $onEvent_17(this, dynamicCast(parameter, 51));
}
;
_.val$isCreationStep22 = false;
var Lcom_tribab_tricount_client_panel_IdentifiezVousPanel$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'IdentifiezVousPanel/2', 531);
function $onEvent_18(this$static, parameter){
  var i, w;
  $clinit_System();
  for (i = 0; i < this$static.this$01.vp.children.size_0; i++) {
    w = $getWidget(this$static.this$01.vp, i);
    if (instanceOf(w, 138) && dynamicCast(w, 138).user == parameter) {
      $remove_6(this$static.this$01.vp, w);
      break;
    }
  }
}

function IdentifiezVousPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(532, 1, $intern_50, IdentifiezVousPanel$3);
_.onEvent = function onEvent_18(parameter){
  $onEvent_18(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_panel_IdentifiezVousPanel$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'IdentifiezVousPanel/3', 532);
function IdentifiezVousPanel$UserItem(u, canClickOnIt, canDelete, isCurrentUser){
  var button, deleteAnchor, fp, hint, userLabel;
  this.panel = new HorizontalPanel;
  $setWidth(this.panel, '600px');
  this.user = u;
  fp = new FocusPanel;
  button = new RoundedButton(fp);
  ($clinit_DOM() , button.element).style['width'] = '200px';
  userLabel = new Label_1(u.name_0);
  setStyleName(userLabel.element, 'identifiezVousUserLabel', true);
  $setWidget(fp, userLabel);
  fp.element.style['height'] = '100%';
  if (canClickOnIt) {
    setStyleName(fp.element, 'identifiezVousFocusPanel', true);
    add_7(fp, new IdentifiezVousPanel$UserItem$1(this, isCurrentUser, u));
  }
   else {
    setStyleName(fp.element, 'identifiezVousFocusPanelDisabled', true);
  }
  $add_3(this.panel, button);
  $setCellWidth(this.panel, button, '200px');
  if (isCurrentUser) {
    hint = new Label;
    $setText_0(hint, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , '(this is your identifier)'));
    setStylePrimaryName(hint.element, 'inputFieldHintLabel');
    $add_3(this.panel, hint);
    $setCellVerticalAlignment_1(this.panel, hint, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  }
  if (canDelete) {
    deleteAnchor = new Anchor_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'remove'));
    setStyleName(deleteAnchor.element, 'deleteUserHyperlink', true);
    add_7(deleteAnchor, new IdentifiezVousPanel$UserItem$2(u));
    $add_3(this.panel, deleteAnchor);
    $setCellVerticalAlignment_1(this.panel, deleteAnchor, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  }
  $initWidget(this, this.panel);
}

defineClass(138, 708, {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 9:1, 6:1, 138:1}, IdentifiezVousPanel$UserItem);
var Lcom_tribab_tricount_client_panel_IdentifiezVousPanel$UserItem_2_classLit = createForClass('com.tribab.tricount.client.panel', 'IdentifiezVousPanel/UserItem', 138);
function IdentifiezVousPanel$UserItem$1(this$1, val$isCurrentUser, val$u){
  this.this$11 = this$1;
  this.val$isCurrentUser2 = val$isCurrentUser;
  this.val$u3 = val$u;
}

defineClass(528, 1, $intern_49, IdentifiezVousPanel$UserItem$1);
_.onClick_0 = function onClick_21(sender){
  var onFacebook;
  onFacebook = fbid != null && !$equals_1(fbid, '');
  if (onFacebook) {
    if (this.val$isCurrentUser2) {
      $completeSetupAndIdentification(singleton_0);
    }
     else if (confirm_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Please confirm that you are ' + this.this$11.user.name_0 + ' ?'))) {
      $setFacebookID(this.val$u3, __parseAndValidateLong(fbid));
      setCurrentUser(this.val$u3);
      $completeSetupAndIdentification(singleton_0);
    }
  }
   else {
    setCurrentUser(this.val$u3);
    $completeSetupAndIdentification(singleton_0);
  }
}
;
_.val$isCurrentUser2 = false;
var Lcom_tribab_tricount_client_panel_IdentifiezVousPanel$UserItem$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'IdentifiezVousPanel/UserItem/1', 528);
function IdentifiezVousPanel$UserItem$2(val$u){
  this.val$u2 = val$u;
}

defineClass(529, 1, $intern_49, IdentifiezVousPanel$UserItem$2);
_.onClick_0 = function onClick_22(sender){
  $clinit_System();
  $removeUser(tricount_0, this.val$u2);
}
;
var Lcom_tribab_tricount_client_panel_IdentifiezVousPanel$UserItem$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'IdentifiezVousPanel/UserItem/2', 529);
function $refresh_1(this$static){
  var item_0, listHeader, t, t$iterator, totaux;
  $clear(this$static.panel);
  listHeader = new PaymentListPanel$PaymentListHeader;
  $add_6(this$static.panel, listHeader);
  $setCellWidth(this$static.panel, listHeader, '100%');
  for (t$iterator = new AbstractList$IteratorImpl($getTransactions(tricount_0)); t$iterator.i < t$iterator.this$01_0.size_1();) {
    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_0(t$iterator.last = t$iterator.i++), 68));
    $clinit_System();
    item_0 = new PaymentListPanel$PaymentListItem(this$static, t);
    $add_6(this$static.panel, item_0);
    $setCellWidth(this$static.panel, item_0, '100%');
  }
  if ($getTransactions(tricount_0).array.length > 0) {
    totaux = new PaymentListPanel$PaymentListTotal;
    $add_6(this$static.panel, totaux);
    $setCellWidth(this$static.panel, totaux, '100%');
  }
}

function PaymentListPanel(){
  this.panel = new VerticalPanel;
  $refresh_1(this);
  $addTransactionRemovedListener(tricount_0, new PaymentListPanel$1(this));
  $addTransactionAddedListener(tricount_0, new PaymentListPanel$2(this));
  $addUserAddedListener(tricount_0, new PaymentListPanel$3(this));
  $addUserRemovedListener(tricount_0, new PaymentListPanel$4(this));
  $initWidget(this, this.panel);
}

defineClass(194, 708, $intern_37, PaymentListPanel);
var Lcom_tribab_tricount_client_panel_PaymentListPanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel', 194);
function $onEvent_19(this$static){
  $clinit_System();
  $refresh_1(this$static.this$01);
}

function PaymentListPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(292, 1, $intern_50, PaymentListPanel$1);
_.onEvent = function onEvent_19(t){
  $onEvent_19(this, dynamicCast(t, 77));
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/1', 292);
function $onEvent_20(this$static){
  $refresh_1(this$static.this$01);
}

function PaymentListPanel$2(this$0){
  this.this$01 = this$0;
}

defineClass(293, 1, $intern_50, PaymentListPanel$2);
_.onEvent = function onEvent_20(t){
  $onEvent_20(this, dynamicCast(t, 77));
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/2', 293);
function $onEvent_21(this$static){
  $refresh_1(this$static.this$01);
}

function PaymentListPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(294, 1, $intern_50, PaymentListPanel$3);
_.onEvent = function onEvent_21(parameter){
  $onEvent_21(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/3', 294);
function $onEvent_22(this$static){
  $refresh_1(this$static.this$01);
}

function PaymentListPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(295, 1, $intern_50, PaymentListPanel$4);
_.onEvent = function onEvent_22(parameter){
  $onEvent_22(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$4_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/4', 295);
function PaymentListPanel$PaymentListHeader(){
  var actions, combienPourMoi, concerneQui, quand, quiCombienPourquoi;
  this.headerPanel = new HorizontalPanel;
  $setSpacing(this.headerPanel, 5);
  quiCombienPourquoi = new Label_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Who paid?  How much? For what reasons?'));
  $setClassName(($clinit_DOM() , quiCombienPourquoi.element), 'paymentListHeader');
  quiCombienPourquoi.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $add_3(this.headerPanel, quiCombienPourquoi);
  $setCellWidth(this.headerPanel, quiCombienPourquoi, '40%');
  quand = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'When?'));
  $setClassName(quand.element, 'paymentListHeader');
  quand.element.style['whiteSpace'] = 'nowrap';
  $add_3(this.headerPanel, quand);
  $setCellWidth(this.headerPanel, quand, '10%');
  concerneQui = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'Involves?'));
  $setClassName(concerneQui.element, 'paymentListHeader');
  concerneQui.element.style['whiteSpace'] = 'nowrap';
  $add_3(this.headerPanel, concerneQui);
  $setCellWidth(this.headerPanel, concerneQui, '20%');
  combienPourMoi = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'For you?'));
  $setClassName(combienPourMoi.element, 'paymentListHeader');
  combienPourMoi.element.style['whiteSpace'] = 'nowrap';
  $add_3(this.headerPanel, combienPourMoi);
  $setCellWidth(this.headerPanel, combienPourMoi, '10%');
  actions = new Label_1('');
  $setClassName(actions.element, 'paymentListHeader');
  actions.element.style['whiteSpace'] = 'nowrap';
  $add_3(this.headerPanel, actions);
  $setCellWidth(this.headerPanel, actions, '20%');
  $setWidth(this.headerPanel, '100%');
  $initWidget(this, this.headerPanel);
}

defineClass(279, 708, $intern_37, PaymentListPanel$PaymentListHeader);
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListHeader_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListHeader', 279);
function $setMouseAway(this$static){
  $removeStyleName(this$static.focusPanel, 'paymentItemOver');
  $addStyleName(this$static.focusPanel, 'paymentItemAway');
}

function $setMouseOver(this$static){
  $removeStyleName(this$static.focusPanel, 'paymentItemAway');
  $addStyleName(this$static.focusPanel, 'paymentItemOver');
}

function PaymentListPanel$PaymentListItem(this$0, t){
  var combien, combienPourMoi, combienPourMoi_s, comment, comment$iterator, commentaire, concerneQui, date, f, f$iterator, hyperLinks, i, mp, pourquoi, qui, quiCombienPourquoi, supprimer, virgule;
  this.this$01 = this$0;
  this.itemPanel = new VerticalPanel;
  this.focusPanel = new FocusPanel_0(this.itemPanel);
  this.itemContent = new HorizontalPanel;
  this.messagesContent = new VerticalPanel;
  $setWidget(this.focusPanel, this.itemPanel);
  $setStylePrimaryName(this.focusPanel, 'paymentItem');
  quiCombienPourquoi = new HorizontalPanel;
  ($clinit_DOM() , quiCombienPourquoi.element).style['width'] = '100%';
  qui = new Label_1(t.payedBy.name_0);
  $setClassName(qui.element, 'paymentListContent');
  combien = new Label_1(getStringNumber(t.amount) + ' ' + t.currency);
  $setClassName(combien.element, 'paymentListContent');
  pourquoi = new Anchor_1(t.name_0);
  add_7(pourquoi, new PaymentListPanel$PaymentListItem$1(this, t));
  $setClassName(pourquoi.element, 'paymentListContent');
  $add_3(quiCombienPourquoi, qui);
  $setCellWidth(quiCombienPourquoi, qui, '20%');
  $add_3(quiCombienPourquoi, combien);
  $setCellWidth(quiCombienPourquoi, combien, '23%');
  $add_3(quiCombienPourquoi, pourquoi);
  $setCellWidth(quiCombienPourquoi, pourquoi, '57%');
  $add_3(this.itemContent, quiCombienPourquoi);
  $setCellWidth(this.itemContent, quiCombienPourquoi, '40%');
  !t.paymentDate?(date = new Label_1(' ')):(date = new Label_1(getStringDate(t.paymentDate)));
  $setClassName(date.element, 'paymentListContent');
  $add_3(this.itemContent, date);
  $setCellWidth(this.itemContent, date, '10%');
  concerneQui = new Label_1(getConcerneQui(tricount_0, t));
  for (f$iterator = new AbstractList$IteratorImpl($getUsers(tricount_0)); f$iterator.i < f$iterator.this$01_0.size_1();) {
    f = (checkCriticalElement(f$iterator.i < f$iterator.this$01_0.size_1()) , dynamicCast(f$iterator.this$01_0.get_0(f$iterator.last = f$iterator.i++), 37));
    $addUserUpdatedListener(f, new PaymentListPanel$PaymentListItem$2(concerneQui, t, qui));
  }
  $setClassName(concerneQui.element, 'paymentListContent');
  $add_3(this.itemContent, concerneQui);
  $setCellWidth(this.itemContent, concerneQui, '20%');
  combienPourMoi_s = getStringNumber(abs_1($getBalanceForUser(t, currentUser, true, true))) + ' ' + t.currency;
  combienPourMoi = new Label_1(combienPourMoi_s);
  $setClassName(combienPourMoi.element, 'paymentListContent');
  $add_3(this.itemContent, combienPourMoi);
  $setCellWidth(this.itemContent, combienPourMoi, '10%');
  $setCellHorizontalAlignment_0(this.itemContent, combienPourMoi, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  hyperLinks = new HorizontalPanel;
  commentaire = new Anchor_0;
  setStylePrimaryName(commentaire.element, 'paymentListLink');
  $setText(commentaire, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'notes (' + ('' + t.transactionComments.size_1()) + ')'));
  add_7(commentaire, new PaymentListPanel$PaymentListItem$3(this, t));
  $addCommentAddedListener(t, new PaymentListPanel$PaymentListItem$4(commentaire, t));
  $add_3(hyperLinks, commentaire);
  virgule = new HTML_0(',&nbsp;');
  setStylePrimaryName(virgule.element, 'paymentListContent');
  $add_3(hyperLinks, virgule);
  supprimer = new Anchor_0;
  $setText(supprimer, (!localizedStrings && (localizedStrings = new Locale_) , 'delete'));
  setStylePrimaryName(supprimer.element, 'paymentListLink');
  add_7(supprimer, new PaymentListPanel$PaymentListItem$5(this, t));
  $add_3(hyperLinks, supprimer);
  $add_3(this.itemContent, hyperLinks);
  $setCellWidth(this.itemContent, hyperLinks, '20%');
  $setCellHorizontalAlignment_0(this.itemContent, hyperLinks, ALIGN_RIGHT);
  $setSpacing(this.itemContent, 5);
  $setWidth(this.itemContent, '100%');
  $add_6(this.itemPanel, this.itemContent);
  $setCellWidth(this.itemPanel, this.itemContent, '100%');
  $setWidth(this.itemPanel, '100%');
  $add_6(this.itemPanel, this.messagesContent);
  $setWidth(this.messagesContent, '100%');
  $initWidget(this, this.focusPanel);
  add_10(this.focusPanel, new PaymentListPanel$PaymentListItem$6(this));
  i = 0;
  for (comment$iterator = t.transactionComments.iterator(); comment$iterator.hasNext();) {
    comment = dynamicCast(comment$iterator.next_0(), 186);
    mp = new PaymentListPanel$PaymentListItem$MessagePanel(this, comment, i >= t.transactionComments.size_1() - 1);
    $add_6(this.messagesContent, mp);
    ++i;
  }
  $setVisible(this.messagesContent, false);
}

defineClass(278, 708, $intern_37, PaymentListPanel$PaymentListItem);
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem', 278);
function PaymentListPanel$PaymentListItem$1(this$1, val$t){
  this.this$11 = this$1;
  this.val$t2 = val$t;
}

defineClass(286, 1, $intern_49, PaymentListPanel$PaymentListItem$1);
_.onClick_0 = function onClick_23(sender){
  $setMouseAway(this.this$11);
  $displayAddEditPayement(singleton_0, this.val$t2);
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/1', 286);
function $onEvent_23(this$static){
  $setText_0(this$static.val$concerneQui2, getConcerneQui(tricount_0, this$static.val$t3));
  $setText_0(this$static.val$qui4, this$static.val$t3.payedBy.name_0);
}

function PaymentListPanel$PaymentListItem$2(val$concerneQui, val$t, val$qui){
  this.val$concerneQui2 = val$concerneQui;
  this.val$t3 = val$t;
  this.val$qui4 = val$qui;
}

defineClass(287, 1, $intern_50, PaymentListPanel$PaymentListItem$2);
_.onEvent = function onEvent_23(parameter){
  $onEvent_23(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/2', 287);
function PaymentListPanel$PaymentListItem$3(this$1, val$t){
  this.this$11 = this$1;
  this.val$t2 = val$t;
}

defineClass(288, 1, $intern_49, PaymentListPanel$PaymentListItem$3);
_.onClick_0 = function onClick_24(sender){
  var mp;
  if ($isVisible(this.this$11.messagesContent)) {
    $setVisible(this.this$11.messagesContent, false);
    this.this$11.messagesContent.children.size_0 > this.val$t2.transactionComments.size_1() && $remove(this.this$11.messagesContent, this.this$11.messagesContent.children.size_0 - 1);
  }
   else {
    $setVisible(this.this$11.messagesContent, true);
    if (this.val$t2.transactionComments.size_1() == 0) {
      mp = new PaymentListPanel$PaymentListItem$MessagePanel_0(this.this$11, currentUser, this.val$t2);
      $add_6(this.this$11.messagesContent, mp);
      $selectAll(mp.comment);
      $setFocus(mp.comment);
    }
  }
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/3', 288);
function $onEvent_24(this$static){
  $setText(this$static.val$commentaire2, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'notes (' + ('' + this$static.val$t3.transactionComments.size_1()) + ')'));
}

function PaymentListPanel$PaymentListItem$4(val$commentaire, val$t){
  this.val$commentaire2 = val$commentaire;
  this.val$t3 = val$t;
}

defineClass(289, 1, $intern_50, PaymentListPanel$PaymentListItem$4);
_.onEvent = function onEvent_24(parameter){
  $onEvent_24(this, dynamicCast(parameter, 84));
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$4_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/4', 289);
function PaymentListPanel$PaymentListItem$5(this$1, val$t){
  this.this$11 = this$1;
  this.val$t2 = val$t;
}

defineClass(290, 1, $intern_49, PaymentListPanel$PaymentListItem$5);
_.onClick_0 = function onClick_25(sender){
  if (confirm_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Are you sure you would like to delete this payment?'))) {
    $deleteTransaction_2(tricount_0, this.val$t2);
    $refresh_1(this.this$11.this$01);
  }
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$5_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/5', 290);
function PaymentListPanel$PaymentListItem$6(this$1){
  this.this$11 = this$1;
}

defineClass(291, 1, {114:1}, PaymentListPanel$PaymentListItem$6);
_.onMouseDown_0 = function onMouseDown_2(sender, x_0, y_0){
}
;
_.onMouseEnter = function onMouseEnter_0(sender){
  $setMouseOver(this.this$11);
}
;
_.onMouseLeave = function onMouseLeave_0(sender){
  $setMouseAway(this.this$11);
}
;
_.onMouseMove_0 = function onMouseMove_2(sender, x_0, y_0){
}
;
_.onMouseUp_0 = function onMouseUp_2(sender, x_0, y_0){
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$6_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/6', 291);
function $$init_1(this$static){
  this$static.messagePanel = new HorizontalPanel;
  this$static.repondre = new Anchor_0;
}

function $cancelMessage(this$static){
  $removeFromParent(this$static);
  $setVisible(this$static.this$11.messagesContent, false);
  $setMouseAway(this$static.this$11);
}

function $init_1(this$static){
  $selectAll(this$static.comment);
  $setFocus(this$static.comment);
}

function $sendMessage(this$static){
  var commentText, tc;
  if ($equals_1('', $getPropertyString($getElement(this$static.comment), 'value')) || $equals_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'your comments here'), $getPropertyString($getElement(this$static.comment), 'value'))) {
    $setFocus(this$static.comment);
    return;
  }
  commentText = $getPropertyString($getElement(this$static.comment), 'value');
  commentText.length > 250 && (commentText = commentText.substr(0, 250));
  tc = new TransactionComment_0(this$static.forUser, commentText, new Date_0, this$static.forTransaction);
  $addTransactionComment_1(this$static.forTransaction, tc);
  $removeFromParent(this$static);
  $add_6(this$static.this$11.messagesContent, new PaymentListPanel$PaymentListItem$MessagePanel(this$static.this$11, tc, true));
}

function PaymentListPanel$PaymentListItem$MessagePanel(this$1, c, last){
  var comment, dummy, quandQui;
  this.this$11 = this$1;
  $$init_1(this);
  this.comment = null;
  $setWidth(this.messagePanel, '100%');
  dummy = new Label_1('');
  $add_3(this.messagePanel, dummy);
  $setCellWidth(this.messagePanel, dummy, '20%');
  quandQui = new Label_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The ' + getStringDate(c.commentDate) + ', ' + c.user.name_0 + ' said: '));
  $setClassName(($clinit_DOM() , quandQui.element), 'commentQuandQui');
  quandQui.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $add_3(this.messagePanel, quandQui);
  $setCellWidth(this.messagePanel, quandQui, '15%');
  comment = new Label_1('"' + c.comment + '"');
  $setClassName(comment.element, 'commentContent');
  $add_3(this.messagePanel, comment);
  $setCellWidth(this.messagePanel, comment, '50%');
  if (last) {
    this.repondre = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Response'));
    $setStyleName(this.repondre, 'paymentListContent');
    add_7(this.repondre, new PaymentListPanel$PaymentListItem$MessagePanel$1(this, c));
  }
  $add_3(this.messagePanel, this.repondre);
  $setCellWidth(this.messagePanel, this.repondre, '15%');
  $setCellHorizontalAlignment_0(this.messagePanel, this.repondre, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  $addCommentAddedListener(c.transaction, new PaymentListPanel$PaymentListItem$MessagePanel$2(this));
  $initWidget(this, this.messagePanel);
}

function PaymentListPanel$PaymentListItem$MessagePanel_0(this$1, u, t){
  var annuler, dummy, list, ok, quandQui, v;
  this.this$11 = this$1;
  $$init_1(this);
  this.forUser = u;
  this.forTransaction = t;
  $setWidth(this.messagePanel, '100%');
  dummy = new Label_1('');
  $add_3(this.messagePanel, dummy);
  $setCellWidth(this.messagePanel, dummy, '20%');
  quandQui = new Label_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The ' + getStringDate(new Date_0) + ', ' + u.name_0 + ' said: '));
  $setClassName(($clinit_DOM() , quandQui.element), 'commentQuandQui');
  quandQui.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $add_3(this.messagePanel, quandQui);
  $setCellWidth(this.messagePanel, quandQui, '15%');
  $setCellVerticalAlignment_1(this.messagePanel, quandQui, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  this.comment = new TextBox;
  $setStyleName(this.comment, 'commentInput');
  $setText_3(this.comment, (!localizedStrings && (localizedStrings = new Locale_) , 'your comments here'));
  add_7(this.comment, new PaymentListPanel$PaymentListItem$MessagePanel$3(this));
  add_8(this.comment, new PaymentListPanel$PaymentListItem$MessagePanel$4(this));
  $add_3(this.messagePanel, this.comment);
  ok = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Ok'));
  annuler = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Cancel'));
  v = new Vector;
  $add_5(v.arrayList, ok);
  $add_5(v.arrayList, annuler);
  add_7(ok, new PaymentListPanel$PaymentListItem$MessagePanel$5(this));
  add_7(annuler, new PaymentListPanel$PaymentListItem$MessagePanel$6(this));
  list = new HyperlinkList(v);
  $setStylePrimaryName_0(list, 'commentLink');
  $add_3(this.messagePanel, list);
  $setCellWidth(this.messagePanel, list, '25%');
  $setCellVerticalAlignment_1(this.messagePanel, list, ALIGN_MIDDLE);
  $setCellHorizontalAlignment_0(this.messagePanel, list, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $initWidget(this, this.messagePanel);
}

defineClass(101, 708, {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 9:1, 6:1, 101:1}, PaymentListPanel$PaymentListItem$MessagePanel, PaymentListPanel$PaymentListItem$MessagePanel_0);
_.forTransaction = null;
_.forUser = null;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$MessagePanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/MessagePanel', 101);
function PaymentListPanel$PaymentListItem$MessagePanel$1(this$2, val$c){
  this.this$21 = this$2;
  this.val$c2 = val$c;
}

defineClass(280, 1, $intern_49, PaymentListPanel$PaymentListItem$MessagePanel$1);
_.onClick_0 = function onClick_26(sender){
  var mp, w;
  if (this.this$21.this$11.messagesContent.children.size_0 == this.val$c2.transaction.transactionComments.size_1()) {
    mp = new PaymentListPanel$PaymentListItem$MessagePanel_0(this.this$21.this$11, currentUser, this.val$c2.transaction);
    $add_6(this.this$21.this$11.messagesContent, mp);
    $selectAll(mp.comment);
    $setFocus(mp.comment);
  }
   else {
    w = $getWidget(this.this$21.this$11.messagesContent, this.this$21.this$11.messagesContent.children.size_0 - 1);
    instanceOf(w, 101) && $init_1(dynamicCast(w, 101));
  }
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$MessagePanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/MessagePanel/1', 280);
function $onEvent_25(this$static){
  var dummy;
  $removeFromParent(this$static.this$21.repondre);
  dummy = new Label_1(' ');
  $add_3(this$static.this$21.messagePanel, dummy);
  $setCellWidth(this$static.this$21.messagePanel, dummy, '15%');
}

function PaymentListPanel$PaymentListItem$MessagePanel$2(this$2){
  this.this$21 = this$2;
}

defineClass(281, 1, $intern_50, PaymentListPanel$PaymentListItem$MessagePanel$2);
_.onEvent = function onEvent_25(parameter){
  $onEvent_25(this, dynamicCast(parameter, 84));
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$MessagePanel$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/MessagePanel/2', 281);
function PaymentListPanel$PaymentListItem$MessagePanel$3(this$2){
  this.this$21 = this$2;
}

defineClass(282, 1, $intern_49, PaymentListPanel$PaymentListItem$MessagePanel$3);
_.onClick_0 = function onClick_27(sender){
  $setFocus(this.this$21.comment);
  $setText_3(this.this$21.comment, '');
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$MessagePanel$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/MessagePanel/3', 282);
function PaymentListPanel$PaymentListItem$MessagePanel$4(this$2){
  this.this$21 = this$2;
}

defineClass(283, 1, $intern_51, PaymentListPanel$PaymentListItem$MessagePanel$4);
_.onKeyDown_0 = function onKeyDown_8(sender, keyCode, modifiers){
}
;
_.onKeyPress = function onKeyPress_4(sender, keyCode, modifiers){
  $equals_1($getPropertyString($getElement(this.this$21.comment), 'value'), ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'your comments here')) && $setText_3(this.this$21.comment, '');
  keyCode == 13 && $sendMessage(this.this$21);
  keyCode == 27 && $cancelMessage(this.this$21);
}
;
_.onKeyUp_0 = function onKeyUp_6(sender, keyCode, modifiers){
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$MessagePanel$4_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/MessagePanel/4', 283);
function PaymentListPanel$PaymentListItem$MessagePanel$5(this$2){
  this.this$21 = this$2;
}

defineClass(284, 1, $intern_49, PaymentListPanel$PaymentListItem$MessagePanel$5);
_.onClick_0 = function onClick_28(sender){
  $sendMessage(this.this$21);
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$MessagePanel$5_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/MessagePanel/5', 284);
function PaymentListPanel$PaymentListItem$MessagePanel$6(this$2){
  this.this$21 = this$2;
}

defineClass(285, 1, $intern_49, PaymentListPanel$PaymentListItem$MessagePanel$6);
_.onClick_0 = function onClick_29(sender){
  $cancelMessage(this.this$21);
}
;
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListItem$MessagePanel$6_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListItem/MessagePanel/6', 285);
function PaymentListPanel$PaymentListTotal(){
  var dummy, totalLabel, totalPersoValue, totalPersoValue_s, totalValue, totalValue_s;
  this.hPanel = new HorizontalPanel;
  this.panel = new FocusPanel_0(this.hPanel);
  $setWidth(this.hPanel, '100%');
  $setStylePrimaryName(this.panel, 'TotalFocusPanel');
  totalLabel = new Label_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Total'));
  $setClassName(($clinit_DOM() , totalLabel.element), 'totalContent');
  totalValue_s = getStringNumber($getTotalAmount(tricount_0));
  totalValue_s += ' ' + tricount_0.currency;
  totalValue = new Label_1(totalValue_s);
  $setClassName(totalValue.element, 'totalContent');
  totalPersoValue_s = getStringNumber($getTotalForUser(tricount_0, currentUser));
  totalPersoValue_s += ' ' + tricount_0.currency;
  totalPersoValue = new Label_1(totalPersoValue_s);
  $setClassName(totalPersoValue.element, 'totalContent');
  $add_3(this.hPanel, totalLabel);
  $setCellWidth(this.hPanel, totalLabel, '8%');
  $add_3(this.hPanel, totalValue);
  $setCellWidth(this.hPanel, totalValue, '62%');
  $add_3(this.hPanel, totalPersoValue);
  $setCellWidth(this.hPanel, totalPersoValue, '10%');
  $setCellHorizontalAlignment_0(this.hPanel, totalPersoValue, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  dummy = new Label_1(' ');
  $add_3(this.hPanel, dummy);
  $setCellWidth(this.hPanel, dummy, '20%');
  $initWidget(this, this.panel);
}

defineClass(277, 708, $intern_37, PaymentListPanel$PaymentListTotal);
var Lcom_tribab_tricount_client_panel_PaymentListPanel$PaymentListTotal_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentListPanel/PaymentListTotal', 277);
function $getAddUserHyperlink(this$static){
  var toReturn;
  toReturn = new Hyperlink_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Add a participant'));
  add_7(toReturn, new PaymentPanel$4(this$static));
  return toReturn;
}

function $saveAndGetTransaction(this$static){
  var amountOfParts, hardcodedAmount, impacts, paiedDate, rep, rep$iterator, sp, totalPartAmount;
  $clinit_System();
  'How many individual : ' + $getImpactOfUser(this$static.repartitionPanel).size_1();
  $setIndivAmounts(this$static.repValidation, $getImpactOfUser(this$static.repartitionPanel));
  if (!$validate(this$static.validator)) {
    sp = dynamicCast(this$static.panel.parent_0.parent_0, 66);
    $setScrollTop(($clinit_DOM() , sp.scrollableElem), 0);
    return null;
  }
  paiedDate = null;
  $equals_1('', $getText(dynamicCast(this$static.date.widget, 71).box)) || (paiedDate = parseStringDate($getText(dynamicCast(this$static.date.widget, 71).box)));
  if (!this$static.transaction) {
    this$static.transaction = getNewTransaction($getText(dynamicCast(this$static.quoi.widget, 30)), dynamicCast($getSelectedElement(dynamicCast(this$static.qui.widget, 87)), 37), ($clinit_Double() , new Double_0(cleanTextNumber($getText(dynamicCast(this$static.montant.widget, 30))))).value_0, tricount_0.currency, paiedDate, new Date_0);
    $setAddedBy(this$static.transaction, currentUser);
  }
   else {
    $setName(this$static.transaction, $getText(dynamicCast(this$static.quoi.widget, 30)));
    $setPayedBy(this$static.transaction, dynamicCast($getSelectedElement(dynamicCast(this$static.qui.widget, 87)), 37));
    $setAmount(this$static.transaction, ($clinit_Double() , new Double_0(cleanTextNumber($getText(dynamicCast(this$static.montant.widget, 30))))).value_0);
    $setCurrency(this$static.transaction, tricount_0.currency);
    $setPaymentDate(this$static.transaction, paiedDate);
  }
  $setTransactionType(this$static.transaction, $getValue(this$static.isEquilibre).value_0?($clinit_TransactionTypeEnum() , TRANSACTION_TYPE_BALANCE):($clinit_TransactionTypeEnum() , TRANSACTION_TYPE_NORMAL));
  impacts = new Vector;
  $setRepartition(this$static.transaction, impacts);
  totalPartAmount = 0;
  for (rep$iterator = new AbstractList$IteratorImpl(this$static.repartitionPanel.allRepartitions.arrayList); rep$iterator.i < rep$iterator.this$01_0.size_1();) {
    rep = (checkCriticalElement(rep$iterator.i < rep$iterator.this$01_0.size_1()) , dynamicCast(rep$iterator.this$01_0.get_0(rep$iterator.last = rep$iterator.i++), 80));
    try {
      amountOfParts = rep.amountOfPartsOfUser;
      amountOfParts > 0 && (totalPartAmount += amountOfParts);
      hardcodedAmount = rep.amountOfUser;
      (amountOfParts > 0 || hardcodedAmount > 0) && $add_13(impacts, new TransactionImpactOnUser_0(this$static.transaction, rep.user, amountOfParts, hardcodedAmount));
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 54)) {
        return null;
      }
       else
        throw unwrap($e0);
    }
  }
  $setAmountOfParts(this$static.transaction, totalPartAmount);
  $setSimpleRepartition(this$static.transaction, this$static.repartitionPanel.simpleMode);
  if ($getPropertyString($getElement(dynamicCast(this$static.date.widget, 71).box), 'value') != null && !$equals_1($trim($getPropertyString($getElement(dynamicCast(this$static.date.widget, 71).box), 'value')), '')) {
    try {
      $setPaymentDate(this$static.transaction, parseStringDate($getPropertyString($getElement(dynamicCast(this$static.date.widget, 71).box), 'value')));
    }
     catch ($e1) {
      $e1 = wrap($e1);
      if (!instanceOf($e1, 22))
        throw unwrap($e1);
    }
  }
  return this$static.transaction;
}

function PaymentPanel(t){
  var a, add_0, dateLine, dateValidation, dateValidationWidget, detailsLink, dummy, dummy2, dummyDateSep, dummyLabel, firstLine, found, impact, impact$iterator, isEquilibreHP, l, montantEtDevise, montantValidation, montantValidationWidget, picker, pourQuiAndValidation, pourQuiError, quiAndAdd, quoiValidation, u, u$iterator, u$iterator0, v, w2;
  this.panel = new VerticalPanel;
  new HashMap;
  this.qui = new LabelAndDropDown(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Who paid?:'));
  this.quoi = new LabelAndTextBox((!localizedStrings && (localizedStrings = new Locale_) , 'What:'));
  this.isEquilibre = new CheckBox_0((!localizedStrings && (localizedStrings = new Locale_) , 'Reimbursement'));
  this.montant = new LabelAndTextBox((!localizedStrings && (localizedStrings = new Locale_) , 'Amount:'));
  this.date = new LabelAndDateBox((!localizedStrings && (localizedStrings = new Locale_) , 'Date (optional):'));
  new LabelAndDropDown((!localizedStrings && (localizedStrings = new Locale_) , 'Redistribution: '));
  this.pourQui = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'The expense was for:'));
  this.repartitionPanel = new PaymentPanel$RepartitionPanel(this);
  this.devise = new Label_1(tricount_0.currency);
  this.validator = new FormValidator;
  this.repValidation = new RepartitionDetailsValidationElement(dynamicCast(this.montant.widget, 30));
  !!t && (this.edition = true);
  this.transaction = t;
  $setSpacing(this.panel, 7);
  $setWidth(this.panel, '100%');
  quiAndAdd = new HorizontalPanel;
  !!t && $setText_3(dynamicCast(this.quoi.widget, 30), t.name_0);
  !!t && (t.transactionType == ($clinit_TransactionTypeEnum() , TRANSACTION_TYPE_BALANCE)?$setValue(this.isEquilibre, ($clinit_Boolean() , $clinit_Boolean() , TRUE_1)):$setValue(this.isEquilibre, ($clinit_Boolean() , $clinit_Boolean() , FALSE_1)));
  $add_3(quiAndAdd, this.qui);
  $setCellVerticalAlignment_1(quiAndAdd, this.qui, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  dummyLabel = new Label_1('  ');
  $add_3(quiAndAdd, dummyLabel);
  $setCellWidth(quiAndAdd, dummyLabel, '5px');
  add_0 = $getAddUserHyperlink(this);
  $add_3(quiAndAdd, add_0);
  $setCellVerticalAlignment_1(quiAndAdd, add_0, ALIGN_MIDDLE);
  $addUserAddedListener(tricount_0, new PaymentPanel$1(this, add_0));
  for (u$iterator0 = new AbstractList$IteratorImpl($getUsers(tricount_0)); u$iterator0.i < u$iterator0.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator0.i < u$iterator0.this$01_0.size_1()) , dynamicCast(u$iterator0.this$01_0.get_0(u$iterator0.last = u$iterator0.i++), 37));
    $add_10(dynamicCast(this.qui.widget, 87), u.name_0, u);
  }
  t?$setSelectedElement(dynamicCast(this.qui.widget, 87), t.payedBy):$setSelectedElement(dynamicCast(this.qui.widget, 87), currentUser);
  dateLine = new HorizontalPanel;
  $setFormat(dynamicCast(this.date.widget, 71), new DateBoxFormat);
  $add_3(dateLine, this.date);
  l = new Label_1('DD/MM/YY');
  setStyleName(($clinit_DOM() , l.element), 'dateFormatLabel', true);
  dummyDateSep = new Label_1(' ');
  $add_3(dateLine, dummyDateSep);
  $setCellWidth(dateLine, dummyDateSep, '5px');
  $add_3(dateLine, l);
  $setCellVerticalAlignment_1(dateLine, l, ALIGN_MIDDLE);
  picker = dynamicCast(this.date.widget, 71).picker;
  dateValidationWidget = new ValidationErrorWidget;
  $add_3(dateLine, dateValidationWidget);
  $setCellVerticalAlignment_1(dateLine, dateValidationWidget, ALIGN_MIDDLE);
  !!t && !!t.paymentDate?$setValue_1(picker, t.paymentDate, true):$setValue_1(picker, new Date_0, false);
  firstLine = new HorizontalPanel;
  firstLine.element.style['width'] = '100%';
  isEquilibreHP = new HorizontalPanel;
  $add_3(isEquilibreHP, this.isEquilibre);
  $add_3(firstLine, this.quoi);
  a = new Anchor_0;
  $setText(a, (!localizedStrings && (localizedStrings = new Locale_) , '(What is this ?)'));
  $setHref_0(a, (!localizedStrings && (localizedStrings = new Locale_) , 'https://www.tricount.com/en/how-to-add-reimbursement'));
  $setTarget(a.element, '_blank');
  setStyleName(a.element, 'tricountHintLink', true);
  dummy2 = new Label_1(' ');
  $add_3(isEquilibreHP, dummy2);
  $setCellWidth(isEquilibreHP, dummy2, '10px');
  $add_3(isEquilibreHP, a);
  $setCellVerticalAlignment_1(isEquilibreHP, this.isEquilibre, ALIGN_MIDDLE);
  $setCellVerticalAlignment_1(isEquilibreHP, a, ALIGN_MIDDLE);
  $add_3(firstLine, isEquilibreHP);
  $setCellHorizontalAlignment_0(firstLine, isEquilibreHP, ($clinit_HasHorizontalAlignment() , ALIGN_RIGHT));
  $setCellVerticalAlignment_1(firstLine, isEquilibreHP, ALIGN_MIDDLE);
  $add_6(this.panel, firstLine);
  $add_6(this.panel, quiAndAdd);
  $add_6(this.panel, dateLine);
  montantEtDevise = new HorizontalPanel;
  $add_3(montantEtDevise, this.montant);
  dummy = new Label_1(' ');
  $add_3(montantEtDevise, dummy);
  $setCellWidth(montantEtDevise, dummy, '5px');
  !!t && $setText_3(dynamicCast(this.montant.widget, 30), getStringNumber(t.amount));
  $addValueChangeHandler_0(dynamicCast(this.montant.widget, 30), new PaymentPanel$2(this));
  $add_3(montantEtDevise, this.devise);
  $setCellVerticalAlignment_1(montantEtDevise, this.devise, ALIGN_MIDDLE);
  montantValidationWidget = new ValidationErrorWidget;
  $add_3(montantEtDevise, montantValidationWidget);
  $setCellVerticalAlignment_1(montantEtDevise, montantValidationWidget, ALIGN_MIDDLE);
  $add_6(this.panel, montantEtDevise);
  pourQuiAndValidation = new HorizontalPanel;
  $setVerticalAlignment(pourQuiAndValidation, ALIGN_BOTTOM);
  detailsLink = new Anchor_1((!localizedStrings && (localizedStrings = new Locale_) , 'Details'));
  $setClassName(detailsLink.element, 'detailsLink');
  add_7(detailsLink, new PaymentPanel$3(this));
  $add_3(pourQuiAndValidation, this.pourQui);
  $add_3(pourQuiAndValidation, detailsLink);
  pourQuiError = new ValidationErrorWidget;
  $add_3(pourQuiAndValidation, pourQuiError);
  $add_6(this.panel, pourQuiAndValidation);
  $setStyleName(this.pourQui, 'inputFieldLabel');
  $add_6(this.panel, this.repartitionPanel);
  if (this.transaction) {
    v = this.transaction.repartition;
    for (u$iterator = new AbstractList$IteratorImpl($getUsers(tricount_0)); u$iterator.i < u$iterator.this$01_0.size_1();) {
      u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
      found = false;
      for (impact$iterator = v.iterator(); impact$iterator.hasNext();) {
        impact = dynamicCast(impact$iterator.next_0(), 115);
        if (impact.user == u) {
          $initImpact(this.repartitionPanel, impact);
          found = true;
          break;
        }
      }
      if (!found) {
        impact = new TransactionImpactOnUser;
        impact.user = u;
        impact.amount = -1;
        impact.amountOfPart = 0;
        $initImpact(this.repartitionPanel, impact);
      }
    }
    $synchAllComplexPartAndAmount(this.repartitionPanel);
    this.transaction.simpleRepartition || $switchMode(this.repartitionPanel);
  }
  montantValidation = new TextBoxValidationElement(dynamicCast(this.montant.widget, 30), ($clinit_ValidationRules() , TRANSACTION_AMOUNT));
  $addValidation(this.validator, montantValidation, montantValidationWidget);
  quoiValidation = new TextBoxValidationElement(dynamicCast(this.quoi.widget, 30), TRANSACTION_TITLE);
  w2 = new ValidationErrorWidget;
  $setValidationWidget(this.quoi, w2);
  $addValidation(this.validator, quoiValidation, w2);
  $addValidation(this.validator, this.repValidation, pourQuiError);
  dateValidation = new TextBoxValidationElement(dynamicCast(this.date.widget, 71).box, TRANSACTION_DATE);
  $addValidation(this.validator, dateValidation, dateValidationWidget);
  $initWidget(this, this.panel);
}

defineClass(579, 708, $intern_37, PaymentPanel);
_.edition = false;
_.lastAddUserHyperLinkClicked = null;
var Lcom_tribab_tricount_client_panel_PaymentPanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel', 579);
function $onEvent_26(this$static, u){
  $add_10(dynamicCast(this$static.this$01.qui.widget, 87), u.name_0, u);
  $addUser_1(this$static.this$01.repartitionPanel, u, this$static.this$01.repartitionPanel.simpleMode, true);
  $draw(this$static.this$01.repartitionPanel);
  this$static.this$01.lastAddUserHyperLinkClicked == this$static.val$add2?$setSelectedElement(dynamicCast(this$static.this$01.qui.widget, 87), u):$scrollToBottom(dynamicCast(this$static.this$01.panel.parent_0.parent_0, 66));
}

function PaymentPanel$1(this$0, val$add){
  this.this$01 = this$0;
  this.val$add2 = val$add;
}

defineClass(585, 1, $intern_50, PaymentPanel$1);
_.onEvent = function onEvent_26(u){
  $onEvent_26(this, dynamicCast(u, 51));
}
;
var Lcom_tribab_tricount_client_panel_PaymentPanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/1', 585);
function PaymentPanel$2(this$0){
  this.this$01 = this$0;
}

defineClass(586, 1, $intern_28, PaymentPanel$2);
_.onValueChange = function onValueChange_4(event_0){
  $synchAllComplexPartAndAmount(this.this$01.repartitionPanel);
}
;
var Lcom_tribab_tricount_client_panel_PaymentPanel$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/2', 586);
function PaymentPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(587, 1, $intern_49, PaymentPanel$3);
_.onClick_0 = function onClick_30(sender){
  $switchMode(this.this$01.repartitionPanel);
}
;
var Lcom_tribab_tricount_client_panel_PaymentPanel$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/3', 587);
function PaymentPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(588, 1, $intern_49, PaymentPanel$4);
_.onClick_0 = function onClick_31(sender){
  var db;
  this.this$01.lastAddUserHyperLinkClicked = dynamicCast(sender, 111);
  if ($isRunningOnFacebook()) {
    db = new FBAddNewPersonDialogBox;
    $show_1(db);
  }
   else {
    db = new AddNewPersonDialogBox;
    $show_0(db);
  }
}
;
var Lcom_tribab_tricount_client_panel_PaymentPanel$4_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/4', 588);
function $addUser_1(this$static, u, simpleMode, synch){
  var rep;
  rep = new PaymentPanel$RepartitionPanel$IndividualRepartition(this$static, u);
  simpleMode || $switchMode_0(rep);
  $add_13(this$static.allRepartitions, rep);
  synch && $synchAllComplexPartAndAmount(this$static);
}

function $draw(this$static){
  var hp, rep, rep$iterator;
  $clear(this$static.rightPanel);
  for (rep$iterator = new AbstractList$IteratorImpl(this$static.allRepartitions.arrayList); rep$iterator.i < rep$iterator.this$01_0.size_1();) {
    rep = (checkCriticalElement(rep$iterator.i < rep$iterator.this$01_0.size_1()) , dynamicCast(rep$iterator.this$01_0.get_0(rep$iterator.last = rep$iterator.i++), 80));
    if (maskUndefined($firstElement(this$static.allRepartitions)) === maskUndefined(rep)) {
      hp = new HorizontalPanel;
      ($clinit_DOM() , hp.element).style['width'] = '100%';
      $setPropertyInt(hp.table, 'cellSpacing', 0);
      $add_3(hp, rep);
      $add_3(hp, this$static.addNewUser);
      $addStyleName(this$static.addNewUser, 'addUserInRepartition');
      $setCellVerticalAlignment_1(hp, this$static.addNewUser, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
      $setCellWidth(hp, this$static.addNewUser, '300px');
      $add_6(this$static.rightPanel, hp);
    }
     else {
      $add_6(this$static.rightPanel, rep);
    }
  }
}

function $getImpactOfUser(this$static){
  var rep, rep$iterator, toReturn;
  toReturn = new HashMap;
  for (rep$iterator = new AbstractList$IteratorImpl(this$static.allRepartitions.arrayList); rep$iterator.i < rep$iterator.this$01_0.size_1();) {
    rep = (checkCriticalElement(rep$iterator.i < rep$iterator.this$01_0.size_1()) , dynamicCast(rep$iterator.this$01_0.get_0(rep$iterator.last = rep$iterator.i++), 80));
    toReturn.put(rep.user, new Double(rep.actualAmount));
  }
  return toReturn;
}

function $initImpact(this$static, impact){
  var rep, rep$iterator;
  for (rep$iterator = new AbstractList$IteratorImpl(this$static.allRepartitions.arrayList); rep$iterator.i < rep$iterator.this$01_0.size_1();) {
    rep = (checkCriticalElement(rep$iterator.i < rep$iterator.this$01_0.size_1()) , dynamicCast(rep$iterator.this$01_0.get_0(rep$iterator.last = rep$iterator.i++), 80));
    if (rep.user == impact.user) {
      $clinit_System();
      $updatePartsAndAmountInModel(rep, impact.amountOfPart, impact.amount);
      break;
    }
  }
}

function $switchMode(this$static){
  var rep, rep$iterator;
  for (rep$iterator = new AbstractList$IteratorImpl(this$static.allRepartitions.arrayList); rep$iterator.i < rep$iterator.this$01_0.size_1();) {
    rep = (checkCriticalElement(rep$iterator.i < rep$iterator.this$01_0.size_1()) , dynamicCast(rep$iterator.this$01_0.get_0(rep$iterator.last = rep$iterator.i++), 80));
    $switchMode_0(rep);
  }
  this$static.simpleMode = !this$static.simpleMode;
}

function $synchAllComplexPartAndAmount(this$static){
  var rep, rep$iterator;
  for (rep$iterator = new AbstractList$IteratorImpl(this$static.allRepartitions.arrayList); rep$iterator.i < rep$iterator.this$01_0.size_1();) {
    rep = (checkCriticalElement(rep$iterator.i < rep$iterator.this$01_0.size_1()) , dynamicCast(rep$iterator.this$01_0.get_0(rep$iterator.last = rep$iterator.i++), 80));
    $synchAll(rep);
  }
}

function $totalAmountOfParts(this$static){
  var rep, rep$iterator, toReturn;
  toReturn = 0;
  for (rep$iterator = new AbstractList$IteratorImpl(this$static.allRepartitions.arrayList); rep$iterator.i < rep$iterator.this$01_0.size_1();) {
    rep = (checkCriticalElement(rep$iterator.i < rep$iterator.this$01_0.size_1()) , dynamicCast(rep$iterator.this$01_0.get_0(rep$iterator.last = rep$iterator.i++), 80));
    rep.amountOfPartsOfUser != -1 && (toReturn += rep.amountOfPartsOfUser);
  }
  return toReturn;
}

function $totalHardcodedAmount(this$static){
  var rep, rep$iterator, toReturn;
  toReturn = 0;
  for (rep$iterator = new AbstractList$IteratorImpl(this$static.allRepartitions.arrayList); rep$iterator.i < rep$iterator.this$01_0.size_1();) {
    rep = (checkCriticalElement(rep$iterator.i < rep$iterator.this$01_0.size_1()) , dynamicCast(rep$iterator.this$01_0.get_0(rep$iterator.last = rep$iterator.i++), 80));
    rep.amountOfUser != -1 && (toReturn += rep.amountOfUser);
  }
  return toReturn;
}

function PaymentPanel$RepartitionPanel(this$0){
  var panel, u, u$iterator;
  this.this$01 = this$0;
  this.allRepartitions = new Vector;
  this.addNewUser = $getAddUserHyperlink(this.this$01);
  panel = new HorizontalPanel;
  ($clinit_DOM() , panel.element).style['width'] = '70%';
  this.leftPanel = new VerticalPanel;
  this.rightPanel = new VerticalPanel;
  $setSpacing(this.rightPanel, 5);
  $setWidth(this.rightPanel, '100%');
  $add_3(panel, this.leftPanel);
  $add_3(panel, this.rightPanel);
  $setCellWidth(panel, this.rightPanel, '100%');
  this.simpleMode = true;
  for (u$iterator = new AbstractList$IteratorImpl($getUsers(tricount_0)); u$iterator.i < u$iterator.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
    $addUser_1(this, u, this.simpleMode, false);
  }
  $synchAllComplexPartAndAmount(this);
  $initWidget(this, panel);
  $draw(this);
}

defineClass(580, 708, $intern_37, PaymentPanel$RepartitionPanel);
_.simpleMode = false;
var Lcom_tribab_tricount_client_panel_PaymentPanel$RepartitionPanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/RepartitionPanel', 580);
function $incrementParts(this$static){
  if (this$static.amountOfPartsOfUser != -1) {
    ++this$static.amountOfPartsOfUser;
  }
   else {
    this$static.amountOfUser = -1;
    this$static.amountOfPartsOfUser = 0;
  }
  $synchAllComplexPartAndAmount(this$static.this$11);
}

function $setToggleSelection(this$static){
  this$static.amountOfUser = -1;
  this$static.amountOfPartsOfUser == -1?this$static.actualAmount == 0?(this$static.amountOfPartsOfUser = 1):(this$static.amountOfPartsOfUser = 0):this$static.amountOfPartsOfUser > 0?(this$static.amountOfPartsOfUser = 0):(this$static.amountOfPartsOfUser = 1);
  $synchAllComplexPartAndAmount(this$static.this$11);
}

function $switchMode_0(this$static){
  this$static.sp.clear_0();
  this$static.simpleMode?this$static.sp.setWidget((!this$static.complexModePanel && (this$static.complexModePanel = new PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel(this$static, this$static.user)) , this$static.complexModePanel)):this$static.sp.setWidget((!this$static.simpleModePanel && (this$static.simpleModePanel = new PaymentPanel$RepartitionPanel$IndividualRepartition$SimpleRepartitionPanel(this$static, this$static.user)) , this$static.simpleModePanel));
  this$static.simpleMode = !this$static.simpleMode;
}

function $synchAll(this$static){
  var amount, partOfUser, totalAmountOfParts, totalHardcodedAmount;
  $clinit_System();
  if (this$static.amountOfPartsOfUser != -1) {
    totalAmountOfParts = $totalAmountOfParts(this$static.this$11);
    totalHardcodedAmount = $totalHardcodedAmount(this$static.this$11);
    if (totalAmountOfParts == 0) {
      $setPartsAndAmount(this$static.complexModePanel, this$static.amountOfPartsOfUser, 0);
      $setPartsAndAmount_0(this$static.simpleModePanel, this$static.amountOfPartsOfUser, 0);
      this$static.actualAmount = 0;
      return;
    }
    try {
      amount = ($clinit_Double() , new Double_0(cleanTextNumber($getText(dynamicCast(this$static.this$11.this$01.montant.widget, 30))))).value_0;
      amount = amount - totalHardcodedAmount;
      partOfUser = amount * (this$static.amountOfPartsOfUser / totalAmountOfParts);
      this$static.actualAmount = partOfUser;
      $setPartsAndAmount(this$static.complexModePanel, this$static.amountOfPartsOfUser, this$static.actualAmount);
      $setPartsAndAmount_0(this$static.simpleModePanel, this$static.amountOfPartsOfUser, this$static.actualAmount);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 22)) {
        $setPartsAndAmount(this$static.complexModePanel, this$static.amountOfPartsOfUser, 0);
        $setPartsAndAmount_0(this$static.simpleModePanel, this$static.amountOfPartsOfUser, 0);
      }
       else
        throw unwrap($e0);
    }
  }
   else {
    $setPartsAndAmount(this$static.complexModePanel, -1, this$static.amountOfUser);
    $setPartsAndAmount_0(this$static.simpleModePanel, -1, this$static.amountOfUser);
    this$static.actualAmount = this$static.amountOfUser;
  }
}

function $updatePartsAndAmountInModel(this$static, parts, amount){
  this$static.amountOfPartsOfUser = parts;
  this$static.amountOfUser = amount;
  $synchAllComplexPartAndAmount(this$static.this$11);
}

function PaymentPanel$RepartitionPanel$IndividualRepartition(this$1, u){
  this.this$11 = this$1;
  this.sp = new SimplePanel;
  this.user = u;
  this.simpleMode = true;
  this.sp.setWidth('300px');
  this.sp.setWidget((!this.simpleModePanel && (this.simpleModePanel = new PaymentPanel$RepartitionPanel$IndividualRepartition$SimpleRepartitionPanel(this, this.user)) , this.simpleModePanel));
  !this.complexModePanel && (this.complexModePanel = new PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel(this, this.user));
  $initWidget(this, this.sp);
}

defineClass(80, 708, {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 9:1, 6:1, 80:1}, PaymentPanel$RepartitionPanel$IndividualRepartition);
_.actualAmount = 0;
_.amountOfPartsOfUser = 1;
_.amountOfUser = -1;
_.simpleMode = false;
var Lcom_tribab_tricount_client_panel_PaymentPanel$RepartitionPanel$IndividualRepartition_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/RepartitionPanel/IndividualRepartition', 80);
function $setPartsAndAmount(this$static, parts, amount){
  if (parts != -1) {
    $setText_3(this$static.partsTB, '' + parts);
    $removeStyleName(this$static.partsTB, 'repartitionPartFieldNotActive');
  }
   else {
    $setText_3(this$static.partsTB, '');
    $addStyleName(this$static.partsTB, 'repartitionPartFieldNotActive');
  }
  $setText_3(this$static.amountTB, getStringNumber(roundRepartition(amount)));
}

function PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel(this$2, user){
  var b, devise, dummy, fp;
  this.this$21 = this$2;
  this.panel = new HorizontalPanel;
  $setVerticalAlignment(this.panel, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $setWidth(this.panel, '100%');
  dummy = new HorizontalPanel;
  this.userName = new Label_1(user.name_0);
  $setStyleName(this.userName, 'repartitionNameLabel');
  $add_3(dummy, this.userName);
  $setCellVerticalAlignment_1(dummy, this.userName, ALIGN_MIDDLE);
  ($clinit_DOM() , dummy.element).style['height'] = '100%';
  this.partsTB = new TextBox;
  $setStyleName(this.partsTB, 'repartitionPartField');
  $addDomHandler(this.partsTB, new PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$1(this), ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE_0));
  this.amountTB = new TextBox;
  $setStyleName(this.amountTB, 'repartitionAmountField');
  $addDomHandler(this.amountTB, new PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$2(this), (null , TYPE_0));
  devise = new Label_1(tricount_0.currency);
  $setClassName(devise.element, 'repartitionAmountLabel');
  fp = new FocusPanel;
  $setClassName(fp.element, 'repartitionSimpleFocusPanel');
  fp.element.style['width'] = '100%';
  add_7(fp, new PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$3(this));
  b = new RoundedButton(dummy);
  b.element.style['width'] = '145px';
  $add_1(fp, b);
  $add_3(this.panel, fp);
  $setCellWidth(this.panel, b, '150px');
  $setCellVerticalAlignment_1(this.panel, b, ALIGN_MIDDLE);
  $add_3(this.panel, this.partsTB);
  $setCellWidth(this.panel, this.partsTB, '40px');
  $add_3(this.panel, this.amountTB);
  $setCellWidth(this.panel, this.amountTB, '75px');
  $add_3(this.panel, devise);
  $setCellWidth(this.panel, devise, '35px');
  $setCellVerticalAlignment_1(this.panel, devise, ALIGN_MIDDLE);
  $setCellHorizontalAlignment_0(this.panel, devise, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  $setText_0(devise, tricount_0.currency);
  $initWidget(this, this.panel);
}

defineClass(220, 708, $intern_37, PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel);
var Lcom_tribab_tricount_client_panel_PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/RepartitionPanel/IndividualRepartition/ComplexRepartitionPanel', 220);
function PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$1(this$3){
  this.this$31 = this$3;
}

defineClass(582, 1, $intern_45, PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$1);
_.onChange = function onChange_2(event_0){
  var a;
  try {
    a = valueOf_1(__parseAndValidateInt($getPropertyString($getElement(this.this$31.partsTB), 'value'))).value_0;
    a < 0 && (a = 0);
    $updatePartsAndAmountInModel(this.this$31.this$21, a, -1);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 22)) {
      $updatePartsAndAmountInModel(this.this$31.this$21, 0, -1);
    }
     else
      throw unwrap($e0);
  }
}
;
var Lcom_tribab_tricount_client_panel_PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/RepartitionPanel/IndividualRepartition/ComplexRepartitionPanel/1', 582);
function PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$2(this$3){
  this.this$31 = this$3;
}

defineClass(583, 1, $intern_45, PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$2);
_.onChange = function onChange_3(event_0){
  var expenseAmount, value_0;
  $clinit_System();
  try {
    expenseAmount = ($clinit_Double() , new Double_0(cleanTextNumber($getText(dynamicCast(this.this$31.this$21.this$11.this$01.montant.widget, 30))))).value_0;
    value_0 = (new Double_0(cleanTextNumber($getPropertyString($getElement(this.this$31.amountTB), 'value')))).value_0;
    if (value_0 < 0 || value_0 > expenseAmount) {
      throw new Exception;
    }
    $updatePartsAndAmountInModel(this.this$31.this$21, -1, value_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 22)) {
      $synchAll(this.this$31.this$21);
    }
     else
      throw unwrap($e0);
  }
}
;
var Lcom_tribab_tricount_client_panel_PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/RepartitionPanel/IndividualRepartition/ComplexRepartitionPanel/2', 583);
function PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$3(this$3){
  this.this$31 = this$3;
}

defineClass(584, 1, $intern_49, PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$3);
_.onClick_0 = function onClick_32(sender){
  $incrementParts(this.this$31.this$21);
}
;
var Lcom_tribab_tricount_client_panel_PaymentPanel$RepartitionPanel$IndividualRepartition$ComplexRepartitionPanel$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/RepartitionPanel/IndividualRepartition/ComplexRepartitionPanel/3', 584);
function $setPartsAndAmount_0(this$static, parts, amount){
  parts == -1?amount == 0?$setVisible(this$static.vImage, false):$setVisible(this$static.vImage, true):parts == 0?$setVisible(this$static.vImage, false):$setVisible(this$static.vImage, true);
  $setText_0(this$static.amount, getStringNumber(roundRepartition(amount)) + ' ' + tricount_0.currency);
}

function PaymentPanel$RepartitionPanel$IndividualRepartition$SimpleRepartitionPanel(this$2, u){
  var roundedCorners;
  this.this$21 = this$2;
  this.fp = new FocusPanel;
  $setWidth(this.fp, '100%');
  $setStyleName(this.fp, 'repartitionSimpleFocusPanel');
  add_7(this.fp, new PaymentPanel$RepartitionPanel$IndividualRepartition$SimpleRepartitionPanel$1(this));
  this.panel = new HorizontalPanel;
  $setWidth(this.panel, '100%');
  $setHeight(this.panel, '100%');
  roundedCorners = new RoundedButton(this.panel);
  $add_1(this.fp, roundedCorners);
  this.vImage = new Image_0;
  $setUrl_0(this.vImage, 'Images/vImage.png');
  $setPixelSize(this.vImage, 15, 15);
  $add_3(this.panel, this.vImage);
  $setCellWidth(this.panel, this.vImage, '20px');
  $setCellVerticalAlignment_1(this.panel, this.vImage, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $setCellHorizontalAlignment_0(this.panel, this.vImage, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  this.userName = new Label_1(u.name_0);
  $setStylePrimaryName(this.userName, 'repartitionNameLabel');
  $add_3(this.panel, this.userName);
  $setCellVerticalAlignment_1(this.panel, this.userName, ALIGN_MIDDLE);
  this.amount = new Label;
  $setStylePrimaryName(this.amount, 'repartitionAmountLabel');
  $add_3(this.panel, this.amount);
  $setCellWidth(this.panel, this.amount, '100px');
  $setCellHorizontalAlignment_0(this.panel, this.amount, ALIGN_RIGHT);
  $setCellVerticalAlignment_1(this.panel, this.amount, ALIGN_MIDDLE);
  $initWidget(this, this.fp);
}

defineClass(219, 708, $intern_37, PaymentPanel$RepartitionPanel$IndividualRepartition$SimpleRepartitionPanel);
var Lcom_tribab_tricount_client_panel_PaymentPanel$RepartitionPanel$IndividualRepartition$SimpleRepartitionPanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/RepartitionPanel/IndividualRepartition/SimpleRepartitionPanel', 219);
function PaymentPanel$RepartitionPanel$IndividualRepartition$SimpleRepartitionPanel$1(this$3){
  this.this$31 = this$3;
}

defineClass(581, 1, $intern_49, PaymentPanel$RepartitionPanel$IndividualRepartition$SimpleRepartitionPanel$1);
_.onClick_0 = function onClick_33(sender){
  $setToggleSelection(this.this$31.this$21);
}
;
var Lcom_tribab_tricount_client_panel_PaymentPanel$RepartitionPanel$IndividualRepartition$SimpleRepartitionPanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'PaymentPanel/RepartitionPanel/IndividualRepartition/SimpleRepartitionPanel/1', 581);
function SharePanel(){
  var emailBody, emailPanel, emailTB, emailWarning, errorWidget, mainInstructionLabel, secondInstructionLabel, sendLink, successWidget, t;
  this.mainPanel = new VerticalPanel;
  mainInstructionLabel = new Label;
  $setText_0(mainInstructionLabel, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Copy the text below into an e-mail and send it to the group:'));
  setStylePrimaryName(($clinit_DOM() , mainInstructionLabel.element), 'shareMainInstruction');
  emailBody = new HTML;
  t = tricount_0;
  $setHTML_0(emailBody, (!localizedStrings && (localizedStrings = new Locale_) , $module_tricount_share_emailTemplate(htmlEscape(t.name_0), getTRICOUNT_URL(t.random_0))));
  setStylePrimaryName(emailBody.element, 'shareEmailTemplate');
  $setTitle(emailBody, (!localizedStrings && (localizedStrings = new Locale_) , 'Copy and paste this text into an e-mail'));
  emailPanel = new HorizontalPanel;
  secondInstructionLabel = new Label;
  $setText_0(secondInstructionLabel, (!localizedStrings && (localizedStrings = new Locale_) , 'or put your e-mail address here:'));
  setStylePrimaryName(secondInstructionLabel.element, 'shareMainInstruction');
  emailTB = new TextBox;
  setStylePrimaryName(emailTB.element, 'inputTextField');
  sendLink = new Anchor_0;
  $setText(sendLink, (!localizedStrings && (localizedStrings = new Locale_) , 'Send'));
  setStyleName(sendLink.element, 'detailsLink', true);
  $setPropertyInt(emailPanel.table, 'cellSpacing', 5);
  $add_3(emailPanel, secondInstructionLabel);
  $setCellVerticalAlignment_1(emailPanel, secondInstructionLabel, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $add_3(emailPanel, emailTB);
  $setCellVerticalAlignment_1(emailPanel, emailTB, ALIGN_MIDDLE);
  $add_3(emailPanel, sendLink);
  $setCellVerticalAlignment_1(emailPanel, sendLink, ALIGN_MIDDLE);
  errorWidget = new ValidationErrorWidget;
  successWidget = new ValidationSuccessWidget;
  $add_3(emailPanel, errorWidget);
  $setCellVerticalAlignment_1(emailPanel, errorWidget, ALIGN_MIDDLE);
  $add_3(emailPanel, successWidget);
  $setCellVerticalAlignment_1(emailPanel, successWidget, ALIGN_MIDDLE);
  add_7(sendLink, new SharePanel$1(emailTB, errorWidget, successWidget));
  emailWarning = new HTML;
  $setHTML_0(emailWarning, (!localizedStrings && (localizedStrings = new Locale_) , 'Your e-mail address is optional.  If you enter it in, you will receive the text below, and then you can forward this to the rest of the participants.'));
  setStylePrimaryName(emailWarning.element, 'shareEmailWarning');
  $add_6(this.mainPanel, mainInstructionLabel);
  $add_6(this.mainPanel, emailBody);
  $add_6(this.mainPanel, emailPanel);
  $add_6(this.mainPanel, emailWarning);
  $initWidget(this, this.mainPanel);
}

defineClass(589, 708, $intern_37, SharePanel);
var Lcom_tribab_tricount_client_panel_SharePanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'SharePanel', 589);
function SharePanel$1(val$emailTB, val$errorWidget, val$successWidget){
  this.val$emailTB2 = val$emailTB;
  this.val$errorWidget3 = val$errorWidget;
  this.val$successWidget4 = val$successWidget;
}

defineClass(590, 1, $intern_49, SharePanel$1);
_.onClick_0 = function onClick_34(sender){
  var email, service, t;
  $setEnabled(this.val$emailTB2, false);
  t = tricount_0;
  $setVisible(this.val$errorWidget3, false);
  $setVisible(this.val$successWidget4, false);
  $clinit_TricountConstants();
  !localizedStrings && (localizedStrings = new Locale_);
  !localizedStrings && (localizedStrings = new Locale_);
  $module_tricount_share_emailBody(t.name_0, getTRICOUNT_URL(t.random_0));
  service = getInstance();
  email = new TricountCreationEmail($getPropertyString($getElement(this.val$emailTB2), 'value'), t.name_0, t.random_0, getTricountLang());
  $sendMail(service, email, new SharePanel$1$1(this.val$emailTB2, this.val$errorWidget3, this.val$successWidget4));
}
;
var Lcom_tribab_tricount_client_panel_SharePanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'SharePanel/1', 590);
function $onFailure_0(this$static){
  $setEnabled(this$static.val$emailTB2, true);
  $setVisible(this$static.val$errorWidget3, true);
  $setErrorMessage(this$static.val$errorWidget3, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Invalid address'));
  $setVisible(this$static.val$successWidget4, false);
}

function $onSuccess_3(this$static){
  $setEnabled(this$static.val$emailTB2, true);
  $setVisible(this$static.val$errorWidget3, false);
  $setVisible(this$static.val$successWidget4, true);
  $setSuccessMessage(this$static.val$successWidget4, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'E-mail Sent'));
}

function SharePanel$1$1(val$emailTB, val$errorWidget, val$successWidget){
  this.val$emailTB2 = val$emailTB;
  this.val$errorWidget3 = val$errorWidget;
  this.val$successWidget4 = val$successWidget;
}

defineClass(591, 1, {}, SharePanel$1$1);
_.onFailure = function onFailure_9(caught){
  $onFailure_0(this);
}
;
_.onSuccess = function onSuccess_9(result){
  $onSuccess_3(this, throwClassCastExceptionUnlessNull(result));
}
;
var Lcom_tribab_tricount_client_panel_SharePanel$1$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'SharePanel/1/1', 591);
function $refreshContent(this$static, equilibreAdded){
  var abs_0, amount, amountAndCurrency, annuler, currentIndex, devise, displayableAmount, e, equilibrageDone, extreme, focPanel, hp, sol, t, t$iterator, titleLabel, toSort, tst1, u, u$iterator, u$iterator0, values, who;
  $clinit_System();
  $clear_4(this$static.histo);
  values = getIndividualBalances();
  toSort = new Vector_0(new AbstractMap$1(values));
  sort_0(toSort, new UserComparator($useHarmonisedSorting(tricount_0)));
  extreme = 0;
  for (u$iterator0 = new AbstractList$IteratorImpl(toSort.arrayList); u$iterator0.i < u$iterator0.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator0.i < u$iterator0.this$01_0.size_1()) , dynamicCast(u$iterator0.this$01_0.get_0(u$iterator0.last = u$iterator0.i++), 37));
    abs_0 = dynamicCast(values.get_1(u), 44).value_0;
    dynamicCast(values.get_1(u), 44).value_0 < 10 && (abs_0 = -abs_0);
    abs_0 > extreme && (extreme = abs_0);
  }
  extreme == 0 && (extreme = 1);
  for (u$iterator = new AbstractList$IteratorImpl(toSort.arrayList); u$iterator.i < u$iterator.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
    displayableAmount = getStringNumber(dynamicCast(values.get_1(u), 44).value_0 / 100);
    $addValue(this$static.histo, dynamicCast(values.get_1(u), 44).value_0 / extreme, u.name_0, displayableAmount);
  }
  $clear_1(this$static.content_0);
  titleLabel = new Label_1(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'How to balance?'));
  setStylePrimaryName(($clinit_DOM() , titleLabel.element), 'summaryEqTitle');
  $add_2(this$static.content_0, titleLabel);
  try {
    sol = refreshRepartition();
    $add_2(this$static.content_0, new HTML_0('<br/>'));
    if (sol.arrayList.array.length == 0) {
      tst1 = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'No reimboursement necessary, everyone has contributed equally!'));
      setStylePrimaryName(tst1.element, 'summaryEqContent');
      $add_2(this$static.content_0, tst1);
    }
     else {
      currentIndex = 0;
      for (t$iterator = new AbstractList$IteratorImpl(sol.arrayList); t$iterator.i < t$iterator.this$01_0.size_1();) {
        t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_0(t$iterator.last = t$iterator.i++), 78));
        focPanel = new FocusPanel;
        hp = new HorizontalPanel;
        setStylePrimaryName(focPanel.element, 'transactionItem');
        $add_1(focPanel, hp);
        add_10(focPanel, new SummaryPanel$1(focPanel));
        add_7(focPanel, new SummaryPanel$2(this$static, t));
        hp.element.style['width'] = '100%';
        $add_2(this$static.content_0, focPanel);
        who = new HTML_0((!localizedStrings && (localizedStrings = new Locale_) , '<span class="summaryEqContentBold">' + htmlEscape(t.from) + '<\/span><span class="summaryEqContent">&nbsp; should pay &nbsp;' + htmlEscape(t.to) + '<\/span>'));
        $add_3(hp, who);
        $setCellHorizontalAlignment_0(hp, who, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
        amount = htmlEscape(getStringNumber(t.amount / 100));
        devise = htmlEscape(tricount_0.currency);
        amountAndCurrency = new HTML_0('<span class="summaryEqContentBold">' + amount + '<\/span>&nbsp;<span class="summaryEqContent">' + devise + '<\/span>');
        $add_3(hp, amountAndCurrency);
        $setCellHorizontalAlignment_0(hp, amountAndCurrency, ALIGN_RIGHT);
        ++currentIndex;
      }
    }
    if (equilibreAdded) {
      hp = new HorizontalPanel;
      hp.element.style['width'] = '100%';
      setStylePrimaryName(hp.element, 'equilibreAddedItem');
      equilibrageDone = new Label;
      setStyleName(equilibrageDone.element, 'equilibreAddedLabel', true);
      $setText_0(equilibrageDone, (!localizedStrings && (localizedStrings = new Locale_) , 'The expenses have been balanced.'));
      annuler = new Anchor_0;
      setStyleName(annuler.element, 'equilibreAddedLink', true);
      $setText(annuler, (!localizedStrings && (localizedStrings = new Locale_) , 'Cancel'));
      add_7(annuler, new SummaryPanel$3(this$static, equilibreAdded));
      $add_3(hp, equilibrageDone);
      $setCellHorizontalAlignment_0(hp, equilibrageDone, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
      $add_3(hp, annuler);
      $setCellHorizontalAlignment_0(hp, annuler, ALIGN_RIGHT);
      $insert_0(this$static.content_0, hp);
    }
    sol.arrayList.array.length > 0?$add_6(this$static.rightColumn, this$static.hint):$remove_6(this$static.rightColumn, this$static.hint);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 22)) {
      e = $e0;
      $printStackTrace(e, $clinit_System());
      tst1 = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'An error has occured during the calculation of the redistribution of funds!'));
      setStylePrimaryName(tst1.element, 'summaryEqContent');
      $add_2(this$static.content_0, tst1);
    }
     else
      throw unwrap($e0);
  }
}

function SummaryPanel(){
  var dummy, dummy2, scroll_0, scroll2;
  this.panel = new HorizontalPanel;
  this.histo = new Histogram;
  this.content_0 = new FlowPanel;
  scroll_0 = new ScrollPanel;
  setStylePrimaryName(($clinit_DOM() , scroll_0.element), 'histoScroll');
  $add_1(scroll_0, this.histo);
  scroll_0.scrollableElem.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  scroll_0.element.style['width'] = '400px';
  scroll_0.element.style['height'] = '280px';
  $add_3(this.panel, scroll_0);
  $setStylePrimaryName(this.histo, 'histogramFrame');
  $setCellVerticalAlignment_1(this.panel, scroll_0, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $setHeight(this.histo, '265px');
  scroll2 = new ScrollPanel;
  scroll2.element.style['width'] = '309px';
  scroll2.element.style['height'] = '300px';
  setStylePrimaryName(scroll2.element, 'EqSolutionPanel');
  scroll2.scrollableElem.style['overflow'] = 'auto';
  $add_3(this.panel, scroll2);
  $setCellWidth(this.panel, scroll2, '50%');
  $setCellHeight(this.panel, scroll2, '100%');
  this.rightColumn = new VerticalPanel;
  $setWidth(this.rightColumn, '100%');
  $add_1(scroll2, this.rightColumn);
  dummy = new Label_1('');
  $add_6(this.rightColumn, dummy);
  $setCellHeight(this.rightColumn, dummy, '30px');
  $add_6(this.rightColumn, this.content_0);
  this.hint = new HintPanel(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Click on a line to make it disappear if you know that the transaction has been made.'), (!localizedStrings && (localizedStrings = new Locale_) , 'https://www.tricount.com/en/how-to-add-reimbursement'));
  dummy2 = new Label_1('');
  $add_6(this.rightColumn, dummy2);
  $setCellHeight(this.rightColumn, dummy2, '30px');
  $setWidth(this.panel, '100%');
  $setHeight(this.panel, '100%');
  $setSpacing(this.panel, 0);
  $refreshContent(this, null);
  $initWidget(this, this.panel);
}

defineClass(575, 708, $intern_37, SummaryPanel);
var Lcom_tribab_tricount_client_panel_SummaryPanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'SummaryPanel', 575);
function SummaryPanel$1(val$focPanel){
  this.val$focPanel2 = val$focPanel;
}

defineClass(576, 1, {114:1}, SummaryPanel$1);
_.onMouseDown_0 = function onMouseDown_3(sender, x_0, y_0){
}
;
_.onMouseEnter = function onMouseEnter_1(sender){
  $removeStyleName(this.val$focPanel2, 'transactionItemAway');
  $addStyleName(this.val$focPanel2, 'transactionItemOver');
}
;
_.onMouseLeave = function onMouseLeave_1(sender){
  $removeStyleName(this.val$focPanel2, 'transactionItemOver');
  $addStyleName(this.val$focPanel2, 'transactionItemAway');
}
;
_.onMouseMove_0 = function onMouseMove_3(sender, x_0, y_0){
}
;
_.onMouseUp_0 = function onMouseUp_3(sender, x_0, y_0){
}
;
var Lcom_tribab_tricount_client_panel_SummaryPanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'SummaryPanel/1', 576);
function SummaryPanel$2(this$0, val$t){
  this.this$01 = this$0;
  this.val$t2 = val$t;
}

defineClass(577, 1, $intern_49, SummaryPanel$2);
_.onClick_0 = function onClick_35(sender){
  var fromUser, impact, toUser, tr, u, u$iterator, u$iterator0;
  fromUser = null;
  for (u$iterator0 = new AbstractList$IteratorImpl($getUsers(tricount_0)); u$iterator0.i < u$iterator0.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator0.i < u$iterator0.this$01_0.size_1()) , dynamicCast(u$iterator0.this$01_0.get_0(u$iterator0.last = u$iterator0.i++), 37));
    if ($equals_1(u.name_0, this.val$t2.from)) {
      fromUser = u;
      break;
    }
  }
  toUser = null;
  for (u$iterator = new AbstractList$IteratorImpl($getUsers(tricount_0)); u$iterator.i < u$iterator.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
    if ($equals_1(u.name_0, this.val$t2.to)) {
      toUser = u;
      break;
    }
  }
  tr = getNewTransaction(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Balancing expenses'), fromUser, this.val$t2.amount / 100, tricount_0.currency, new Date_0, new Date_0);
  tr.amountOfParts = 1;
  impact = new Vector;
  $add_13(impact, new TransactionImpactOnUser_0(tr, toUser, 1, -1));
  tr.repartition = impact;
  $setAddedBy(tr, currentUser);
  $setTransactionType(tr, ($clinit_TransactionTypeEnum() , TRANSACTION_TYPE_BALANCE));
  $addTransaction_1(tricount_0, tr);
  $refreshContent(this.this$01, tr);
  GA_trackEvent(H_SUMMARY, 'Equilibrage');
}
;
var Lcom_tribab_tricount_client_panel_SummaryPanel$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'SummaryPanel/2', 577);
function SummaryPanel$3(this$0, val$equilibreAdded){
  this.this$01 = this$0;
  this.val$equilibreAdded2 = val$equilibreAdded;
}

defineClass(578, 1, $intern_49, SummaryPanel$3);
_.onClick_0 = function onClick_36(sender){
  $deleteTransaction_2(tricount_0, this.val$equilibreAdded2);
  $refreshContent(this.this$01, null);
}
;
var Lcom_tribab_tricount_client_panel_SummaryPanel$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'SummaryPanel/3', 578);
function $refreshUser(this$static){
  var u, u$iterator, ud;
  $clear(this$static.usersPanel);
  this$static.allUsers.arrayList.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  for (u$iterator = new AbstractList$IteratorImpl($getUsers(this$static.tricount)); u$iterator.i < u$iterator.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
    ud = new TricountEditionPanel$UserDisplay(this$static, u);
    $add_6(this$static.usersPanel, ud);
    $add_13(this$static.allUsers, ud);
  }
}

function $saveTricount(this$static){
  var t, t$iterator, toCheck, u, uDisplay, uDisplay$iterator;
  toCheck = new Vector;
  for (t$iterator = new AbstractList$IteratorImpl(this$static.allUsers.arrayList); t$iterator.i < t$iterator.this$01_0.size_1();) {
    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_0(t$iterator.last = t$iterator.i++), 128));
    $add_5(toCheck.arrayList, t);
  }
  $setNames(this$static.usersValidation, toCheck);
  if ($validate(this$static.validator)) {
    $setName_0(this$static.tricount, $getText(dynamicCast(this$static.titre.widget, 30)));
    $setCurrency_0(this$static.tricount, $getText(dynamicCast(this$static.devise.widget, 30)));
    $setDescription(this$static.tricount, $getText(this$static.ta));
    for (uDisplay$iterator = new AbstractList$IteratorImpl(this$static.allUsers.arrayList); uDisplay$iterator.i < uDisplay$iterator.this$01_0.size_1();) {
      uDisplay = (checkCriticalElement(uDisplay$iterator.i < uDisplay$iterator.this$01_0.size_1()) , dynamicCast(uDisplay$iterator.this$01_0.get_0(uDisplay$iterator.last = uDisplay$iterator.i++), 128));
      u = uDisplay.user;
      $setName_1(u, $trim($getText(uDisplay.tb)));
    }
    return true;
  }
   else {
    return false;
  }
}

function $setTricount(this$static, t){
  var devise_tb, titre_tb;
  this$static.tricount = t;
  titre_tb = dynamicCast(this$static.titre.widget, 30);
  $setText_3(titre_tb, t.name_0);
  devise_tb = dynamicCast(this$static.devise.widget, 30);
  $setText_3(devise_tb, t.currency);
  $setText_3(this$static.ta, t.description);
  $refreshUser(this$static);
  $addUserAddedListener(this$static.tricount, new TricountEditionPanel$1(this$static));
  $addUserRemovedListener(this$static.tricount, new TricountEditionPanel$2(this$static));
}

function TricountEditionPanel(){
  var description, groupPanel, groupeLabel, hp, titreValidation, usersValidationWidget, w, toReturn;
  this.allUsers = new Vector;
  this.usersValidation = new UserSetValidationElement;
  this.validator = new FormValidator;
  this.panel = new VerticalPanel;
  $setSpacing(this.panel, 7);
  this.titre = new LabelAndTextBox(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Title:'));
  this.devise = new LabelAndTextBox((!localizedStrings && (localizedStrings = new Locale_) , 'Currency:'));
  $setReadOnly(dynamicCast(this.devise.widget, 30));
  $setEnabled(dynamicCast(this.devise.widget, 30), false);
  $addStyleName(dynamicCast(this.devise.widget, 30), 'inputTextFieldDisabled');
  this.ta = new TextArea_0;
  $setStylePrimaryName(this.ta, 'inputTextArea');
  description = new LabelAndWidget((!localizedStrings && (localizedStrings = new Locale_) , 'Description:'), this.ta);
  $setCellVerticalAlignment_1(description.panel, description.label_0, ($clinit_HasVerticalAlignment() , ALIGN_TOP));
  groupPanel = new HorizontalPanel;
  groupeLabel = new Label_1((!localizedStrings && (localizedStrings = new Locale_) , 'Group:'));
  $setClassName(($clinit_DOM() , groupeLabel.element), 'inputFieldLabel');
  $add_3(groupPanel, groupeLabel);
  hp = (toReturn = new Hyperlink_0((!localizedStrings && (localizedStrings = new Locale_) , 'Add a participant')) , add_7(toReturn, new TricountEditionPanel$3) , toReturn);
  setStyleName(hp.element, 'hyperLinkNextToLabels', true);
  $add_3(groupPanel, hp);
  this.usersPanel = new VerticalPanel;
  $addStyleName(this.usersPanel, 'userListInTricountEdition');
  $add_6(this.panel, this.titre);
  $add_6(this.panel, this.devise);
  $add_6(this.panel, description);
  $add_6(this.panel, groupPanel);
  usersValidationWidget = new ValidationErrorWidget;
  $add_6(this.panel, usersValidationWidget);
  $add_6(this.panel, this.usersPanel);
  titreValidation = new TextBoxValidationElement(dynamicCast(this.titre.widget, 30), ($clinit_ValidationRules() , TRICOUNT_TITLE));
  w = new ValidationErrorWidget;
  $setValidationWidget(this.titre, w);
  $addValidation(this.validator, titreValidation, w);
  $addValidation(this.validator, this.usersValidation, usersValidationWidget);
  $initWidget(this, this.panel);
}

defineClass(641, 708, $intern_37, TricountEditionPanel);
var Lcom_tribab_tricount_client_panel_TricountEditionPanel_2_classLit = createForClass('com.tribab.tricount.client.panel', 'TricountEditionPanel', 641);
function $onEvent_27(this$static){
  $refreshUser(this$static.this$01);
}

function TricountEditionPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(643, 1, $intern_50, TricountEditionPanel$1);
_.onEvent = function onEvent_27(parameter){
  $onEvent_27(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_panel_TricountEditionPanel$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'TricountEditionPanel/1', 643);
function $onEvent_28(this$static){
  $refreshUser(this$static.this$01);
}

function TricountEditionPanel$2(this$0){
  this.this$01 = this$0;
}

defineClass(644, 1, $intern_50, TricountEditionPanel$2);
_.onEvent = function onEvent_28(parameter){
  $onEvent_28(this, dynamicCast(parameter, 51));
}
;
var Lcom_tribab_tricount_client_panel_TricountEditionPanel$2_2_classLit = createForClass('com.tribab.tricount.client.panel', 'TricountEditionPanel/2', 644);
function TricountEditionPanel$3(){
}

defineClass(645, 1, $intern_49, TricountEditionPanel$3);
_.onClick_0 = function onClick_37(sender){
  var db;
  if ($isRunningOnFacebook()) {
    db = new FBAddNewPersonDialogBox;
    $show_1(db);
  }
   else {
    db = new AddNewPersonDialogBox;
    $show_0(db);
  }
}
;
var Lcom_tribab_tricount_client_panel_TricountEditionPanel$3_2_classLit = createForClass('com.tribab.tricount.client.panel', 'TricountEditionPanel/3', 645);
function TricountEditionPanel$UserDisplay(this$0, u){
  var content_0, l, supprimer, userValidation, w;
  this.this$01 = this$0;
  this.user = u;
  this.hp = new HorizontalPanel;
  $setSpacing(this.hp, 3);
  $clinit_System();
  content_0 = new VerticalPanel;
  this.tb = new TextBox;
  $setStylePrimaryName(this.tb, 'inputTextField');
  $setText_3(this.tb, u.name_0);
  $add_6(content_0, this.tb);
  userValidation = new TextBoxValidationElement(this.tb, ($clinit_ValidationRules() , USER_NAME_UPDATE));
  w = new ValidationErrorWidget;
  $addValidation(this$0.validator, userValidation, w);
  $add_6(content_0, w);
  $add_3(this.hp, content_0);
  if (u == currentUser) {
    l = new Label;
    $setText_0(l, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , '(this is your identifier)'));
    setStylePrimaryName(($clinit_DOM() , l.element), 'inputFieldHintLabel');
    $add_3(this.hp, l);
    $setCellVerticalAlignment_1(this.hp, l, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  }
  if ($canDeleteUser(tricount_0, u)) {
    supprimer = new Anchor_0;
    $setText(supprimer, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'remove'));
    setStyleName(($clinit_DOM() , supprimer.element), 'deleteUserHyperlink', true);
    add_7(supprimer, new TricountEditionPanel$UserDisplay$1(this));
    $add_3(this.hp, supprimer);
    $setCellVerticalAlignment_1(this.hp, supprimer, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  }
  $initWidget(this, this.hp);
}

defineClass(128, 708, {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 9:1, 6:1, 128:1}, TricountEditionPanel$UserDisplay);
var Lcom_tribab_tricount_client_panel_TricountEditionPanel$UserDisplay_2_classLit = createForClass('com.tribab.tricount.client.panel', 'TricountEditionPanel/UserDisplay', 128);
function TricountEditionPanel$UserDisplay$1(this$1){
  this.this$11 = this$1;
}

defineClass(642, 1, $intern_49, TricountEditionPanel$UserDisplay$1);
_.onClick_0 = function onClick_38(sender){
  confirm_0(($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Are you sure you would like to remove this user?')) && $removeUser(this.this$11.this$01.tricount, this.this$11.user);
}
;
var Lcom_tribab_tricount_client_panel_TricountEditionPanel$UserDisplay$1_2_classLit = createForClass('com.tribab.tricount.client.panel', 'TricountEditionPanel/UserDisplay/1', 642);
function $addValidation(this$static, e, w){
  this$static.toValidate.put(e, w);
}

function $validate(this$static){
  var allok, e, e$iterator;
  allok = true;
  for (e$iterator = $iterator(new AbstractMap$1(this$static.toValidate)); e$iterator.val$outerIter2.hasNext();) {
    e = dynamicCast($next_4(e$iterator), 142);
    if (e.validate()) {
      $setVisible(dynamicCast(this$static.toValidate.get_1(e), 140), false);
      e.notifyValid(true);
    }
     else {
      $setErrorMessage(dynamicCast(this$static.toValidate.get_1(e), 140), e.errorText);
      $setVisible(dynamicCast(this$static.toValidate.get_1(e), 140), true);
      e.notifyValid(false);
      allok = false;
    }
  }
  return allok;
}

function FormValidator(){
  this.toValidate = new HashMap;
}

defineClass(154, 1, {}, FormValidator);
var Lcom_tribab_tricount_client_validation_FormValidator_2_classLit = createForClass('com.tribab.tricount.client.validation', 'FormValidator', 154);
defineClass(140, 708, $intern_52);
var Lcom_tribab_tricount_client_validation_IValidationErrorWidget_2_classLit = createForClass('com.tribab.tricount.client.validation', 'IValidationErrorWidget', 140);
defineClass(142, 1, $intern_53);
var Lcom_tribab_tricount_client_validation_ValidationElement_2_classLit = createForClass('com.tribab.tricount.client.validation', 'ValidationElement', 142);
function $setIndivAmounts(this$static, indiv){
  this$static.indivAmounts = indiv;
}

function RepartitionDetailsValidationElement(totalAmount){
  this.total = totalAmount;
  this.indivAmounts = null;
}

defineClass(630, 142, $intern_53, RepartitionDetailsValidationElement);
_.notifyValid = function notifyValid(valid){
}
;
_.validate = function validate(){
  var d, sum, totalAmount, u, u$iterator;
  $clinit_System();
  sum = 0;
  for (u$iterator = $iterator(new AbstractMap$1(this.indivAmounts)); u$iterator.val$outerIter2.hasNext();) {
    u = dynamicCast($next_4(u$iterator), 37);
    d = dynamicCast(this.indivAmounts.get_1(u), 61).value_0;
    sum += d;
  }
  try {
    totalAmount = ($clinit_Double() , __parseAndValidateDouble(cleanTextNumber($getText(this.total))));
    if (totalAmount != 0 && sum == 0) {
      this.errorText = ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The expense must be for at least one participant.');
      return false;
    }
    if (neq(fromDouble(Math.round(sum * 100)), fromDouble(Math.round(totalAmount * 100)))) {
      this.errorText = ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The redistributed amount is not the same as the expense amount.');
      return false;
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 22)) {
      this.errorText = 'An unknown issue occurred and the expense could not be added. Please try again';
      return false;
    }
     else
      throw unwrap($e0);
  }
  return true;
}
;
var Lcom_tribab_tricount_client_validation_RepartitionDetailsValidationElement_2_classLit = createForClass('com.tribab.tricount.client.validation', 'RepartitionDetailsValidationElement', 630);
function TextBoxValidationElement(tb, r){
  this.tb = tb;
  this.rule = r;
}

defineClass(112, 142, $intern_53, TextBoxValidationElement);
_.notifyValid = function notifyValid_0(valid){
}
;
_.validate = function validate_0(){
  this.errorText = this.rule.validate_0($getText(this.tb));
  if (this.errorText != null) {
    return false;
  }
  return true;
}
;
var Lcom_tribab_tricount_client_validation_TextBoxValidationElement_2_classLit = createForClass('com.tribab.tricount.client.validation', 'TextBoxValidationElement', 112);
function $setNames(this$static, names){
  this$static.names = names;
}

function UserSetValidationElement(){
}

defineClass(652, 142, $intern_53, UserSetValidationElement);
_.notifyValid = function notifyValid_1(valid){
}
;
_.validate = function validate_1(){
  var s1, s2, u1, u1$iterator, u2, u2$iterator;
  $clinit_System();
  this.errorText = null;
  for (u1$iterator = new AbstractList$IteratorImpl(this.names.arrayList); u1$iterator.i < u1$iterator.this$01_0.size_1();) {
    u1 = (checkCriticalElement(u1$iterator.i < u1$iterator.this$01_0.size_1()) , dynamicCast(u1$iterator.this$01_0.get_0(u1$iterator.last = u1$iterator.i++), 128));
    for (u2$iterator = new AbstractList$IteratorImpl(this.names.arrayList); u2$iterator.i < u2$iterator.this$01_0.size_1();) {
      u2 = (checkCriticalElement(u2$iterator.i < u2$iterator.this$01_0.size_1()) , dynamicCast(u2$iterator.this$01_0.get_0(u2$iterator.last = u2$iterator.i++), 128));
      if (u1 == u2)
        continue;
      s1 = $getText(u1.tb);
      s2 = $getText(u2.tb);
      if ($equals_1($trim(s1), $trim(s2))) {
        this.errorText = ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Two participants cannot have the same name.');
        return false;
      }
    }
  }
  return true;
}
;
var Lcom_tribab_tricount_client_validation_UserSetValidationElement_2_classLit = createForClass('com.tribab.tricount.client.validation', 'UserSetValidationElement', 652);
function $setErrorMessage(this$static, s){
  $setText_0(this$static.errorMessage, s);
}

function ValidationErrorWidget(){
  this.panel = new HorizontalPanel;
  $initWidget(this, this.panel);
  $addStyleName(this.panel, 'errorPanel');
  this.errorMessage = new Label;
  this.redCross = new Image_0;
  $setUrl_0(this.redCross, 'Images/redCross.jpg');
  $setPixelSize(this.redCross, 20, 20);
  $add_3(this.panel, this.redCross);
  $add_3(this.panel, this.errorMessage);
  $setStylePrimaryName(this.errorMessage, 'errorLabel');
  $setCellVerticalAlignment_1(this.panel, this.errorMessage, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  setVisible(($clinit_DOM() , this.element), false);
}

defineClass(82, 140, $intern_52, ValidationErrorWidget);
_.setStylePrimaryName = function setStylePrimaryName_1(style){
  $setStylePrimaryName(this.errorMessage, style);
}
;
var Lcom_tribab_tricount_client_validation_ValidationErrorWidget_2_classLit = createForClass('com.tribab.tricount.client.validation', 'ValidationErrorWidget', 82);
function $clinit_ValidationRules(){
  $clinit_ValidationRules = emptyMethod;
  TRANSACTION_TITLE = new ValidationRules$1;
  TRANSACTION_AMOUNT = new ValidationRules$2;
  TRANSACTION_TYPE = new ValidationRules$3;
  TRANSACTION_REPARTITION = new ValidationRules$4;
  TRANSACTION_DATE = new ValidationRules$5;
  USER_NAME = new ValidationRules$6;
  USER_NAME_UPDATE = new ValidationRules$7;
  TRICOUNT_TITLE = new ValidationRules$8;
}

function ValidationRules(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_ValidationRules();
  return initValues(getClassLiteralForArray(Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit, 1), $intern_2, 48, 0, [TRANSACTION_TITLE, TRANSACTION_AMOUNT, TRANSACTION_TYPE, TRANSACTION_REPARTITION, TRANSACTION_DATE, USER_NAME, USER_NAME_UPDATE, TRICOUNT_TITLE]);
}

defineClass(48, 7, $intern_54);
_.validate_0 = function validate_2(s){
  return null;
}
;
var TRANSACTION_AMOUNT, TRANSACTION_DATE, TRANSACTION_REPARTITION, TRANSACTION_TITLE, TRANSACTION_TYPE, TRICOUNT_TITLE, USER_NAME, USER_NAME_UPDATE;
var Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit = createForEnum('com.tribab.tricount.client.validation', 'ValidationRules', 48, Ljava_lang_Enum_2_classLit, values_13);
function ValidationRules$1(){
  ValidationRules.call(this, 'TRANSACTION_TITLE', 0);
}

defineClass(622, 48, $intern_54, ValidationRules$1);
_.validate_0 = function validate_3(s){
  if (s == null || $trim(s).length == 0) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Enter the name of your expense';
  }
  if (s.length > 20) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The name must have less than 20 characters';
  }
  return null;
}
;
var Lcom_tribab_tricount_client_validation_ValidationRules$1_2_classLit = createForEnum('com.tribab.tricount.client.validation', 'ValidationRules/1', 622, Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit, null);
function ValidationRules$2(){
  ValidationRules.call(this, 'TRANSACTION_AMOUNT', 1);
}

defineClass(623, 48, $intern_54, ValidationRules$2);
_.validate_0 = function validate_4(s){
  var d;
  if (s == null || $trim(s).length == 0) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Please enter an amount';
  }
  s = cleanTextNumber(s);
  try {
    d = ($clinit_Double() , new Double_0(s)).value_0;
    if (d <= 0) {
      return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The amount must be positive';
    }
    if (d >= 100000000) {
      return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The amount must be a number smaller than 100 000 000';
    }
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 54)) {
      return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The amount must be a number smaller than 100 000 000';
    }
     else
      throw unwrap($e0);
  }
  return null;
}
;
var Lcom_tribab_tricount_client_validation_ValidationRules$2_2_classLit = createForEnum('com.tribab.tricount.client.validation', 'ValidationRules/2', 623, Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit, null);
function ValidationRules$3(){
  ValidationRules.call(this, 'TRANSACTION_TYPE', 2);
}

defineClass(624, 48, $intern_54, ValidationRules$3);
var Lcom_tribab_tricount_client_validation_ValidationRules$3_2_classLit = createForEnum('com.tribab.tricount.client.validation', 'ValidationRules/3', 624, Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit, null);
function ValidationRules$4(){
  ValidationRules.call(this, 'TRANSACTION_REPARTITION', 3);
}

defineClass(625, 48, $intern_54, ValidationRules$4);
var Lcom_tribab_tricount_client_validation_ValidationRules$4_2_classLit = createForEnum('com.tribab.tricount.client.validation', 'ValidationRules/4', 625, Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit, null);
function ValidationRules$5(){
  ValidationRules.call(this, 'TRANSACTION_DATE', 4);
}

defineClass(626, 48, $intern_54, ValidationRules$5);
_.validate_0 = function validate_5(s){
  var d;
  if (s != null && $trim(s).length > 0) {
    try {
      d = $parse_1(getDateFormat(), s);
      if (d.getYear() < 0 || d.getYear() > 150) {
        return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The date is not valid';
      }
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 23)) {
        return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The date is not valid';
      }
       else
        throw unwrap($e0);
    }
  }
  return null;
}
;
var Lcom_tribab_tricount_client_validation_ValidationRules$5_2_classLit = createForEnum('com.tribab.tricount.client.validation', 'ValidationRules/5', 626, Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit, null);
function ValidationRules$6(){
  ValidationRules.call(this, 'USER_NAME', 5);
}

defineClass(627, 48, $intern_54, ValidationRules$6);
_.validate_0 = function validate_6(s){
  var u, u$iterator;
  if (s == null || $trim(s).length == 0) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Please enter a name';
  }
  if (s.length > 12) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The name must have less than  12 characters';
  }
  if ($getUsers(tricount_0).array.length > 29) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The number of participants is limited to 30';
  }
  for (u$iterator = new AbstractList$IteratorImpl($getUsers(tricount_0)); u$iterator.i < u$iterator.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
    if ($equals_1(u.name_0, $trim(s))) {
      return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'A user with that name exists already.';
    }
  }
  return null;
}
;
var Lcom_tribab_tricount_client_validation_ValidationRules$6_2_classLit = createForEnum('com.tribab.tricount.client.validation', 'ValidationRules/6', 627, Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit, null);
function ValidationRules$7(){
  ValidationRules.call(this, 'USER_NAME_UPDATE', 6);
}

defineClass(628, 48, $intern_54, ValidationRules$7);
_.validate_0 = function validate_7(s){
  if (s == null || $trim(s).length == 0) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Please enter a name';
  }
  if (s.length > 12) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The name must have less than  12 characters';
  }
  return null;
}
;
var Lcom_tribab_tricount_client_validation_ValidationRules$7_2_classLit = createForEnum('com.tribab.tricount.client.validation', 'ValidationRules/7', 628, Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit, null);
function ValidationRules$8(){
  ValidationRules.call(this, 'TRICOUNT_TITLE', 7);
}

defineClass(629, 48, $intern_54, ValidationRules$8);
_.validate_0 = function validate_8(s){
  if (s == null || $trim(s).length == 0) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'Please enter a title.';
  }
  if (s.length > 50) {
    return $clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'The title must have less than 50 characters';
  }
  return null;
}
;
var Lcom_tribab_tricount_client_validation_ValidationRules$8_2_classLit = createForEnum('com.tribab.tricount.client.validation', 'ValidationRules/8', 629, Lcom_tribab_tricount_client_validation_ValidationRules_2_classLit, null);
function $setSuccessMessage(this$static, s){
  $setText_0(this$static.successMessage, s);
}

function ValidationSuccessWidget(){
  this.panel = new HorizontalPanel;
  $initWidget(this, this.panel);
  $addStyleName(this.panel, 'errorPanel');
  this.successMessage = new Label;
  this.greenArrow = new Image_0;
  $setUrl_0(this.greenArrow, 'Images/vImage.png');
  $setPixelSize(this.greenArrow, 20, 20);
  $add_3(this.panel, this.greenArrow);
  $add_3(this.panel, this.successMessage);
  $setStylePrimaryName(this.successMessage, 'successLabel');
  $setCellVerticalAlignment_1(this.panel, this.successMessage, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  setVisible(($clinit_DOM() , this.element), false);
}

defineClass(631, 708, $intern_37, ValidationSuccessWidget);
_.setStylePrimaryName = function setStylePrimaryName_2(style){
  $setStylePrimaryName(this.successMessage, style);
}
;
var Lcom_tribab_tricount_client_validation_ValidationSuccessWidget_2_classLit = createForClass('com.tribab.tricount.client.validation', 'ValidationSuccessWidget', 631);
function $setKnowMore(this$static, h){
  $remove_0(this$static.contentPanel, this$static.knowMore);
  $setHref_0(this$static.knowMore, h);
  $add_2(this$static.contentPanel, this$static.knowMore);
}

function $setLabel(this$static, s){
  $setText_0(this$static.label_0, s);
}

function HintPanel(l, h){
  this.mainPanel = new HorizontalPanel;
  $setWidth(this.mainPanel, '100%');
  $setSpacing(this.mainPanel, 4);
  $initWidget(this, this.mainPanel);
  this.hintImage = new Image_0;
  $setUrl_0(this.hintImage, 'Images/hint.gif');
  $setPixelSize(this.hintImage, 15, 15);
  $add_3(this.mainPanel, this.hintImage);
  $setCellWidth(this.mainPanel, this.hintImage, '15px');
  this.contentPanel = new FlowPanel;
  $add_3(this.mainPanel, this.contentPanel);
  this.label_0 = new Label_1(l);
  $setStyleName(this.label_0, 'tricountHint');
  $add_2(this.contentPanel, this.label_0);
  this.knowMore = new Anchor_0;
  $setTarget_0(this.knowMore);
  $addStyleName(this.knowMore, 'tricountHintLink');
  $setText(this.knowMore, ($clinit_TricountConstants() , !localizedStrings && (localizedStrings = new Locale_) , 'More Info...'));
  $setHref_0(this.knowMore, h);
  $setTarget_0(this.knowMore);
  $add_2(this.contentPanel, this.knowMore);
}

defineClass(227, 708, $intern_37, HintPanel);
var Lcom_tribab_tricount_client_widget_HintPanel_2_classLit = createForClass('com.tribab.tricount.client.widget', 'HintPanel', 227);
function $addValue(this$static, d, captionL1, captionL2){
  var e, ee, ee$iterator;
  e = new Histogram$HistogramEntry(d, captionL1, captionL2);
  $add_13(this$static.entries, e);
  $add_3(this$static.horizontalPanel, e);
  for (ee$iterator = new AbstractList$IteratorImpl(this$static.entries.arrayList); ee$iterator.i < ee$iterator.this$01_0.size_1();) {
    ee = (checkCriticalElement(ee$iterator.i < ee$iterator.this$01_0.size_1()) , dynamicCast(ee$iterator.this$01_0.get_0(ee$iterator.last = ee$iterator.i++), 182));
    $setCellWidth(this$static.horizontalPanel, ee, '45px');
  }
  $setSpacing(this$static.horizontalPanel, 15);
  $setCellHeight(this$static.horizontalPanel, e, '100%');
  $setCellWidth(this$static.horizontalPanel, e, '45px');
}

function $clear_4(this$static){
  $clear(this$static.rootPanel);
  $clear(this$static.horizontalPanel);
  $setHeight(this$static.horizontalPanel, '90%');
  this$static.entries.arrayList.array = initDim(Ljava_lang_Object_2_classLit, $intern_2, 1, 0, 3, 1);
  $add_3(this$static.rootPanel, this$static.horizontalPanel);
  $setCellHorizontalAlignment_0(this$static.rootPanel, this$static.horizontalPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setCellVerticalAlignment_1(this$static.rootPanel, this$static.horizontalPanel, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $setCellHeight(this$static.rootPanel, this$static.horizontalPanel, '90%');
}

function Histogram(){
  this.entries = new Vector;
  this.rootPanel = new HorizontalPanel;
  $setPropertyString(this.rootPanel.table, 'border', '0');
  $setWidth(this.rootPanel, '100%');
  $setHeight(this.rootPanel, '100%');
  this.horizontalPanel = new HorizontalPanel;
  $setHeight(this.horizontalPanel, '100%');
  $add_3(this.rootPanel, this.horizontalPanel);
  $initWidget(this, this.rootPanel);
}

defineClass(615, 708, $intern_37, Histogram);
var Lcom_tribab_tricount_client_widget_Histogram_2_classLit = createForClass('com.tribab.tricount.client.widget', 'Histogram', 615);
function Histogram$HistogramEntry(value_0, captionL1, captionL2){
  var captionL1Label, captionL2Label, captionLabelL1, captionLabelL2, captionPanel, finalHeight, sp, sp2, stringHeight;
  this.vp = new VerticalPanel;
  if (value_0 > 0) {
    sp = new SimplePanel;
    stringHeight = '' + value_0 * 100;
    sp.setHeight(stringHeight + '%');
    setStylePrimaryName(sp.getStyleElement(), 'histogramPositive');
    captionPanel = new VerticalPanel;
    ($clinit_DOM() , captionPanel.element).style['width'] = '100%';
    captionL1Label = new Label_1(captionL1);
    setStylePrimaryName(captionL1Label.element, 'histogramPositiveCaption');
    captionL2Label = new Label_1(captionL2);
    setStylePrimaryName(captionL2Label.element, 'histogramPositiveCaption');
    $add_6(captionPanel, captionL1Label);
    $setCellHorizontalAlignment_0(captionPanel, captionL1Label, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    $add_6(captionPanel, captionL2Label);
    $setCellHorizontalAlignment_0(captionPanel, captionL2Label, ALIGN_CENTER);
    $add_1(sp, captionPanel);
    $add_6(this.vp, sp);
    $setCellVerticalAlignment_1(this.vp, sp, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM));
    $setCellHeight(this.vp, sp, '50%');
    sp2 = new SimplePanel;
    sp2.setHeight('100%');
    $add_6(this.vp, sp2);
    $setCellVerticalAlignment_1(this.vp, sp2, ALIGN_TOP);
    $setCellHeight(this.vp, sp2, '50%');
  }
  if (value_0 == 0) {
    captionPanel = new VerticalPanel;
    captionLabelL1 = new Label_1(captionL1);
    setStylePrimaryName(($clinit_DOM() , captionLabelL1.element), 'histogramNullCaption');
    captionLabelL2 = new Label_1(captionL2);
    setStylePrimaryName(captionLabelL2.element, 'histogramNullCaption');
    $add_6(captionPanel, captionLabelL1);
    $add_6(captionPanel, captionLabelL2);
    $add_6(this.vp, captionPanel);
    $setCellVerticalAlignment_1(this.vp, captionPanel, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
    $setCellHorizontalAlignment_0(this.vp, captionPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  }
  if (value_0 < 0) {
    sp2 = new SimplePanel;
    sp2.setHeight('100%');
    $add_6(this.vp, sp2);
    $setCellVerticalAlignment_1(this.vp, sp2, ($clinit_HasVerticalAlignment() , ALIGN_BOTTOM));
    $setCellHeight(this.vp, sp2, '50%');
    sp = new SimplePanel;
    stringHeight = '' + -value_0 * 100;
    setStylePrimaryName(sp.getStyleElement(), 'histogramNegative');
    $indexOf_2(stringHeight, fromCodePoint(46)) != -1?(finalHeight = $substring_0(stringHeight, 0, $indexOf_2(stringHeight, fromCodePoint(46))) + '%'):(finalHeight = stringHeight + '%');
    sp.setHeight(finalHeight);
    captionPanel = new VerticalPanel;
    captionLabelL1 = new Label_1(captionL1);
    setStylePrimaryName(($clinit_DOM() , captionLabelL1.element), 'histogramNegativeCaption');
    $add_6(captionPanel, captionLabelL1);
    captionLabelL2 = new Label_1(captionL2);
    $add_6(captionPanel, captionLabelL2);
    setStylePrimaryName(captionLabelL2.element, 'histogramNegativeCaption');
    $add_1(sp, captionPanel);
    $add_6(this.vp, sp);
    $setCellVerticalAlignment_1(this.vp, sp, ALIGN_TOP);
    $setCellHeight(this.vp, sp, '50%');
  }
  $setWidth(this.vp, '100%');
  $setHeight(this.vp, '100%');
  $initWidget(this, this.vp);
}

defineClass(182, 708, {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 9:1, 6:1, 182:1}, Histogram$HistogramEntry);
var Lcom_tribab_tricount_client_widget_Histogram$HistogramEntry_2_classLit = createForClass('com.tribab.tricount.client.widget', 'Histogram/HistogramEntry', 182);
function $addHyperlink(this$static, h){
  var sepLabel;
  if (this$static.amount != 0) {
    sepLabel = new HTML_0(this$static.separator);
    $add_3(this$static.hyperlinksContent, sepLabel);
  }
  $add_3(this$static.hyperlinksContent, h);
  ++this$static.amount;
}

function $setStylePrimaryName_0(this$static, style){
  var i, w;
  for (i = 0; i < this$static.hyperlinksContent.children.size_0; i++) {
    w = $getWidget(this$static.hyperlinksContent, i);
    w.setStylePrimaryName(style);
  }
}

function HyperlinkList(hs){
  var h, h$iterator;
  this.separator = ',&nbsp;';
  this.hyperlinksContent = new HorizontalPanel;
  for (h$iterator = new AbstractList$IteratorImpl(hs.arrayList); h$iterator.i < h$iterator.this$01_0.size_1();) {
    h = (checkCriticalElement(h$iterator.i < h$iterator.this$01_0.size_1()) , dynamicCast(h$iterator.this$01_0.get_0(h$iterator.last = h$iterator.i++), 29));
    $addHyperlink(this, h);
  }
  $initWidget(this, this.hyperlinksContent);
}

defineClass(150, 708, $intern_37, HyperlinkList);
_.setStylePrimaryName = function setStylePrimaryName_3(style){
  $setStylePrimaryName_0(this, style);
}
;
_.amount = 0;
var Lcom_tribab_tricount_client_widget_HyperlinkList_2_classLit = createForClass('com.tribab.tricount.client.widget', 'HyperlinkList', 150);
function $setValidationWidget(this$static, w){
  $add_3(this$static.panel, w);
  $setCellVerticalAlignment_1(this$static.panel, w, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
}

function LabelAndWidget(s, w){
  this.panel = new HorizontalPanel;
  this.widget = w;
  this.label_0 = new Label_1(s);
  $setStyleName(this.label_0, 'inputFieldLabel');
  $setWordWrap(this.label_0);
  $add_3(this.panel, this.label_0);
  $setCellVerticalAlignment_1(this.panel, this.label_0, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $add_3(this.panel, w);
  $setCellWidth(this.panel, this.label_0, '150px');
  $initWidget(this, this.panel);
}

defineClass(153, 708, $intern_37, LabelAndWidget);
var Lcom_tribab_tricount_client_widget_LabelAndWidget_2_classLit = createForClass('com.tribab.tricount.client.widget', 'LabelAndWidget', 153);
function LabelAndDateBox(label_0){
  LabelAndWidget.call(this, label_0, new DateBox);
  this.widget.setStyleName('inputTextField');
}

defineClass(620, 153, $intern_37, LabelAndDateBox);
var Lcom_tribab_tricount_client_widget_LabelAndDateBox_2_classLit = createForClass('com.tribab.tricount.client.widget', 'LabelAndDateBox', 620);
function LabelAndDropDown(label_0){
  LabelAndWidget.call(this, label_0, new ListBoxWithObject);
  this.widget.setStyleName('inputDropDown');
}

defineClass(232, 153, $intern_37, LabelAndDropDown);
var Lcom_tribab_tricount_client_widget_LabelAndDropDown_2_classLit = createForClass('com.tribab.tricount.client.widget', 'LabelAndDropDown', 232);
function LabelAndTextBox(label_0){
  LabelAndWidget.call(this, label_0, new TextBox);
  this.widget.setStyleName('inputTextField');
}

defineClass(141, 153, $intern_37, LabelAndTextBox);
var Lcom_tribab_tricount_client_widget_LabelAndTextBox_2_classLit = createForClass('com.tribab.tricount.client.widget', 'LabelAndTextBox', 141);
function $add_10(this$static, s, o){
  $insertItem(this$static.lb, s);
  $add_13(this$static.objects, o);
}

function $getSelectedElement(this$static){
  return $get_3(this$static.objects, $getSelectElement(this$static.lb).selectedIndex);
}

function $setSelectedElement(this$static, type_0){
  var found, i;
  found = -1;
  for (i = 0; i < this$static.objects.arrayList.array.length; i++) {
    $get_3(this$static.objects, i) != null && equals_Ljava_lang_Object__Z__devirtual$($get_3(this$static.objects, i), type_0) && (found = i);
  }
  found >= 0 && $setSelectedIndex_0(this$static.lb, found);
}

function ListBoxWithObject(){
  this.lb = new ListBox;
  this.objects = new Vector;
  $initWidget(this, this.lb);
}

defineClass(87, 708, {13:1, 11:1, 12:1, 10:1, 21:1, 14:1, 9:1, 6:1, 87:1}, ListBoxWithObject);
_.setStylePrimaryName = function setStylePrimaryName_4(style){
  $setStylePrimaryName(this.lb, style);
}
;
var Lcom_tribab_tricount_client_widget_ListBoxWithObject_2_classLit = createForClass('com.tribab.tricount.client.widget', 'ListBoxWithObject', 87);
function RoundedButton(content_0){
  var left, right;
  this.panel = new HorizontalPanel;
  $setWidth(this.panel, '100%');
  left = new Image_0;
  ($clinit_DOM() , left.element).style['width'] = '5px';
  left.element.style['height'] = '25px';
  $setUrl(left, ($clinit_UriUtils() , new SafeUriString('Images/roundedLeft.png')));
  $add_3(this.panel, left);
  $setCellWidth(this.panel, left, '15px');
  this.content_0 = new SimplePanel;
  $setStyleName(this.content_0, 'roundedButtonMiddle');
  this.content_0.setWidget(content_0);
  $add_3(this.panel, this.content_0);
  $setCellWidth(this.panel, this.content_0, '100%');
  $setCellVerticalAlignment_1(this.panel, this.content_0, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  right = new Image_0;
  $setUrl(right, new SafeUriString('Images/roundedRight.png'));
  right.element.style['width'] = '5px';
  right.element.style['height'] = '25px';
  $add_3(this.panel, right);
  $setCellWidth(this.panel, right, '15px');
  $initWidget(this, this.panel);
}

defineClass(177, 708, $intern_37, RoundedButton);
var Lcom_tribab_tricount_client_widget_RoundedButton_2_classLit = createForClass('com.tribab.tricount.client.widget', 'RoundedButton', 177);
function TabBarHeader(style, text_0){
  this.label_0 = new Label;
  $setText_0(this.label_0, text_0);
  $setStyleName(this.label_0, 'tabBarHeader');
  $addStyleName(this.label_0, style);
  $initWidget(this, this.label_0);
}

defineClass(146, 708, $intern_37, TabBarHeader);
_.label_0 = null;
var Lcom_tribab_tricount_client_widget_TabBarHeader_2_classLit = createForClass('com.tribab.tricount.client.widget', 'TabBarHeader', 146);
function $compare_0(this$static, source, target){
  return this$static.harmonised?source.localeCompare(target, 'en-US'):compareTo_11(source, target);
}

defineClass(549, 1, $intern_48);
_.compare = function compare_2(source, target){
  return $compare_0(this, dynamicCastToString(source), dynamicCastToString(target));
}
;
_.harmonised = false;
var Lcom_tribab_tricount_common_client_model_ClientParticipantNameComparator_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'ClientParticipantNameComparator', 549);
function FBFriend(){
}

defineClass(90, 1, {90:1, 3:1}, FBFriend);
_.id_0 = {l:0, m:0, h:0};
var Lcom_tribab_tricount_common_client_model_FBFriend_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'FBFriend', 90);
function deserialize_30(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_27(streamReader){
  var size_0;
  size_0 = $readInt(streamReader);
  return initDim(Lcom_tribab_tricount_common_client_model_FBFriend_2_classLit, $intern_2, 90, size_0, 0, 1);
}

function deserialize_31(streamReader, instance){
  setFirstName(instance, $getString(streamReader, $readInt(streamReader)));
  setFullName(instance, $getString(streamReader, $readInt(streamReader)));
  setId(instance, $readLong(streamReader));
  setLastName(instance, $getString(streamReader, $readInt(streamReader)));
}

function instantiate_28(streamReader){
  return new FBFriend;
}

function setFirstName(instance, value_0){
  instance.firstName = value_0;
}

function setFullName(instance, value_0){
  instance.fullName = value_0;
}

function setId(instance, value_0){
  instance.id_0 = value_0;
}

function setLastName(instance, value_0){
  instance.lastName = value_0;
}

var Lcom_tribab_tricount_common_client_model_IComment_2_classLit = createForInterface('com.tribab.tricount.common.client.model', 'IComment');
function deserialize_32(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_29(streamReader){
  var size_0;
  size_0 = $readInt(streamReader);
  return initDim(Lcom_tribab_tricount_common_client_model_IComment_2_classLit, $intern_2, 186, size_0, 0, 1);
}

function serialize_30(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function serialize_31(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

var Lcom_tribab_tricount_common_client_model_ITransactionImpact_2_classLit = createForInterface('com.tribab.tricount.common.client.model', 'ITransactionImpact');
function deserialize_33(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_30(streamReader){
  var size_0;
  size_0 = $readInt(streamReader);
  return initDim(Lcom_tribab_tricount_common_client_model_ITransactionImpact_2_classLit, $intern_2, 115, size_0, 0, 1);
}

function serialize_32(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function OldAndNewID(){
}

defineClass(123, 1, {123:1, 3:1}, OldAndNewID);
_.equals$ = function equals_6(o){
  var that;
  if (this === o)
    return true;
  if (o == null || Lcom_tribab_tricount_common_client_model_OldAndNewID_2_classLit != getClass__Ljava_lang_Class___devirtual$(o))
    return false;
  that = dynamicCast(o, 123);
  if (this.oldID != that.oldID)
    return false;
  return this.newID == that.newID;
}
;
_.hashCode$ = function hashCode_8(){
  var result;
  result = this.oldID;
  result = 31 * result + this.newID;
  return result;
}
;
_.newID = 0;
_.oldID = 0;
var Lcom_tribab_tricount_common_client_model_OldAndNewID_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'OldAndNewID', 123);
function deserialize_34(streamReader, instance){
  setNewID(instance, $readInt(streamReader));
  setOldID(instance, $readInt(streamReader));
}

function instantiate_31(streamReader){
  return new OldAndNewID;
}

function setNewID(instance, value_0){
  instance.newID = value_0;
}

function setOldID(instance, value_0){
  instance.oldID = value_0;
}

function serialize_33(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function serialize_34(streamWriter, instance){
  $writeString(streamWriter, instance.nullField);
  $writeString(streamWriter, instance.nullField);
  $writeString(streamWriter, instance.nullField);
}

function ParticipantNameComparator(h){
  this.harmonised = h;
}

defineClass(217, 549, $intern_48, ParticipantNameComparator);
var Lcom_tribab_tricount_common_client_model_ParticipantNameComparator_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'ParticipantNameComparator', 217);
function $$init_2(this$static){
  this$static.transactionType = ($clinit_TransactionTypeEnum() , TRANSACTION_TYPE_NORMAL);
  this$static.commentAddedEvent = new Event_0;
  this$static.transactionModifiedEvent = new Event_0;
}

function $addCommentAddedListener(this$static, listener){
  $add_11(this$static.commentAddedEvent, listener);
}

function $addTransactionComment_1(this$static, tc){
  this$static.transactionComments.add_0(tc);
  $fire(this$static.commentAddedEvent, tc);
}

function $addTransactionModifiedListener(this$static, listener){
  $add_11(this$static.transactionModifiedEvent, listener);
}

function $getActualRepartitionSize(this$static){
  var im, im$iterator, toReturn;
  toReturn = 0;
  for (im$iterator = this$static.repartition.iterator(); im$iterator.hasNext();) {
    im = dynamicCast(im$iterator.next_0(), 115);
    if (im.amount == -1 && (im.amountOfPart == -1 || im.amountOfPart == 0))
    ;
    else {
      ++toReturn;
    }
  }
  return toReturn;
}

function $getBalanceForUser(this$static, u, negativeOnly, roundedImpact){
  var balance, impact, impact$iterator, impact$iterator0, impactDouble, ratio, remainingAmount, totalHardcodedAmount;
  balance = 0;
  negativeOnly || u == this$static.payedBy && (balance += this$static.amount);
  totalHardcodedAmount = 0;
  for (impact$iterator0 = this$static.repartition.iterator(); impact$iterator0.hasNext();) {
    impact = dynamicCast(impact$iterator0.next_0(), 115);
    impact.amount != -1 && (totalHardcodedAmount += impact.amount);
  }
  for (impact$iterator = this$static.repartition.iterator(); impact$iterator.hasNext();) {
    impact = dynamicCast(impact$iterator.next_0(), 115);
    if (impact.user == u) {
      if (impact.amount != -1) {
        balance -= impact.amount;
      }
       else {
        ratio = impact.amountOfPart / this$static.amountOfParts;
        remainingAmount = this$static.amount - totalHardcodedAmount;
        impactDouble = remainingAmount * ratio;
        roundedImpact && (impactDouble = roundRepartition(impactDouble));
        balance -= impactDouble;
      }
    }
  }
  return balance;
}

function $setAddedBy(this$static, addedBy){
  this$static.addedBy = addedBy;
}

function $setAddedDate(this$static, addedDate){
  this$static.addedDate = addedDate;
}

function $setAmount(this$static, amount){
  this$static.amount = amount;
}

function $setAmountOfParts(this$static, amountOfParts){
  this$static.amountOfParts = amountOfParts;
}

function $setCurrency(this$static, currency){
  this$static.currency = currency;
}

function $setId(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setName(this$static, name_0){
  this$static.name_0 = name_0;
}

function $setPayedBy(this$static, payedBy){
  this$static.payedBy = payedBy;
}

function $setPaymentDate(this$static, paymentDate){
  this$static.paymentDate = paymentDate;
}

function $setRepartition(this$static, transactionImpacts){
  this$static.repartition = transactionImpacts;
}

function $setSimpleRepartition(this$static, b){
  this$static.simpleRepartition = b;
}

function $setTransactionType(this$static, t){
  this$static.transactionType = t;
}

function Transaction(){
  $$init_2(this);
  this.transactionComments = new ArrayList;
  this.repartition = new ArrayList;
}

function Transaction_0(id_0, name_0, payedBy, amount, currency, paymentDate, addedDate, uniqueIdentifier, type_0){
  $$init_2(this);
  this.id_0 = id_0;
  this.name_0 = name_0;
  this.payedBy = payedBy;
  this.amount = amount;
  this.currency = currency;
  this.paymentDate = paymentDate;
  this.addedDate = addedDate;
  this.lastUpdate = null;
  this.transactionComments = new ArrayList;
  this.repartition = new ArrayList;
  this.uniqueIdentifier = uniqueIdentifier;
  this.transactionType = type_0;
}

function getNewTransaction(name_0, payedBy, amount, currency, date, addedDate){
  return new Transaction_0(currentID--, name_0, payedBy, amount, currency, date, addedDate, fromString(generateUUIDString()), ($clinit_TransactionTypeEnum() , TRANSACTION_TYPE_NORMAL));
}

function roundRepartition(a){
  var toReturn;
  a < 0?(toReturn = -toDouble(fromDouble(Math.round(-a * 100))) / 100):(toReturn = toDouble(fromDouble(Math.round(a * 100))) / 100);
  return toReturn;
}

defineClass(77, 1, {68:1, 77:1, 3:1}, Transaction, Transaction_0);
_.toString$ = function toString_15(){
  return this.name_0 + ' added ';
}
;
_.amount = 0;
_.amountOfParts = 1;
_.id_0 = -1;
_.simpleRepartition = true;
_.tricountID = -1;
var currentID = -1;
var Lcom_tribab_tricount_common_client_model_Transaction_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'Transaction', 77);
function TransactionComment(){
}

function TransactionComment_0(u, comment, date, t){
  this.user = u;
  this.commentDate = date;
  this.comment = comment;
  this.transaction = t;
}

defineClass(84, 1, {186:1, 84:1, 3:1}, TransactionComment, TransactionComment_0);
_.equals$ = function equals_7(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (Lcom_tribab_tricount_common_client_model_TransactionComment_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj)) {
    return false;
  }
  other = dynamicCast(obj, 84);
  if (this.comment == null?other.comment != null:!$equals_1(this.comment, other.comment)) {
    return false;
  }
  if (this.user != other.user && (!this.user || !$equals_3(this.user.uniqueIdentifier, other.user.uniqueIdentifier))) {
    return false;
  }
  if (this.commentDate != other.commentDate && (!this.commentDate || !this.commentDate.equals$(other.commentDate))) {
    return false;
  }
  if (this.transaction != other.transaction && (!this.transaction || !$equals_3(this.transaction.uniqueIdentifier, other.transaction.uniqueIdentifier))) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_9(){
  return 3;
}
;
var Lcom_tribab_tricount_common_client_model_TransactionComment_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'TransactionComment', 84);
function deserialize_35(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_32(streamReader){
  var size_0;
  size_0 = $readInt(streamReader);
  return initDim(Lcom_tribab_tricount_common_client_model_TransactionComment_2_classLit, $intern_2, 84, size_0, 0, 1);
}

function serialize_35(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function deserialize_36(streamReader, instance){
  setComment(instance, $getString(streamReader, $readInt(streamReader)));
  setCommentDate(instance, dynamicCast($readObject(streamReader), 18));
  setTransaction(instance, dynamicCast($readObject(streamReader), 68));
  setUser(instance, dynamicCast($readObject(streamReader), 37));
}

function instantiate_33(streamReader){
  return new TransactionComment;
}

function serialize_36(streamWriter, instance){
  $writeString(streamWriter, instance.comment);
  $writeObject(streamWriter, instance.commentDate);
  $writeObject(streamWriter, instance.transaction);
  $writeObject(streamWriter, instance.user);
}

function setComment(instance, value_0){
  instance.comment = value_0;
}

function setCommentDate(instance, value_0){
  instance.commentDate = value_0;
}

function setTransaction(instance, value_0){
  instance.transaction = value_0;
}

function setUser(instance, value_0){
  instance.user = value_0;
}

function $compare_1(arg0, arg1){
  if (!arg0.addedDate && !arg1.addedDate)
    return 0;
  if (!arg0.addedDate) {
    return -1;
  }
  if (!arg1.addedDate) {
    return 1;
  }
  return arg0.addedDate.compareTo_0(arg1.addedDate);
}

function TransactionDateComparator(){
}

defineClass(527, 1, $intern_48, TransactionDateComparator);
_.compare = function compare_3(arg0, arg1){
  return $compare_1(dynamicCast(arg0, 68), dynamicCast(arg1, 68));
}
;
var singleton_2;
var Lcom_tribab_tricount_common_client_model_TransactionDateComparator_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'TransactionDateComparator', 527);
function $$init_3(this$static){
}

function TransactionImpactOnUser(){
  $$init_3(this);
}

function TransactionImpactOnUser_0(transaction, u, amountOfPart, amount){
  $$init_3(this);
  this.transaction = transaction;
  this.user = u;
  this.amountOfPart = amountOfPart;
  this.amount = amount;
}

defineClass(105, 1, {115:1, 105:1, 3:1}, TransactionImpactOnUser, TransactionImpactOnUser_0);
_.equals$ = function equals_8(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (Lcom_tribab_tricount_common_client_model_TransactionImpactOnUser_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj)) {
    return false;
  }
  other = dynamicCast(obj, 105);
  if (this.amountOfPart != other.amountOfPart) {
    return false;
  }
  if (neq(doubleToLongBits(this.amount), doubleToLongBits(other.amount))) {
    return false;
  }
  if (this.transaction != other.transaction && (!this.transaction || !$equals_3(this.transaction.uniqueIdentifier, other.transaction.uniqueIdentifier))) {
    return false;
  }
  if (this.user != other.user && (!this.user || !$equals_3(this.user.uniqueIdentifier, other.user.uniqueIdentifier))) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_10(){
  return 5;
}
;
_.toString$ = function toString_16(){
  var toReturn;
  toReturn = 'Impact : ';
  toReturn += '  User    : ' + this.user.id_0;
  toReturn += '  Amount  : ' + this.amount;
  toReturn += '  Parts   : ' + this.amountOfPart;
  return toReturn;
}
;
_.amount = -1;
_.amountOfPart = -1;
var Lcom_tribab_tricount_common_client_model_TransactionImpactOnUser_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'TransactionImpactOnUser', 105);
function deserialize_37(streamReader, instance){
  deserialize_4(streamReader, instance);
}

function instantiate_34(streamReader){
  var size_0;
  size_0 = $readInt(streamReader);
  return initDim(Lcom_tribab_tricount_common_client_model_TransactionImpactOnUser_2_classLit, $intern_2, 105, size_0, 0, 1);
}

function serialize_37(streamWriter, instance){
  serialize_4(streamWriter, instance);
}

function deserialize_38(streamReader, instance){
  setAmount(instance, $readDouble(streamReader));
  setAmountOfPart(instance, $readInt(streamReader));
  setTransaction_0(instance, dynamicCast($readObject(streamReader), 68));
  setUser_0(instance, dynamicCast($readObject(streamReader), 37));
}

function instantiate_35(streamReader){
  return new TransactionImpactOnUser;
}

function serialize_38(streamWriter, instance){
  $writeDouble(streamWriter, instance.amount);
  $writeInt(streamWriter, instance.amountOfPart);
  $writeObject(streamWriter, instance.transaction);
  $writeObject(streamWriter, instance.user);
}

function setAmount(instance, value_0){
  instance.amount = value_0;
}

function setAmountOfPart(instance, value_0){
  instance.amountOfPart = value_0;
}

function setTransaction_0(instance, value_0){
  instance.transaction = value_0;
}

function setUser_0(instance, value_0){
  instance.user = value_0;
}

function $clinit_TransactionTypeEnum(){
  $clinit_TransactionTypeEnum = emptyMethod;
  TRANSACTION_TYPE_NORMAL = new TransactionTypeEnum$1;
  TRANSACTION_TYPE_BALANCE = new TransactionTypeEnum$2;
}

function TransactionTypeEnum(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_TransactionTypeEnum();
  return initValues(getClassLiteralForArray(Lcom_tribab_tricount_common_client_model_TransactionTypeEnum_2_classLit, 1), $intern_2, 91, 0, [TRANSACTION_TYPE_NORMAL, TRANSACTION_TYPE_BALANCE]);
}

defineClass(91, 7, $intern_55);
var TRANSACTION_TYPE_BALANCE, TRANSACTION_TYPE_NORMAL;
var Lcom_tribab_tricount_common_client_model_TransactionTypeEnum_2_classLit = createForEnum('com.tribab.tricount.common.client.model', 'TransactionTypeEnum', 91, Ljava_lang_Enum_2_classLit, values_14);
function TransactionTypeEnum$1(){
  TransactionTypeEnum.call(this, 'TRANSACTION_TYPE_NORMAL', 0);
}

defineClass(504, 91, $intern_55, TransactionTypeEnum$1);
_.toString$ = function toString_17(){
  return 'NORMAL';
}
;
var Lcom_tribab_tricount_common_client_model_TransactionTypeEnum$1_2_classLit = createForEnum('com.tribab.tricount.common.client.model', 'TransactionTypeEnum/1', 504, Lcom_tribab_tricount_common_client_model_TransactionTypeEnum_2_classLit, null);
function TransactionTypeEnum$2(){
  TransactionTypeEnum.call(this, 'TRANSACTION_TYPE_BALANCE', 1);
}

defineClass(505, 91, $intern_55, TransactionTypeEnum$2);
_.toString$ = function toString_18(){
  return 'BALANCE';
}
;
var Lcom_tribab_tricount_common_client_model_TransactionTypeEnum$2_2_classLit = createForEnum('com.tribab.tricount.common.client.model', 'TransactionTypeEnum/2', 505, Lcom_tribab_tricount_common_client_model_TransactionTypeEnum_2_classLit, null);
function deserialize_39(streamReader, instance){
}

function instantiate_36(streamReader){
  var ordinal, values;
  ordinal = $readInt(streamReader);
  values = ($clinit_TransactionTypeEnum() , initValues(getClassLiteralForArray(Lcom_tribab_tricount_common_client_model_TransactionTypeEnum_2_classLit, 1), $intern_2, 91, 0, [TRANSACTION_TYPE_NORMAL, TRANSACTION_TYPE_BALANCE]));
  return values[ordinal];
}

function serialize_39(streamWriter, instance){
  $writeInt(streamWriter, instance.ordinal);
}

function deserialize_40(streamReader, instance){
  setAddedBy(instance, dynamicCast($readObject(streamReader), 37));
  setAddedDate(instance, dynamicCast($readObject(streamReader), 18));
  setAmount_0(instance, $readDouble(streamReader));
  setAmountOfParts(instance, $readDouble(streamReader));
  setCurrency(instance, $getString(streamReader, $readInt(streamReader)));
  setId_0(instance, $readInt(streamReader));
  setLastUpdate(instance, dynamicCast($readObject(streamReader), 18));
  setName(instance, $getString(streamReader, $readInt(streamReader)));
  setPayedBy(instance, dynamicCast($readObject(streamReader), 37));
  setPaymentDate(instance, dynamicCast($readObject(streamReader), 18));
  setRepartition(instance, dynamicCast($readObject(streamReader), 36));
  setSimpleRepartition(instance, $readBoolean(streamReader));
  setTransactionComments(instance, dynamicCast($readObject(streamReader), 36));
  setTransactionType(instance, dynamicCast($readObject(streamReader), 91));
  setTricountID(instance, $readInt(streamReader));
  setUniqueIdentifier(instance, dynamicCast($readObject(streamReader), 107));
}

function instantiate_37(streamReader){
  return new Transaction;
}

function serialize_40(streamWriter, instance){
  $writeObject(streamWriter, instance.addedBy);
  $writeObject(streamWriter, instance.addedDate);
  $writeDouble(streamWriter, instance.amount);
  $writeDouble(streamWriter, instance.amountOfParts);
  $writeString(streamWriter, instance.currency);
  $writeInt(streamWriter, instance.id_0);
  $writeObject(streamWriter, instance.lastUpdate);
  $writeString(streamWriter, instance.name_0);
  $writeObject(streamWriter, instance.payedBy);
  $writeObject(streamWriter, instance.paymentDate);
  $writeObject(streamWriter, instance.repartition);
  $writeBoolean(streamWriter, instance.simpleRepartition);
  $writeObject(streamWriter, instance.transactionComments);
  $writeObject(streamWriter, instance.transactionType);
  $writeInt(streamWriter, instance.tricountID);
  $writeObject(streamWriter, instance.uniqueIdentifier);
}

function setAddedBy(instance, value_0){
  instance.addedBy = value_0;
}

function setAddedDate(instance, value_0){
  instance.addedDate = value_0;
}

function setAmount_0(instance, value_0){
  instance.amount = value_0;
}

function setAmountOfParts(instance, value_0){
  instance.amountOfParts = value_0;
}

function setCurrency(instance, value_0){
  instance.currency = value_0;
}

function setId_0(instance, value_0){
  instance.id_0 = value_0;
}

function setLastUpdate(instance, value_0){
  instance.lastUpdate = value_0;
}

function setName(instance, value_0){
  instance.name_0 = value_0;
}

function setPayedBy(instance, value_0){
  instance.payedBy = value_0;
}

function setPaymentDate(instance, value_0){
  instance.paymentDate = value_0;
}

function setRepartition(instance, value_0){
  instance.repartition = value_0;
}

function setSimpleRepartition(instance, value_0){
  instance.simpleRepartition = value_0;
}

function setTransactionComments(instance, value_0){
  instance.transactionComments = value_0;
}

function setTransactionType(instance, value_0){
  instance.transactionType = value_0;
}

function setTricountID(instance, value_0){
  instance.tricountID = value_0;
}

function setUniqueIdentifier(instance, value_0){
  instance.uniqueIdentifier = value_0;
}

function $addTransaction_1(this$static, t){
  if (t.id_0 == 0 || t.id_0 == -1) {
    t.id_0 = 0;
    this$static.transactions.containsKey(valueOf_1(0))?this$static.transactions.put(valueOf_1(-this$static.transactions.size_1() - 1), t):this$static.transactions.put(valueOf_1(t.id_0), t);
  }
   else {
    this$static.transactions.put(valueOf_1(t.id_0), t);
  }
  $fire(this$static.transactionAddedListener, t);
}

function $addTransactionAddedListener(this$static, listener){
  $add_11(this$static.transactionAddedListener, listener);
}

function $addTransactionRemovedListener(this$static, listener){
  $add_11(this$static.transactionRemovedListener, listener);
}

function $addTricountModifiedListener(this$static, listener){
  $add_11(this$static.tricountModifiedListener, listener);
}

function $addUser_2(this$static, u){
  if (u.id_0 == 0 || u.id_0 == -1) {
    u.id_0 = 0;
    this$static.users.containsKey(valueOf_1(0))?this$static.users.put(valueOf_1(-this$static.users.size_1() - 1), u):this$static.users.put(valueOf_1(u.id_0), u);
  }
   else {
    this$static.users.put(valueOf_1(u.id_0), u);
  }
  $fire(this$static.userAddedListener, u);
}

function $addUserAddedListener(this$static, listener){
  $add_11(this$static.userAddedListener, listener);
}

function $addUserRemovedListener(this$static, listener){
  $add_11(this$static.userRemovedListener, listener);
}

function $canDeleteUser(this$static, u){
  var c, c$iterator, t, t$iterator, tiou, tiou$iterator;
  if (this$static.createdBy == u) {
    return false;
  }
  for (t$iterator = new AbstractList$IteratorImpl($getTransactions(this$static)); t$iterator.i < t$iterator.this$01_0.size_1();) {
    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_0(t$iterator.last = t$iterator.i++), 68));
    if (t.payedBy == u) {
      return false;
    }
    for (tiou$iterator = t.repartition.iterator(); tiou$iterator.hasNext();) {
      tiou = dynamicCast(tiou$iterator.next_0(), 115);
      if (tiou.user == u) {
        return false;
      }
    }
    for (c$iterator = t.transactionComments.iterator(); c$iterator.hasNext();) {
      c = dynamicCast(c$iterator.next_0(), 186);
      if (c.user == u) {
        return false;
      }
    }
  }
  return true;
}

function $deleteTransaction_2(this$static, t){
  this$static.transactions.remove_3(valueOf_1(t.id_0));
  $fire(this$static.transactionRemovedListener, t);
}

function $getBalanceForUser_0(this$static, u){
  var balance, balance_t, t, t$iterator, toReturn;
  balance = 0;
  for (t$iterator = new AbstractList$IteratorImpl($getTransactions(this$static)); t$iterator.i < t$iterator.this$01_0.size_1();) {
    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_0(t$iterator.last = t$iterator.i++), 68));
    balance_t = $getBalanceForUser(t, u, false, false);
    balance += balance_t;
  }
  toReturn = roundRepartition(balance);
  (toReturn <= 0?0 - toReturn:toReturn) < 0.03 && (toReturn = 0);
  return toReturn;
}

function $getTotalAmount(this$static){
  var t, t$iterator, total;
  total = 0;
  for (t$iterator = new AbstractList$IteratorImpl($getTransactions(this$static)); t$iterator.i < t$iterator.this$01_0.size_1();) {
    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_0(t$iterator.last = t$iterator.i++), 68));
    if (t.transactionType == ($clinit_TransactionTypeEnum() , TRANSACTION_TYPE_BALANCE)) {
      continue;
    }
    total += t.amount;
  }
  return roundRepartition(total);
}

function $getTotalForUser(this$static, u){
  var t, t$iterator, total;
  total = 0;
  for (t$iterator = new AbstractList$IteratorImpl($getTransactions(this$static)); t$iterator.i < t$iterator.this$01_0.size_1();) {
    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_0(t$iterator.last = t$iterator.i++), 68));
    if (t.transactionType == ($clinit_TransactionTypeEnum() , TRANSACTION_TYPE_BALANCE)) {
      continue;
    }
    total += $getBalanceForUser(t, u, true, false);
  }
  return roundRepartition(total <= 0?0 - total:total);
}

function $getTransactionFromID(this$static, id_0){
  return dynamicCast(this$static.transactions.get_1(valueOf_1(id_0)), 68);
}

function $getTransactions(this$static){
  var v;
  v = new ArrayList_0(this$static.transactions.values());
  sort_0(v, (!singleton_2 && (singleton_2 = new TransactionDateComparator) , singleton_2));
  return v;
}

function $getUserFromID(this$static, id_0){
  return dynamicCast(this$static.users.get_1(valueOf_1(id_0)), 37);
}

function $getUsers(this$static){
  var v;
  v = new ArrayList_0(this$static.users.values());
  sort_0(v, new UserComparator($useHarmonisedSorting(this$static)));
  return v;
}

function $removeUser(this$static, u){
  var ok;
  ok = $canDeleteUser(this$static, u);
  if (ok) {
    this$static.users.remove_3(valueOf_1(u.id_0));
    $fire(this$static.userRemovedListener, u);
  }
}

function $setCurrency_0(this$static, currency){
  this$static.currency = currency;
  $equals_1(currency, currency) || $fire(this$static.tricountModifiedListener, this$static);
}

function $setDescription(this$static, description){
  var oldDescription;
  oldDescription = this$static.description;
  this$static.description = description;
  (oldDescription == null || !$equals_1(oldDescription, description)) && $fire(this$static.tricountModifiedListener, this$static);
}

function $setId_0(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setName_0(this$static, name_0){
  var oldName;
  oldName = this$static.name_0;
  this$static.name_0 = name_0;
  $equals_1(name_0, oldName) || $fire(this$static.tricountModifiedListener, this$static);
}

function $setRandom(this$static, random){
  this$static.random_0 = random;
}

function $updateTransactionID(this$static, ids){
  var t;
  t = $getTransactionFromID(this$static, ids.oldID);
  this$static.transactions.remove_3(valueOf_1(ids.oldID));
  $setId(t, ids.newID);
  this$static.transactions.put(valueOf_1(ids.newID), t);
  $clinit_System();
}

function $updateUserID(this$static, ids){
  var u;
  u = $getUserFromID(this$static, ids.oldID);
  this$static.users.remove_3(valueOf_1(ids.oldID));
  $setId_1(u, ids.newID);
  this$static.users.put(valueOf_1(u.id_0), u);
  $clinit_System();
}

function $useHarmonisedSorting(this$static){
  var limit;
  if (!this$static.creationDate)
    return false;
  limit = new Date_0;
  limit.setYear(118);
  limit.setMonth_0(2);
  limit.setDate_0(1);
  limit.setHours_0(0);
  limit.setMinutes_0(0);
  limit.setSeconds_0(0);
  return $after(this$static.creationDate, limit);
}

function Tricount(){
  this.transactionAddedListener = new Event_0;
  this.transactionRemovedListener = new Event_0;
  this.userAddedListener = new Event_0;
  this.userRemovedListener = new Event_0;
  this.tricountModifiedListener = new Event_0;
  this.users = new HashMap;
  this.transactions = new HashMap;
  this.deletedTransactions = new ArrayList;
  this.deletedUsers = new ArrayList;
  this.tricountServerVersionNumber = -1;
}

defineClass(124, 1, {744:1, 124:1, 3:1}, Tricount);
_.toString$ = function toString_19(){
  var impact, impact$iterator, t, t$iterator, tc, tc$iterator, toReturn, u, u$iterator;
  toReturn = '';
  toReturn += 'Tricount : ' + this.name_0 + ' (random) ' + this.random_0 + '\n (description) ' + this.description + '\n (creationdate) ' + this.creationDate + '\n';
  for (u$iterator = new AbstractList$IteratorImpl($getUsers(this)); u$iterator.i < u$iterator.this$01_0.size_1();) {
    u = (checkCriticalElement(u$iterator.i < u$iterator.this$01_0.size_1()) , dynamicCast(u$iterator.this$01_0.get_0(u$iterator.last = u$iterator.i++), 37));
    toReturn += '  user ' + u.name_0 + ' (id) ' + u.id_0 + '\n';
  }
  for (t$iterator = new AbstractList$IteratorImpl($getTransactions(this)); t$iterator.i < t$iterator.this$01_0.size_1();) {
    t = (checkCriticalElement(t$iterator.i < t$iterator.this$01_0.size_1()) , dynamicCast(t$iterator.this$01_0.get_0(t$iterator.last = t$iterator.i++), 68));
    toReturn += '  transaction : ' + t.name_0 + ' (amount) ' + t.amount + '  (currency) ' + t.currency + ' (payedBy) ' + t.payedBy + '\n';
    for (impact$iterator = t.repartition.iterator(); impact$iterator.hasNext();) {
      impact = dynamicCast(impact$iterator.next_0(), 115);
      !impact.user && ($clinit_System() , out_0);
      toReturn += '   impact : (user) ' + impact.user.name_0 + ' (amountOfParts) ' + impact.amountOfPart + ' (hardcodedAmount) ' + impact.amount + '\n';
    }
    for (tc$iterator = t.transactionComments.iterator(); tc$iterator.hasNext();) {
      tc = dynamicCast(tc$iterator.next_0(), 186);
      toReturn += '   comment : ' + tc.comment + ' (from) ' + tc.user.name_0 + '\n';
    }
  }
  return toReturn;
}
;
_.id_0 = -1;
_.tricountServerVersionNumber = 0;
var Lcom_tribab_tricount_common_client_model_Tricount_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'Tricount', 124);
function TricountCreationEmail(emailTo, tricountName, tricountRandom, languageCode){
  this.creatorName = '';
  this.emailTo = emailTo;
  this.tricountName = tricountName;
  this.tricountRandom = tricountRandom;
  this.languageCode = languageCode;
  this.otherParticipants = new ArrayList;
}

defineClass(475, 1, $intern_15, TricountCreationEmail);
var Lcom_tribab_tricount_common_client_model_TricountCreationEmail_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'TricountCreationEmail', 475);
function serialize_41(streamWriter, instance){
  $writeString(streamWriter, instance.creatorName);
  $writeString(streamWriter, instance.emailTo);
  $writeString(streamWriter, instance.languageCode);
  $writeObject(streamWriter, instance.otherParticipants);
  $writeString(streamWriter, instance.tricountName);
  $writeString(streamWriter, instance.tricountRandom);
}

function $addErrorOccuredListener(this$static, listener){
  $add_11(this$static.errorOccured, listener);
}

function $addSuggestedFriendsReceivedListener(this$static, listener){
  $add_11(this$static.suggestedFriendsReceived, listener);
}

function $addTricountLoadedListener(this$static, listener){
  $add_11(this$static.tricountLoadedEvent, listener);
}

function $errorOccured(this$static, error){
  $fire(this$static.errorOccured, error);
}

function $setTricount_0(this$static, t){
  this$static.tricount = t;
  $fire(this$static.tricountLoadedEvent, this$static.tricount);
}

function $suggestedFriendsReceived(this$static, friends){
  $fire(this$static.suggestedFriendsReceived, friends);
}

function TricountManager(){
  this.tricountLoadedEvent = new Event_0;
  this.errorOccured = new Event_0;
  this.suggestedFriendsReceived = new Event_0;
}

defineClass(297, 1, {}, TricountManager);
var Lcom_tribab_tricount_common_client_model_TricountManager_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'TricountManager', 297);
function deserialize_41(streamReader, instance){
  setCreatedBy(instance, dynamicCast($readObject(streamReader), 37));
  setCreationDate(instance, dynamicCast($readObject(streamReader), 18));
  setCurrency_0(instance, $getString(streamReader, $readInt(streamReader)));
  setDeletedTransactions(instance, dynamicCast($readObject(streamReader), 36));
  setDeletedUsers(instance, dynamicCast($readObject(streamReader), 36));
  setDescription(instance, $getString(streamReader, $readInt(streamReader)));
  setId_1(instance, $readInt(streamReader));
  setLastAccess(instance, dynamicCast($readObject(streamReader), 18));
  setLastUpdate_0(instance, dynamicCast($readObject(streamReader), 18));
  setName_0(instance, $getString(streamReader, $readInt(streamReader)));
  setRandom(instance, $getString(streamReader, $readInt(streamReader)));
  setTransactions(instance, dynamicCast($readObject(streamReader), 58));
  setTricountServerVersionNumber(instance, $readInt(streamReader));
  setUniqueIdentifier_0(instance, dynamicCast($readObject(streamReader), 107));
  setUsers(instance, dynamicCast($readObject(streamReader), 58));
}

function instantiate_38(streamReader){
  return new Tricount;
}

function serialize_42(streamWriter, instance){
  $writeObject(streamWriter, instance.createdBy);
  $writeObject(streamWriter, instance.creationDate);
  $writeString(streamWriter, instance.currency);
  $writeObject(streamWriter, instance.deletedTransactions);
  $writeObject(streamWriter, instance.deletedUsers);
  $writeString(streamWriter, instance.description);
  $writeInt(streamWriter, instance.id_0);
  $writeObject(streamWriter, instance.lastAccess);
  $writeObject(streamWriter, instance.lastUpdate);
  $writeString(streamWriter, instance.name_0);
  $writeString(streamWriter, instance.random_0);
  $writeObject(streamWriter, instance.transactions);
  $writeInt(streamWriter, instance.tricountServerVersionNumber);
  $writeObject(streamWriter, instance.uniqueIdentifier);
  $writeObject(streamWriter, instance.users);
}

function setCreatedBy(instance, value_0){
  instance.createdBy = value_0;
}

function setCreationDate(instance, value_0){
  instance.creationDate = value_0;
}

function setCurrency_0(instance, value_0){
  instance.currency = value_0;
}

function setDeletedTransactions(instance, value_0){
  instance.deletedTransactions = value_0;
}

function setDeletedUsers(instance, value_0){
  instance.deletedUsers = value_0;
}

function setDescription(instance, value_0){
  instance.description = value_0;
}

function setId_1(instance, value_0){
  instance.id_0 = value_0;
}

function setLastAccess(instance, value_0){
  instance.lastAccess = value_0;
}

function setLastUpdate_0(instance, value_0){
  instance.lastUpdate = value_0;
}

function setName_0(instance, value_0){
  instance.name_0 = value_0;
}

function setRandom(instance, value_0){
  instance.random_0 = value_0;
}

function setTransactions(instance, value_0){
  instance.transactions = value_0;
}

function setTricountServerVersionNumber(instance, value_0){
  instance.tricountServerVersionNumber = value_0;
}

function setUniqueIdentifier_0(instance, value_0){
  instance.uniqueIdentifier = value_0;
}

function setUsers(instance, value_0){
  instance.users = value_0;
}

function $$init_4(this$static){
  this$static.userUpdatedListener = new Event_0;
}

function $addUserUpdatedListener(this$static, listener){
  $add_11(this$static.userUpdatedListener, listener);
}

function $setFacebookID(this$static, l){
  if (neq(this$static.facebookid, l)) {
    this$static.facebookid = l;
    $fire(this$static.userUpdatedListener, this$static);
  }
}

function $setId_1(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setName_1(this$static, name_0){
  var oldName;
  oldName = this$static.name_0;
  this$static.name_0 = name_0;
  $equals_1(this$static.name_0, oldName) || $fire(this$static.userUpdatedListener, this$static);
}

function User(){
  $$init_4(this);
  this.tricountId = -1;
}

function User_0(name_0){
  $$init_4(this);
  this.id_0 = -1;
  this.name_0 = name_0;
  this.uniqueIdentifier = fromString(generateUUIDString());
  this.tricountId = -1;
}

defineClass(51, 1, {37:1, 51:1, 3:1}, User, User_0);
_.toString$ = function toString_20(){
  return this.name_0;
}
;
_.facebookid = {l:$intern_20, m:$intern_20, h:$intern_21};
_.id_0 = -1;
_.tricountId = 0;
var Lcom_tribab_tricount_common_client_model_User_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'User', 51);
function $compare_2(this$static, o1, o2){
  var comp;
  comp = new ParticipantNameComparator(this$static.harmonise);
  return $compare_0(comp, o1.name_0, o2.name_0);
}

function UserComparator(h){
  this.harmonise = h;
}

defineClass(173, 1, $intern_48, UserComparator);
_.compare = function compare_4(o1, o2){
  return $compare_2(this, dynamicCast(o1, 37), dynamicCast(o2, 37));
}
;
_.harmonise = false;
var Lcom_tribab_tricount_common_client_model_UserComparator_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'UserComparator', 173);
function deserialize_42(streamReader, instance){
  setEmail(instance, $getString(streamReader, $readInt(streamReader)));
  setFacebookid(instance, $readLong(streamReader));
  setId_2(instance, $readInt(streamReader));
  setLastUpdate_1(instance, dynamicCast($readObject(streamReader), 18));
  setName_1(instance, $getString(streamReader, $readInt(streamReader)));
  setPhoneNumber(instance, $getString(streamReader, $readInt(streamReader)));
  setTricountId(instance, $readInt(streamReader));
  setUniqueIdentifier_1(instance, dynamicCast($readObject(streamReader), 107));
}

function instantiate_39(streamReader){
  return new User;
}

function serialize_43(streamWriter, instance){
  $writeString(streamWriter, instance.email);
  $append(streamWriter, toBase64(instance.facebookid));
  $writeInt(streamWriter, instance.id_0);
  $writeObject(streamWriter, instance.lastUpdate);
  $writeString(streamWriter, instance.name_0);
  $writeString(streamWriter, instance.phoneNumber);
  $writeInt(streamWriter, instance.tricountId);
  $writeObject(streamWriter, instance.uniqueIdentifier);
}

function setEmail(instance, value_0){
  instance.email = value_0;
}

function setFacebookid(instance, value_0){
  instance.facebookid = value_0;
}

function setId_2(instance, value_0){
  instance.id_0 = value_0;
}

function setLastUpdate_1(instance, value_0){
  instance.lastUpdate = value_0;
}

function setName_1(instance, value_0){
  instance.name_0 = value_0;
}

function setPhoneNumber(instance, value_0){
  instance.phoneNumber = value_0;
}

function setTricountId(instance, value_0){
  instance.tricountId = value_0;
}

function setUniqueIdentifier_1(instance, value_0){
  instance.uniqueIdentifier = value_0;
}

function AlgoTransaction(f, t, a){
  this.from = f;
  this.to = t;
  this.amount = a;
}

defineClass(78, 1, {78:1, 8:1}, AlgoTransaction);
_.compareTo = function compareTo_2(o){
  if (!instanceOf(o, 78))
    return -1;
  if (o == null)
    return 1;
  return compareTo_11(this.from, dynamicCast(o, 78).from);
}
;
_.toString$ = function toString_21(){
  return this.from + ' to ' + this.to + ' : ' + this.amount;
}
;
_.amount = 0;
var Lcom_tribab_tricount_common_client_repalgo_AlgoTransaction_2_classLit = createForClass('com.tribab.tricount.common.client.repalgo', 'AlgoTransaction', 78);
function $addPeople(this$static, name_0, somme){
  ++this$static.initialAmountOfPeople;
  if ((somme < 0?-somme:somme) < 1)
    return;
  $add_13(this$static.names, name_0);
  $add_13(this$static.amounts, valueOf_1(somme));
}

function $findSubset(this$static, subsetOfSize, tableOfSize, cond){
  var i, i0, toAdd, toReturn;
  toReturn = new Vector;
  this$static.subsetSize = subsetOfSize;
  this$static.tableSize = tableOfSize;
  this$static.subset = initDim(I_classLit, $intern_17, 0, subsetOfSize, 7, 1);
  for (i0 = 0; i0 < subsetOfSize; i0++) {
    this$static.subset[i0] = i0 + 1;
  }
  do {
    if (!cond || cond.isFine(this$static.subset)) {
      toAdd = initDim(I_classLit, $intern_17, 0, this$static.subset.length, 7, 1);
      for (i = 0; i < this$static.subset.length; i++) {
        toAdd[i] = this$static.subset[i];
      }
      $add_5(toReturn.arrayList, toAdd);
    }
  }
   while ($increment(this$static));
  return toReturn;
}

function $getSolutions(this$static){
  var at, at$iterator, toReturn;
  toReturn = new Vector;
  for (at$iterator = new AbstractList$IteratorImpl(this$static.solution.arrayList); at$iterator.i < at$iterator.this$01_0.size_1();) {
    at = (checkCriticalElement(at$iterator.i < at$iterator.this$01_0.size_1()) , dynamicCast(at$iterator.this$01_0.get_0(at$iterator.last = at$iterator.i++), 78));
    if (at.amount <= 2) {
      continue;
    }
     else {
      $add_5(toReturn.arrayList, at);
    }
  }
  return toReturn;
}

function $increment(this$static){
  var i, incrementIndex;
  incrementIndex = this$static.subsetSize - 1;
  while (this$static.subset[incrementIndex] > this$static.tableSize - (this$static.subsetSize - incrementIndex)) {
    if (incrementIndex - 1 < 0)
      return false;
    --incrementIndex;
  }
  ++this$static.subset[incrementIndex];
  for (i = incrementIndex + 1; i < this$static.subsetSize; i++) {
    this$static.subset[i] = this$static.subset[i - 1] + 1;
  }
  return true;
}

function $resolveCircle(this$static, circle){
  var amount1, amount2, amountToPay, i, i2, transaction;
  $clinit_System();
  'resolving circle of size ' + circle.length + ' : ' + printTable(circle);
  ' indirection is ' + printTable(this$static.indirection);
  for (i = 0; i < circle.length; i++) {
    for (i2 = 0; i2 < circle.length; i2++) {
      amount1 = this$static.balances[this$static.indirection[circle[i] - 1] - 1];
      if (amount1 >= 0)
        break;
      amount2 = this$static.balances[this$static.indirection[circle[i2] - 1] - 1];
      if (amount2 <= 0)
        continue;
      if (amount1 + amount2 < 0) {
        this$static.balances[this$static.indirection[circle[i2] - 1] - 1] -= amount2;
        this$static.balances[this$static.indirection[circle[i] - 1] - 1] += amount2;
        transaction = new AlgoTransaction(dynamicCastToString($elementAt(this$static.names, this$static.indirection[circle[i] - 1] - 1)), dynamicCastToString($elementAt(this$static.names, this$static.indirection[circle[i2] - 1] - 1)), amount2);
        $add_13(this$static.solution, transaction);
        continue;
      }
       else {
        amountToPay = -amount1;
        this$static.balances[this$static.indirection[circle[i2] - 1] - 1] -= amountToPay;
        this$static.balances[this$static.indirection[circle[i] - 1] - 1] += amountToPay;
        transaction = new AlgoTransaction(dynamicCastToString($elementAt(this$static.names, this$static.indirection[circle[i] - 1] - 1)), dynamicCastToString($elementAt(this$static.names, this$static.indirection[circle[i2] - 1] - 1)), amountToPay);
        $add_13(this$static.solution, transaction);
        break;
      }
    }
  }
}

function $run(this$static){
  var a, a$array, a$index, a$max, amountOfPeople, amountOfPeopleResolved, circle, cond, cond2, currentIndex, i, i0, i1, i2, i3, i4, i5, ia, indirection2, indirectionIndex, lastChance, localBalances, nonIntersectingSubset, nonIntersectingSubsets, ss, ss$iterator, startOptimisationAt, subsets, sumCheck, table;
  if (this$static.names.arrayList.array.length == 0)
    return;
  this$static.balances = initDim(I_classLit, $intern_17, 0, this$static.amounts.arrayList.array.length, 7, 1);
  this$static.indirection = initDim(I_classLit, $intern_17, 0, this$static.balances.length, 7, 1);
  amountOfPeople = this$static.balances.length;
  indirectionIndex = 0;
  for (i0 = 0; i0 < this$static.amounts.arrayList.array.length; i0++) {
    this$static.balances[i0] = dynamicCast($elementAt(this$static.amounts, i0), 44).value_0;
    this$static.indirection[indirectionIndex++] = i0 + 1;
  }
  $clinit_System();
  'balances : ' + printTable(this$static.balances);
  'indirection : ' + printTable(this$static.indirection);
  sumCheck = 0;
  for (a$array = this$static.balances , a$index = 0 , a$max = a$array.length; a$index < a$max; ++a$index) {
    a = a$array[a$index];
    sumCheck += a;
  }
  startOptimisationAt = 2;
  if (this$static.initialAmountOfPeople > 10) {
    startOptimisationAt = amountOfPeople;
  }
   else {
  }
  for (i1 = startOptimisationAt; i1 < amountOfPeople + 1; i1++) {
    if (i1 > this$static.indirection.length)
      break;
    localBalances = initDim(I_classLit, $intern_17, 0, this$static.indirection.length, 7, 1);
    for (ia = 0; ia < this$static.indirection.length; ia++) {
      localBalances[ia] = this$static.balances[this$static.indirection[ia] - 1];
    }
    lastChance = false;
    if (i1 == this$static.indirection.length) {
      'Last chance indirection: ' + printTable(this$static.indirection);
      lastChance = true;
    }
    cond = new SumIsZeroCondition(localBalances);
    lastChance && (cond = null);
    subsets = $findSubset(this$static, i1, localBalances.length, cond);
    for (ss$iterator = new AbstractList$IteratorImpl(subsets.arrayList); ss$iterator.i < ss$iterator.this$01_0.size_1();) {
      ss = (checkCriticalElement(ss$iterator.i < ss$iterator.this$01_0.size_1()) , dynamicCast(ss$iterator.this$01_0.get_0(ss$iterator.last = ss$iterator.i++), 60));
      '   ' + printTable(ss);
    }
    if (subsets.arrayList.array.length == 0) {
      continue;
    }
    nonIntersectingSubsets = null;
    for (i2 = subsets.arrayList.array.length; i2 > 0; i2--) {
      if (i2 > Math.ceil(amountOfPeople / i1)) {
        continue;
      }
      cond2 = new NoIntersectionCondition(subsets);
      nonIntersectingSubsets = $findSubset(this$static, i2, subsets.arrayList.array.length, cond2);
      if (nonIntersectingSubsets.arrayList.array.length != 0)
        break;
    }
    nonIntersectingSubset = (checkArrayElementIndex(0, nonIntersectingSubsets.arrayList.array.length) , dynamicCast($get_0(nonIntersectingSubsets.arrayList, 0), 60));
    amountOfPeopleResolved = 0;
    for (i3 = 0; i3 < nonIntersectingSubset.length; i3++) {
      circle = dynamicCast($elementAt(subsets, nonIntersectingSubset[i3] - 1), 60);
      $resolveCircle(this$static, circle);
      for (i4 = 0; i4 < circle.length; i4++) {
        this$static.indirection[circle[i4] - 1] = 0;
        ++amountOfPeopleResolved;
      }
    }
    indirection2 = initDim(I_classLit, $intern_17, 0, this$static.indirection.length - amountOfPeopleResolved, 7, 1);
    currentIndex = 0;
    for (i5 = 0; i5 < this$static.indirection.length; i5++) {
      this$static.indirection[i5] != 0 && (indirection2[currentIndex++] = this$static.indirection[i5]);
    }
    this$static.indirection = indirection2;
    if (this$static.indirection.length == 0)
      break;
  }
  if (this$static.indirection.length != 0) {
    table = initDim(I_classLit, $intern_17, 0, this$static.indirection.length, 7, 1);
    for (i = 0; i < this$static.indirection.length; i++) {
      table[i] = i + 1;
    }
    $resolveCircle(this$static, table);
  }
}

function CircleDetectionAlgo(){
  this.names = new Vector;
  this.amounts = new Vector;
  this.solution = new Vector;
}

function printTable(table){
  var i, i$index, i$max, toReturn;
  toReturn = '[';
  for (i$index = 0 , i$max = table.length; i$index < i$max; ++i$index) {
    i = table[i$index];
    toReturn += '' + i + ',';
  }
  toReturn += ']';
  return toReturn;
}

defineClass(593, 1, {}, CircleDetectionAlgo);
_.initialAmountOfPeople = 0;
_.subset = null;
_.subsetSize = 0;
_.tableSize = 0;
var Lcom_tribab_tricount_common_client_repalgo_circles_CircleDetectionAlgo_2_classLit = createForClass('com.tribab.tricount.common.client.repalgo.circles', 'CircleDetectionAlgo', 593);
function NoIntersectionCondition(sets){
  this.sets = sets;
}

defineClass(633, 1, {}, NoIntersectionCondition);
_.isFine = function isFine(subset){
  var allItems, i, i2, integElement, seti;
  allItems = new Vector;
  for (i = 0; i < subset.length; i++) {
    seti = dynamicCast($elementAt(this.sets, subset[i] - 1), 60);
    for (i2 = 0; i2 < seti.length; i2++) {
      integElement = new Integer(seti[i2]);
      if ($indexOf_0(allItems.arrayList, integElement, 0) != -1) {
        return false;
      }
      $add_5(allItems.arrayList, integElement);
    }
  }
  return true;
}
;
var Lcom_tribab_tricount_common_client_repalgo_circles_NoIntersectionCondition_2_classLit = createForClass('com.tribab.tricount.common.client.repalgo.circles', 'NoIntersectionCondition', 633);
function SumIsZeroCondition(balances){
  $clinit_System();
  'SumIsZeroCondition initiated with : ' + printTable(balances);
  this.balances = balances;
}

defineClass(632, 1, {}, SumIsZeroCondition);
_.isFine = function isFine_0(subset){
  var i, subsetSize, sum;
  subsetSize = subset.length;
  sum = 0;
  for (i = 0; i < subsetSize; i++) {
    sum += this.balances[subset[i] - 1];
  }
  if ((sum < 0?-sum:sum) == 0) {
    $clinit_System();
    'found subset of size ' + subsetSize + ' with a null balance :' + printTable(subset) + ' sum is ' + sum;
    return true;
  }
  return false;
}
;
var Lcom_tribab_tricount_common_client_repalgo_circles_SumIsZeroCondition_2_classLit = createForClass('com.tribab.tricount.common.client.repalgo.circles', 'SumIsZeroCondition', 632);
function $add_11(this$static, list){
  $indexOf_0(this$static.listeners, list, 0) != -1 || $add_5(this$static.listeners, list);
}

function $fire(this$static, object){
  var l, l$iterator;
  for (l$iterator = new AbstractList$IteratorImpl(this$static.listeners); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_0(l$iterator.last = l$iterator.i++), 35));
    l.onEvent(object);
  }
}

function Event_0(){
  this.listeners = new ArrayList;
}

defineClass(64, 1, {}, Event_0);
var Lcom_tribab_tricount_common_event_Event_2_classLit = createForClass('com.tribab.tricount.common.event', 'Event', 64);
defineClass(716, 1, {});
var Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 716);
defineClass(717, 716, {});
var Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 717);
function PrintStream(){
}

defineClass(320, 717, {}, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 320);
function $charAt(this$static, index_0){
  return $charAt_0(this$static.string, index_0);
}

function $replace0(this$static, start_0, end, toInsert){
  this$static.string = $substring_0(this$static.string, 0, start_0) + toInsert + $substring(this$static.string, end);
}

function $setCharAt(this$static, index_0, x_0){
  $replace0(this$static, index_0, index_0 + 1, valueOf_4(x_0));
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(144, 1, {});
_.toString$ = function toString_22(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 144);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(272, 33, $intern_4, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 272);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(40, 33, $intern_4, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 40);
function ArrayIndexOutOfBoundsException(){
  IndexOutOfBoundsException.call(this);
}

defineClass(533, 40, $intern_4, ArrayIndexOutOfBoundsException);
var Ljava_lang_ArrayIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'ArrayIndexOutOfBoundsException', 533);
function ArrayStoreException(){
  RuntimeException.call(this);
}

function ArrayStoreException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(130, 33, $intern_4, ArrayStoreException, ArrayStoreException_0);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 130);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE_1 = new Boolean_0(false);
  TRUE_1 = new Boolean_0(true);
}

function $compareTo_0(this$static, b){
  return compare_5(this$static.value_0, b.value_0);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

function compare_5(x_0, y_0){
  return x_0 == y_0?0:x_0?1:-1;
}

defineClass(118, 1, {3:1, 118:1, 8:1}, Boolean_0);
_.compareTo = function compareTo_3(b){
  return $compareTo_0(this, dynamicCast(b, 118));
}
;
_.equals$ = function equals_9(o){
  return instanceOf(o, 118) && dynamicCast(o, 118).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_11(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_23(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE_1, TRUE_1;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 118);
function __parseAndValidateDouble(s){
  var floatRegex;
  if (!(floatRegex = floatRegex_0 , !floatRegex && (floatRegex = floatRegex_0 = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/) , floatRegex.test(s))) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return parseFloat(s);
}

function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit_0(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_19;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

function __parseAndValidateLong(s){
  var c, firstTime, head, i, length_0, maxDigits, minValue, negative, orig, radixPower, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  orig = s;
  length_0 = s.length;
  negative = false;
  if (length_0 > 0) {
    c = s.charCodeAt(0);
    if (c == 45 || c == 43) {
      s = __substr(s, 1, s.length - 1);
      --length_0;
      negative = c == 45;
    }
  }
  if (length_0 == 0) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  while (s.length > 0 && s.charCodeAt(0) == 48) {
    s = __substr(s, 1, s.length - 1);
    --length_0;
  }
  if (length_0 > ($clinit_Number$__ParseLong() , maxLengthForRadix)[10]) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  for (i = 0; i < length_0; i++) {
    if (digit_0(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  toReturn = {l:0, m:0, h:0};
  maxDigits = maxDigitsForRadix[10];
  radixPower = fromInt(maxDigitsRadixPower[10]);
  minValue = neg(maxValueForRadix[10]);
  firstTime = true;
  head = length_0 % maxDigits;
  if (head > 0) {
    toReturn = fromInt(-__parseInt(s.substr(0, head), 10));
    s = __substr(s, head, s.length - head);
    length_0 -= head;
    firstTime = false;
  }
  while (length_0 >= maxDigits) {
    head = __parseInt(s.substr(0, maxDigits), 10);
    s = __substr(s, maxDigits, s.length - maxDigits);
    length_0 -= maxDigits;
    if (firstTime) {
      firstTime = false;
    }
     else {
      if (lt(toReturn, minValue)) {
        throw new NumberFormatException('For input string: "' + orig + '"');
      }
      toReturn = mul(toReturn, radixPower);
    }
    toReturn = sub_0(toReturn, fromInt(head));
  }
  if (gt(toReturn, {l:0, m:0, h:0})) {
    throw new NumberFormatException('For input string: "' + orig + '"');
  }
  if (!negative) {
    toReturn = neg(toReturn);
    if (lt(toReturn, {l:0, m:0, h:0})) {
      throw new NumberFormatException('For input string: "' + orig + '"');
    }
  }
  return toReturn;
}

function __parseInt(s, radix){
  return parseInt(s, radix);
}

defineClass(95, 1, {3:1, 95:1});
var floatRegex_0;
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 95);
function $compareTo_1(this$static, b){
  return this$static.value_0 - b.value_0;
}

function Byte(value_0){
  this.value_0 = value_0;
}

function valueOf(b){
  var rebase, result;
  rebase = b + 128;
  result = ($clinit_Byte$BoxedValues() , boxedValues_0)[rebase];
  !result && (result = boxedValues_0[rebase] = new Byte(b));
  return result;
}

defineClass(119, 95, {3:1, 119:1, 8:1, 95:1}, Byte);
_.compareTo = function compareTo_4(b){
  return $compareTo_1(this, dynamicCast(b, 119));
}
;
_.equals$ = function equals_10(o){
  return instanceOf(o, 119) && dynamicCast(o, 119).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_12(){
  return this.value_0;
}
;
_.toString$ = function toString_24(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 119);
function $clinit_Byte$BoxedValues(){
  $clinit_Byte$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Byte_2_classLit, $intern_2, 119, 256, 0, 1);
}

var boxedValues_0;
function $compareTo_2(this$static, c){
  return this$static.value_0 - c.value_0;
}

function Character(value_0){
  this.value_0 = value_0;
}

function digit_0(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function valueOf_0(c){
  var result;
  if (c < 128) {
    result = ($clinit_Character$BoxedValues() , boxedValues_1)[c];
    !result && (result = boxedValues_1[c] = new Character(c));
    return result;
  }
  return new Character(c);
}

defineClass(96, 1, {3:1, 96:1, 8:1}, Character);
_.compareTo = function compareTo_5(c){
  return $compareTo_2(this, dynamicCast(c, 96));
}
;
_.equals$ = function equals_11(o){
  return instanceOf(o, 96) && dynamicCast(o, 96).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_13(){
  return this.value_0;
}
;
_.toString$ = function toString_25(){
  return valueOf_4(this.value_0);
}
;
_.value_0 = 0;
var Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 96);
function $clinit_Character$BoxedValues(){
  $clinit_Character$BoxedValues = emptyMethod;
  boxedValues_1 = initDim(Ljava_lang_Character_2_classLit, $intern_2, 96, 128, 0, 1);
}

var boxedValues_1;
function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(116, 33, $intern_4, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 116);
function $clinit_Double(){
  $clinit_Double = emptyMethod;
  powers = initValues(getClassLiteralForArray(D_classLit, 1), $intern_15, 0, 7, [1.3407807929942597E154, 1.157920892373162E77, 3.4028236692093846E38, 1.8446744073709552E19, 4294967296, $intern_29, 256, 16, 4, 2]);
  invPowers = initValues(getClassLiteralForArray(D_classLit, 1), $intern_15, 0, 7, [7.458340731200207E-155, 8.636168555094445E-78, 2.9387358770557188E-39, 5.421010862427522E-20, 2.3283064365386963E-10, 1.52587890625E-5, 0.00390625, 0.0625, 0.25, 0.5]);
}

function $compareTo_3(this$static, b){
  return compare_6(this$static.value_0, b.value_0);
}

function Double(value_0){
  $clinit_Double();
  this.value_0 = value_0;
}

function Double_0(s){
  $clinit_Double();
  this.value_0 = __parseAndValidateDouble(s);
}

function compare_6(x_0, y_0){
  $clinit_Double();
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return 0;
  }
  return isNaN_0(x_0)?isNaN_0(y_0)?0:1:-1;
}

function doubleToLongBits(value_0){
  $clinit_Double();
  var bit, exp_0, i, ihi, ilo, negative;
  if (isNaN_0(value_0)) {
    return {l:0, m:0, h:524160};
  }
  negative = false;
  if (value_0 == 0) {
    return 1 / value_0 == -Infinity?{l:0, m:0, h:$intern_22}:{l:0, m:0, h:0};
  }
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  if (isInfinite(value_0)) {
    return negative?{l:0, m:0, h:1048320}:{l:0, m:0, h:524032};
  }
  exp_0 = 0;
  if (value_0 < 1) {
    bit = 512;
    for (i = 0; i < 10; ++i , bit >>= 1) {
      if (value_0 < invPowers[i] && exp_0 - bit >= -1023) {
        value_0 *= powers[i];
        exp_0 -= bit;
      }
    }
    if (value_0 < 1 && exp_0 - 1 >= -1023) {
      value_0 *= 2;
      --exp_0;
    }
  }
   else if (value_0 >= 2) {
    bit = 512;
    for (i = 0; i < 10; ++i , bit >>= 1) {
      if (value_0 >= powers[i]) {
        value_0 *= invPowers[i];
        exp_0 += bit;
      }
    }
  }
  exp_0 > -1023?(value_0 -= 1):(value_0 *= 0.5);
  ihi = fromDouble(value_0 * $intern_30);
  value_0 -= toDouble(ihi) * 9.5367431640625E-7;
  ilo = fromDouble(value_0 * 4503599627370496);
  ihi = or(ihi, fromInt(exp_0 + 1023 << 20));
  negative && (ihi = or(ihi, {l:0, m:512, h:0}));
  return or(shl(ihi, 32), ilo);
}

function isInfinite(x_0){
  $clinit_Double();
  return !isFinite(x_0) && !isNaN(x_0);
}

function isNaN_0(x_0){
  $clinit_Double();
  return isNaN(x_0);
}

defineClass(61, 95, {3:1, 8:1, 61:1, 95:1}, Double, Double_0);
_.compareTo = function compareTo_6(b){
  return $compareTo_3(this, dynamicCast(b, 61));
}
;
_.equals$ = function equals_12(o){
  return instanceOf(o, 61) && dynamicCast(o, 61).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_14(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_27(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var invPowers, powers;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 61);
function $compareTo_4(this$static, b){
  return compare_6(this$static.value_0, b.value_0);
}

function Float(value_0){
  this.value_0 = value_0;
}

defineClass(131, 95, {3:1, 8:1, 131:1, 95:1}, Float);
_.compareTo = function compareTo_7(b){
  return $compareTo_4(this, dynamicCast(b, 131));
}
;
_.equals$ = function equals_13(o){
  return instanceOf(o, 131) && dynamicCast(o, 131).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_15(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_28(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 131);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(23, 33, {3:1, 22:1, 23:1, 19:1}, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 23);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(57, 33, $intern_4, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 57);
function $compareTo_5(this$static, b){
  return compare_7(this$static.value_0, b.value_0);
}

function Integer(value_0){
  this.value_0 = value_0;
}

function compare_7(x_0, y_0){
  return x_0 < y_0?-1:x_0 > y_0?1:0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function toUnsignedRadixString(value_0, radix){
  return (value_0 >>> 0).toString(radix);
}

function valueOf_1(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_2)[rebase];
    !result && (result = boxedValues_2[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(44, 95, {3:1, 8:1, 44:1, 95:1}, Integer);
_.compareTo = function compareTo_8(b){
  return $compareTo_5(this, dynamicCast(b, 44));
}
;
_.equals$ = function equals_14(o){
  return instanceOf(o, 44) && dynamicCast(o, 44).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_16(){
  return this.value_0;
}
;
_.toString$ = function toString_29(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 44);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_2 = initDim(Ljava_lang_Integer_2_classLit, $intern_2, 44, 256, 0, 1);
}

var boxedValues_2;
function $compareTo_6(this$static, b){
  return compare_8(this$static.value_0, b.value_0);
}

function $equals_0(this$static, o){
  return instanceOf(o, 97) && eq(dynamicCast(o, 97).value_0, this$static.value_0);
}

function Long(value_0){
  this.value_0 = value_0;
}

function compare_8(x_0, y_0){
  return lt(x_0, y_0)?-1:gt(x_0, y_0)?1:0;
}

function valueOf_2(i){
  var rebase, result;
  if (gt(i, {l:4194175, m:$intern_20, h:$intern_21}) && lt(i, {l:128, m:0, h:0})) {
    rebase = toInt(i) + 128;
    result = ($clinit_Long$BoxedValues() , boxedValues_3)[rebase];
    !result && (result = boxedValues_3[rebase] = new Long(i));
    return result;
  }
  return new Long(i);
}

defineClass(97, 95, {3:1, 8:1, 97:1, 95:1}, Long);
_.compareTo = function compareTo_9(b){
  return $compareTo_6(this, dynamicCast(b, 97));
}
;
_.equals$ = function equals_15(o){
  return $equals_0(this, o);
}
;
_.hashCode$ = function hashCode_17(){
  return toInt(this.value_0);
}
;
_.toString$ = function toString_30(){
  return '' + toString_7(this.value_0);
}
;
_.value_0 = {l:0, m:0, h:0};
var Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 97);
function $clinit_Long$BoxedValues(){
  $clinit_Long$BoxedValues = emptyMethod;
  boxedValues_3 = initDim(Ljava_lang_Long_2_classLit, $intern_2, 97, 256, 0, 1);
}

var boxedValues_3;
function abs_1(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function max_0(y_0){
  return 5 > y_0?5:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function pow_0(x_0, exp_0){
  return Math.pow(x_0, exp_0);
}

function round0(x_0){
  return Math.round(x_0);
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(73, 33, $intern_4, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 73);
function $clinit_Number$__ParseLong(){
  $clinit_Number$__ParseLong = emptyMethod;
  var i;
  maxDigitsForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_17, 0, 7, [-1, -1, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
  maxDigitsRadixPower = initDim(I_classLit, $intern_17, 0, 37, 7, 1);
  maxLengthForRadix = initValues(getClassLiteralForArray(I_classLit, 1), $intern_17, 0, 7, [-1, -1, 63, 40, 32, 28, 25, 23, 21, 20, 19, 19, 18, 18, 17, 17, 16, 16, 16, 15, 15, 15, 15, 14, 14, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 13, 13]);
  maxValueForRadix = initDim(J_classLit, $intern_15, 0, 37, 6, 1);
  for (i = 2; i <= 36; i++) {
    maxDigitsRadixPower[i] = round_int(pow_0(i, maxDigitsForRadix[i]));
    maxValueForRadix[i] = div_0({l:$intern_20, m:$intern_20, h:524287}, fromInt(maxDigitsRadixPower[i]));
  }
}

var maxDigitsForRadix, maxDigitsRadixPower, maxLengthForRadix, maxValueForRadix;
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(54, 23, {3:1, 22:1, 23:1, 54:1, 19:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 54);
function $compareTo_7(this$static, b){
  return this$static.value_0 - b.value_0;
}

function Short(value_0){
  this.value_0 = value_0;
}

function valueOf_3(s){
  var rebase, result;
  if (s > -129 && s < 128) {
    rebase = s + 128;
    result = ($clinit_Short$BoxedValues() , boxedValues_4)[rebase];
    !result && (result = boxedValues_4[rebase] = new Short(s));
    return result;
  }
  return new Short(s);
}

defineClass(98, 95, {3:1, 8:1, 95:1, 98:1}, Short);
_.compareTo = function compareTo_10(b){
  return $compareTo_7(this, dynamicCast(b, 98));
}
;
_.equals$ = function equals_16(o){
  return instanceOf(o, 98) && dynamicCast(o, 98).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_18(){
  return this.value_0;
}
;
_.toString$ = function toString_31(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 98);
function $clinit_Short$BoxedValues(){
  $clinit_Short$BoxedValues = emptyMethod;
  boxedValues_4 = initDim(Ljava_lang_Short_2_classLit, $intern_2, 98, 256, 0, 1);
}

var boxedValues_4;
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(89, 1, {3:1, 89:1}, StackTraceElement);
_.equals$ = function equals_17(other){
  var st;
  if (instanceOf(other, 89)) {
    st = dynamicCast(other, 89);
    return this.lineNumber == st.lineNumber && equals_26(this.methodName, st.methodName) && equals_26(this.className_0, st.className_0) && equals_26(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_19(){
  return hashCode_25(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [valueOf_1(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_32(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 89);
function $charAt_0(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals_1(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_2(this$static, str){
  return this$static.indexOf(str);
}

function $indexOf_3(this$static, str, startIndex){
  return this$static.indexOf(str, startIndex);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace_0(this$static, from, to){
  var hex = toUnsignedRadixString(from, 16);
  var regex = '\\u' + '0000'.substring(hex.length) + hex;
  return this$static.replace(RegExp(regex, 'g'), String.fromCharCode(to));
}

function $replace_1(this$static, from){
  var regex;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  return $replaceAll(this$static, regex, ' ');
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $startsWith(this$static, prefix){
  return $equals_1(__substr(this$static, 0, prefix.length), prefix);
}

function $startsWith_0(this$static, prefix, toffset){
  return toffset >= 0 && $equals_1(__substr(this$static, toffset, prefix.length), prefix);
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_2, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function compareTo_11(thisStr, otherStr){
  if (thisStr == otherStr) {
    return 0;
  }
  return thisStr < otherStr?-1:1;
}

function compareTo_Ljava_lang_Object__I__devirtual$(this$static, other){
  return isJavaString(this$static)?compareTo_11(this$static, dynamicCastToString(other)):this$static.compareTo(other);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_29) {
    hiSurrogate = 55296 + (codePoint - $intern_29 >> 10 & 1023) & $intern_12;
    loSurrogate = 56320 + (codePoint - $intern_29 & 1023) & $intern_12;
    return valueOf_4(hiSurrogate) + valueOf_4(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & $intern_12);
  }
}

function valueOf_4(x_0){
  return String.fromCharCode(x_0);
}

function valueOf_5(x_0){
  return __valueOf(x_0, 0, x_0.length);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key_0 = ':' + str;
  var result = front[key_0];
  if (result != null) {
    return result;
  }
  result = back_0[key_0];
  result == null && (result = compute(str));
  increment();
  return front[key_0] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(680, 144, {682:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 680);
function $append_1(this$static, x_0){
  this$static.string += charToString(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $delete(this$static, start_0, end){
  this$static.string = $substring_0(this$static.string, 0, start_0) + '' + $substring(this$static.string, end);
  return this$static;
}

function $insert_4(this$static, index_0, x_0){
  this$static.string = $substring_0(this$static.string, 0, index_0) + x_0 + $substring(this$static.string, index_0);
  return this$static;
}

function $replace_2(this$static, start_0, toInsert){
  this$static.string = $substring_0(this$static.string, 0, start_0) + toInsert + $substring(this$static.string, 9);
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(59, 144, {682:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 59);
function $clinit_System(){
  $clinit_System = emptyMethod;
  out_0 = new PrintStream;
}

function arraycopy(src_0, srcOfs, dest, destOfs, len){
  $clinit_System();
  var destComp, destEnd, destType, destlen, srcComp, srcType, srclen;
  checkNotNull_0(src_0, 'src');
  checkNotNull_0(dest, 'dest');
  srcType = getClass__Ljava_lang_Class___devirtual$(src_0);
  destType = getClass__Ljava_lang_Class___devirtual$(dest);
  checkArrayType((srcType.modifiers & 4) != 0, 'srcType is not an array');
  checkArrayType((destType.modifiers & 4) != 0, 'destType is not an array');
  srcComp = srcType.componentType;
  destComp = destType.componentType;
  checkArrayType((srcComp.modifiers & 1) != 0?srcComp == destComp:(destComp.modifiers & 1) == 0, "Array types don't match");
  srclen = src_0.length;
  destlen = dest.length;
  if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
    throw new IndexOutOfBoundsException;
  }
  if (((srcComp.modifiers & 1) == 0 || (srcComp.modifiers & 4) != 0) && srcType != destType) {
    if (maskUndefined(src_0) === maskUndefined(dest) && srcOfs < destOfs) {
      srcOfs += len;
      for (destEnd = destOfs + len; destEnd-- > destOfs;) {
        setCheck(dest, destEnd, src_0[--srcOfs]);
      }
    }
     else {
      for (destEnd = destOfs + len; destOfs < destEnd;) {
        setCheck(dest, destOfs++, src_0[srcOfs++]);
      }
    }
  }
   else
    len > 0 && nativeArraySplice(src_0, srcOfs, dest, destOfs, len, true);
}

function identityHashCode(o){
  $clinit_System();
  return o == null?0:isJavaString(o)?getHashCode_0(o):getHashCode(o);
}

var out_0;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(102, 33, $intern_4, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 102);
function Date_4(date){
  Date_2.call(this, date);
}

defineClass(476, 18, $intern_18, Date_4);
_.getHours_0 = function getHours_0(){
  throw new IllegalArgumentException;
}
;
_.getMinutes_0 = function getMinutes_0(){
  throw new IllegalArgumentException;
}
;
_.getSeconds_0 = function getSeconds_0(){
  throw new IllegalArgumentException;
}
;
_.setHours_0 = function setHours_2(i){
  throw new IllegalArgumentException;
}
;
_.setMinutes_0 = function setMinutes_2(i){
  throw new IllegalArgumentException;
}
;
_.setSeconds_0 = function setSeconds_2(i){
  throw new IllegalArgumentException;
}
;
_.toString$ = function toString_33(){
  return '' + ($intern_16 + (this.jsdate.getFullYear() - $intern_16)) + '-' + padTwo(this.jsdate.getMonth() + 1) + '-' + padTwo(this.jsdate.getDate());
}
;
var Ljava_sql_Date_2_classLit = createForClass('java.sql', 'Date', 476);
function Time(time){
  Date_2.call(this, time);
}

defineClass(477, 18, $intern_18, Time);
_.getDate_0 = function getDate_0(){
  throw new IllegalArgumentException;
}
;
_.getDay_0 = function getDay_0(){
  throw new IllegalArgumentException;
}
;
_.getMonth_0 = function getMonth_0(){
  throw new IllegalArgumentException;
}
;
_.getYear = function getYear_0(){
  throw new IllegalArgumentException;
}
;
_.setDate_0 = function setDate_0(i){
  throw new IllegalArgumentException;
}
;
_.setMonth_0 = function setMonth_2(i){
  throw new IllegalArgumentException;
}
;
_.setYear = function setYear_2(i){
  throw new IllegalArgumentException;
}
;
_.toString$ = function toString_34(){
  return padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds());
}
;
var Ljava_sql_Time_2_classLit = createForClass('java.sql', 'Time', 477);
function $compareTo_8(this$static, o){
  var cmp;
  cmp = compare_8(fromDouble(this$static.jsdate.getTime()), fromDouble(o.jsdate.getTime()));
  return cmp == 0?compare_7(this$static.nanos, o.nanos):cmp;
}

function $equals_2(this$static, ts){
  return !!ts && eq(fromDouble(this$static.jsdate.getTime()), fromDouble(ts.jsdate.getTime())) && this$static.nanos == ts.nanos;
}

function $setNanos(this$static, n){
  if (n < 0 || n > 999999999) {
    throw new IllegalArgumentException_0('nanos out of range ' + n);
  }
  this$static.nanos = n;
  $setTime_0(this$static, add_1(mul(div_0(fromDouble(this$static.jsdate.getTime()), {l:1000, m:0, h:0}), {l:1000, m:0, h:0}), fromInt(~~(this$static.nanos / 1000000))));
}

function Timestamp(time){
  Date_2.call(this, time);
  this.nanos = toInt(mod(time, {l:1000, m:0, h:0})) * 1000000;
}

function padNine(value_0){
  var asString, toReturn;
  toReturn = new StringBuilder_1('000000000');
  asString = '' + value_0;
  toReturn = $replace_2(toReturn, 9 - asString.length, asString);
  return toReturn.string;
}

defineClass(106, 18, {3:1, 8:1, 106:1, 18:1}, Timestamp);
_.compareTo_0 = function compareTo_12(o){
  return instanceOf(o, 106)?$compareTo_8(this, dynamicCast(o, 106)):$compareTo_8(this, new Timestamp(o.getTime_0()));
}
;
_.equals$ = function equals_18(ts){
  return instanceOf(ts, 106) && $equals_2(this, dynamicCast(ts, 106));
}
;
_.getTime_0 = function getTime_0(){
  return fromDouble(this.jsdate.getTime());
}
;
_.hashCode$ = function hashCode_20(){
  return $hashCode(this);
}
;
_.setTime_0 = function setTime_0(time){
  $setTime(this.jsdate, toDouble(time));
  this.nanos = toInt(mod(time, {l:1000, m:0, h:0})) * 1000000;
}
;
_.toString$ = function toString_35(){
  return '' + ($intern_16 + (this.jsdate.getFullYear() - $intern_16)) + '-' + padTwo(1 + this.jsdate.getMonth()) + '-' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + '.' + padNine(this.nanos);
}
;
_.nanos = 0;
var Ljava_sql_Timestamp_2_classLit = createForClass('java.sql', 'Timestamp', 106);
function $containsEntry(this$static, entry){
  var key_0, ourValue, value_0;
  key_0 = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_1(key_0);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key_0)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key_0, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet().iterator(); iter.hasNext();) {
    entry = dynamicCast(iter.next_0(), 32);
    k = entry.getKey();
    if (maskUndefined(key_0) === maskUndefined(k) || key_0 != null && equals_Ljava_lang_Object__Z__devirtual$(key_0, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_0();
      }
      return entry;
    }
  }
  return null;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(711, 1, {58:1});
_.containsEntry = function containsEntry(entry){
  return $containsEntry(this, entry);
}
;
_.containsKey = function containsKey(key_0){
  return !!$implFindEntry(this, key_0, false);
}
;
_.containsValue = function containsValue(value_0){
  var entry, entry$iterator, v;
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 32);
    v = entry.getValue();
    if (maskUndefined(value_0) === maskUndefined(v) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, v)) {
      return true;
    }
  }
  return false;
}
;
_.equals$ = function equals_19(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 58)) {
    return false;
  }
  otherMap = dynamicCast(obj, 58);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 32);
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_2(key_0){
  return getEntryValueOrNull($implFindEntry(this, key_0, false));
}
;
_.hashCode$ = function hashCode_21(){
  return hashCode_26(this.entrySet());
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.put = function put(key_0, value_0){
  throw new UnsupportedOperationException_0('Put not supported on this map');
}
;
_.remove_3 = function remove_15(key_0){
  return getEntryValueOrNull($implFindEntry(this, key_0, true));
}
;
_.size_1 = function size_3(){
  return this.entrySet().size_1();
}
;
_.toString$ = function toString_36(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_1('{');
  comma = false;
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 32);
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_3(sb, $toString_1(this, entry.getKey()));
    sb.string += '=';
    $append_3(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
_.values = function values_15(){
  return new AbstractMap$2(this);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 711);
function $containsKey(this$static, key_0){
  return isJavaString(key_0)?$hasStringValue(this$static, key_0):!!$getEntry(this$static.hashCodeMap, key_0);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_2(this$static, key_0){
  return isJavaString(key_0)?$getStringValue(this$static, key_0):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key_0));
}

function $getStringValue(this$static, key_0){
  return key_0 == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_2(key_0);
}

function $hasStringValue(this$static, key_0){
  return key_0 == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_2(key_0) === undefined);
}

function $put_0(this$static, key_0, value_0){
  return isJavaString(key_0)?key_0 == null?$put_1(this$static.hashCodeMap, null, value_0):this$static.stringMap.put_0(key_0, value_0):$put_1(this$static.hashCodeMap, key_0, value_0);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

function AbstractHashMap(){
  $reset(this);
}

defineClass(158, 711, {58:1});
_.clear_0 = function clear_4(){
  $reset(this);
}
;
_.containsKey = function containsKey_0(key_0){
  return $containsKey(this, key_0);
}
;
_.containsValue = function containsValue_0(value_0){
  return this.stringMap.containsValue(value_0) || this.hashCodeMap.containsValue(value_0);
}
;
_.entrySet = function entrySet(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_3(key_0){
  return $get_2(this, key_0);
}
;
_.put = function put_0(key_0, value_0){
  return $put_0(this, key_0, value_0);
}
;
_.remove_3 = function remove_16(key_0){
  return isJavaString(key_0)?key_0 == null?$remove_10(this.hashCodeMap, null):this.stringMap.remove_4(key_0):$remove_10(this.hashCodeMap, key_0);
}
;
_.size_1 = function size_4(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 158);
defineClass(713, 712, $intern_56);
_.equals$ = function equals_20(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 69)) {
    return false;
  }
  other = dynamicCast(o, 69);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_22(){
  return hashCode_26(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 713);
function $contains_0(this$static, o){
  if (instanceOf(o, 32)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 32));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(190, 713, $intern_56, AbstractHashMap$EntrySet);
_.contains_0 = function contains_2(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_7(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_1 = function remove_17(entry){
  var key_0;
  if ($contains_0(this, entry)) {
    key_0 = dynamicCast(entry, 32).getKey();
    this.this$01.remove_3(key_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_5(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 190);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries_0();
  return this$static.current.hasNext();
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries_0();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(191, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_3(){
  return $hasNext(this);
}
;
_.next_0 = function next_4(){
  return checkStructuralChange(this.this$01, this) , checkCriticalElement($hasNext(this)) , this.last = this.current , dynamicCast(this.current.next_0(), 32);
}
;
_.remove_0 = function remove_18(){
  checkState(!!this.last);
  checkStructuralChange(this.this$01, this);
  this.last.remove_0();
  this.last = null;
  recordLastKnownStructure(this.this$01, this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 191);
function $next_3(this$static){
  checkCriticalElement(this$static.i < this$static.this$01_0.size_1());
  return this$static.this$01_0.get_0(this$static.last = this$static.i++);
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(16, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_4(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_5(){
  return $next_3(this);
}
;
_.remove_0 = function remove_19(){
  checkState(this.last != -1);
  this.this$01_0.remove_2(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 16);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(197, 16, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  return checkCriticalElement(this.i > 0) , this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 197);
function $iterator(this$static){
  var outerIter;
  outerIter = this$static.this$01.entrySet().iterator();
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(100, 713, $intern_56, AbstractMap$1);
_.contains_0 = function contains_3(key_0){
  return this.this$01.containsKey(key_0);
}
;
_.iterator = function iterator_8(){
  return $iterator(this);
}
;
_.remove_1 = function remove_20(key_0){
  if (this.this$01.containsKey(key_0)) {
    this.this$01.remove_3(key_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_6(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 100);
function $next_4(this$static){
  var entry;
  entry = dynamicCast(this$static.val$outerIter2.next_0(), 32);
  return entry.getKey();
}

function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(269, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_5(){
  return this.val$outerIter2.hasNext();
}
;
_.next_0 = function next_6(){
  return $next_4(this);
}
;
_.remove_0 = function remove_21(){
  this.val$outerIter2.remove_0();
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 269);
function AbstractMap$2(this$0){
  this.this$01 = this$0;
}

defineClass(270, 712, {36:1}, AbstractMap$2);
_.contains_0 = function contains_4(value_0){
  return this.this$01.containsValue(value_0);
}
;
_.iterator = function iterator_9(){
  var outerIter;
  outerIter = this.this$01.entrySet().iterator();
  return new AbstractMap$2$1(outerIter);
}
;
_.size_1 = function size_7(){
  return this.this$01.size_1();
}
;
var Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 270);
function AbstractMap$2$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(271, 1, {}, AbstractMap$2$1);
_.hasNext = function hasNext_6(){
  return this.val$outerIter2.hasNext();
}
;
_.next_0 = function next_7(){
  var entry;
  entry = dynamicCast(this.val$outerIter2.next_0(), 32);
  return entry.getValue();
}
;
_.remove_0 = function remove_22(){
  this.val$outerIter2.remove_0();
}
;
var Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 271);
function $setValue_2(this$static, value_0){
  var oldValue;
  oldValue = this$static.value_0;
  this$static.value_0 = value_0;
  return oldValue;
}

defineClass(132, 1, {132:1, 32:1});
_.equals$ = function equals_21(other){
  var entry;
  if (!instanceOf(other, 32)) {
    return false;
  }
  entry = dynamicCast(other, 32);
  return equals_26(this.key, entry.getKey()) && equals_26(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue_1(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_23(){
  return hashCode_29(this.key) ^ hashCode_29(this.value_0);
}
;
_.setValue = function setValue(value_0){
  return $setValue_2(this, value_0);
}
;
_.toString$ = function toString_37(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 132);
function AbstractMap$SimpleEntry(key_0, value_0){
  this.key = key_0;
  this.value_0 = value_0;
}

defineClass(99, 132, {132:1, 99:1, 32:1}, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 99);
defineClass(722, 1, {32:1});
_.equals$ = function equals_22(other){
  var entry;
  if (!instanceOf(other, 32)) {
    return false;
  }
  entry = dynamicCast(other, 32);
  return equals_26(this.getKey(), entry.getKey()) && equals_26(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_24(){
  return hashCode_29(this.getKey()) ^ hashCode_29(this.getValue());
}
;
_.toString$ = function toString_38(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 722);
function $containsEntry_0(this$static, entry){
  var key_0, lookupEntry;
  key_0 = entry.getKey();
  lookupEntry = $getEntry_0(this$static, key_0);
  return !!lookupEntry && equals_26(lookupEntry.value_0, entry.getValue());
}

defineClass(724, 711, {58:1});
_.containsEntry = function containsEntry_0(entry){
  return $containsEntry_0(this, entry);
}
;
_.containsKey = function containsKey_1(k){
  return !!$getEntry_0(this, k);
}
;
_.entrySet = function entrySet_0(){
  return new AbstractNavigableMap$EntrySet(this);
}
;
_.get_1 = function get_4(k){
  return getEntryValueOrNull($getEntry_0(this, k));
}
;
var Ljava_util_AbstractNavigableMap_2_classLit = createForClass('java.util', 'AbstractNavigableMap', 724);
function AbstractNavigableMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(209, 713, $intern_56, AbstractNavigableMap$EntrySet);
_.contains_0 = function contains_5(o){
  return instanceOf(o, 32) && $containsEntry_0(this.this$01, dynamicCast(o, 32));
}
;
_.iterator = function iterator_10(){
  return new TreeMap$EntryIterator(this.this$01);
}
;
_.remove_1 = function remove_23(o){
  var entry;
  if (instanceOf(o, 32)) {
    entry = dynamicCast(o, 32);
    return $removeEntry(this.this$01, entry);
  }
  return false;
}
;
_.size_1 = function size_8(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractNavigableMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/EntrySet', 209);
function $iterator_0(this$static){
  var entryIterator;
  entryIterator = new TreeMap$EntryIterator((new TreeMap$EntrySet(this$static.map_0)).this$01);
  return new AbstractNavigableMap$NavigableKeySet$1(entryIterator);
}

function AbstractNavigableMap$NavigableKeySet(map_0){
  this.map_0 = map_0;
}

defineClass(512, 713, $intern_56, AbstractNavigableMap$NavigableKeySet);
_.contains_0 = function contains_6(o){
  return !!$getEntry_0(this.map_0, o);
}
;
_.iterator = function iterator_11(){
  return $iterator_0(this);
}
;
_.remove_1 = function remove_24(o){
  if ($getEntry_0(this.map_0, o)) {
    $remove_15(this.map_0, o);
    return true;
  }
  return false;
}
;
_.size_1 = function size_9(){
  return this.map_0.size_0;
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet', 512);
function AbstractNavigableMap$NavigableKeySet$1(val$entryIterator){
  this.val$entryIterator2 = val$entryIterator;
}

defineClass(513, 1, {}, AbstractNavigableMap$NavigableKeySet$1);
_.hasNext = function hasNext_7(){
  return this.val$entryIterator2.iter.hasNext();
}
;
_.next_0 = function next_8(){
  var entry;
  entry = $next_5(this.val$entryIterator2);
  return entry.getKey();
}
;
_.remove_0 = function remove_25(){
  $remove_16(this.val$entryIterator2);
}
;
var Ljava_util_AbstractNavigableMap$NavigableKeySet$1_2_classLit = createForClass('java.util', 'AbstractNavigableMap/NavigableKeySet/1', 513);
defineClass(723, 721, $intern_40);
_.add_1 = function add_13(index_0, element){
  var iter;
  iter = $listIterator(this, index_0);
  $addNode(iter.this$01, element, iter.currentNode.prev, iter.currentNode);
  ++iter.currentIndex;
  iter.lastNode = null;
}
;
_.get_0 = function get_5(index_0){
  var iter;
  iter = $listIterator(this, index_0);
  try {
    return checkCriticalElement(iter.currentNode != iter.this$01.tail) , iter.lastNode = iter.currentNode , iter.currentNode = iter.currentNode.next , ++iter.currentIndex , iter.lastNode.value_0;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 65)) {
      throw new IndexOutOfBoundsException_0("Can't get element " + index_0);
    }
     else
      throw unwrap($e0);
  }
}
;
_.iterator = function iterator_12(){
  return $listIterator(this, 0);
}
;
_.remove_2 = function remove_26(index_0){
  var iter, old;
  iter = $listIterator(this, index_0);
  try {
    old = (checkCriticalElement(iter.currentNode != iter.this$01.tail) , iter.lastNode = iter.currentNode , iter.currentNode = iter.currentNode.next , ++iter.currentIndex , iter.lastNode.value_0);
    $remove_14(iter);
    return old;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 65)) {
      throw new IndexOutOfBoundsException_0("Can't remove element " + index_0);
    }
     else
      throw unwrap($e0);
  }
}
;
_.set_0 = function set_2(index_0, element){
  var iter, old;
  iter = $listIterator(this, index_0);
  try {
    old = (checkCriticalElement(iter.currentNode != iter.this$01.tail) , iter.lastNode = iter.currentNode , iter.currentNode = iter.currentNode.next , ++iter.currentIndex , iter.lastNode.value_0);
    checkState(!!iter.lastNode);
    iter.lastNode.value_0 = element;
    return old;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 65)) {
      throw new IndexOutOfBoundsException_0("Can't set element " + index_0);
    }
     else
      throw unwrap($e0);
  }
}
;
var Ljava_util_AbstractSequentialList_2_classLit = createForClass('java.util', 'AbstractSequentialList', 723);
function hashCode_25(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function insertionSort(array, low, high, comp){
  var i, j, t;
  for (i = low + 1; i < high; ++i) {
    for (j = i; j > low && comp.compare(array[j - 1], array[j]) > 0; --j) {
      t = array[j];
      setCheck(array, j, array[j - 1]);
      setCheck(array, j - 1, t);
    }
  }
}

function merge(src_0, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx;
  topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(src_0[srcLow], src_0[topIdx]) <= 0?setCheck(dest, destLow++, src_0[srcLow++]):setCheck(dest, destLow++, src_0[topIdx++]);
  }
}

function mergeSort(x_0, fromIndex, toIndex, comp){
  var temp, newLength, length_0, copy;
  !comp && (comp = ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
  temp = (newLength = (length_0 = toIndex - fromIndex , checkCriticalArgument_0(length_0 >= 0, initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_2, 1, 3, [valueOf_1(fromIndex), valueOf_1(toIndex)])) , length_0) , copy = createFrom(x_0, newLength) , arraycopy(x_0, fromIndex, copy, 0, min_0(x_0.length - fromIndex, newLength)) , copy);
  mergeSort_0(temp, x_0, fromIndex, toIndex, -fromIndex, comp);
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid;
  length_0 = high - low;
  if (length_0 < 7) {
    insertionSort(array, low, high, comp);
    return;
  }
  tempLow = low + ofs;
  tempHigh = high + ofs;
  tempMid = tempLow + (tempHigh - tempLow >> 1);
  mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(temp[tempMid - 1], temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, low++, temp[tempLow++]);
    }
    return;
  }
  merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
}

function Arrays$ArrayList(array){
  this.array = array;
}

defineClass(478, 721, $intern_41, Arrays$ArrayList);
_.contains_0 = function contains_7(o){
  return $indexOf(this, o) != -1;
}
;
_.get_0 = function get_6(index_0){
  return checkElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.set_0 = function set_3(index_0, value_0){
  var was;
  was = (checkElementIndex(index_0, this.array.length) , this.array[index_0]);
  setCheck(this.array, index_0, value_0);
  return was;
}
;
_.size_1 = function size_10(){
  return this.array.length;
}
;
_.toArray = function toArray_3(){
  return clone(this.array);
}
;
_.toArray_0 = function toArray_4(out){
  var i, size_0;
  size_0 = this.array.length;
  out.length < size_0 && (out = createFrom(out, size_0));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 478);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
  EMPTY_MAP = new Collections$EmptyMap;
  EMPTY_SET = new Collections$EmptySet;
}

function hashCode_26(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_27(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function replaceContents(target, x_0){
  var i, size_0;
  size_0 = target.size_1();
  for (i = 0; i < size_0; i++) {
    target.set_0(i, x_0[i]);
  }
}

function sort_0(target, c){
  $clinit_Collections();
  var x_0;
  x_0 = target.toArray();
  mergeSort(x_0, 0, x_0.length, c);
  replaceContents(target, x_0);
}

var EMPTY_LIST, EMPTY_MAP, EMPTY_SET;
function Collections$EmptyList(){
}

defineClass(338, 721, $intern_41, Collections$EmptyList);
_.contains_0 = function contains_8(object){
  return false;
}
;
_.get_0 = function get_7(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_13(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_11(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 338);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(339, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_8(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_9(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
_.remove_0 = function remove_27(){
  throw new IllegalStateException;
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 339);
function Collections$EmptyMap(){
}

defineClass(341, 711, $intern_57, Collections$EmptyMap);
_.containsKey = function containsKey_2(key_0){
  return false;
}
;
_.containsValue = function containsValue_1(value_0){
  return false;
}
;
_.entrySet = function entrySet_1(){
  return $clinit_Collections() , EMPTY_SET;
}
;
_.get_1 = function get_8(key_0){
  return null;
}
;
_.size_1 = function size_12(){
  return 0;
}
;
_.values = function values_16(){
  return $clinit_Collections() , EMPTY_LIST;
}
;
var Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 341);
function Collections$EmptySet(){
}

defineClass(340, 713, $intern_58, Collections$EmptySet);
_.contains_0 = function contains_9(object){
  return false;
}
;
_.iterator = function iterator_14(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_13(){
  return 0;
}
;
var Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 340);
function Collections$SingletonList(element){
  this.element = element;
}

defineClass(342, 721, $intern_41, Collections$SingletonList);
_.contains_0 = function contains_10(item_0){
  return equals_26(this.element, item_0);
}
;
_.get_0 = function get_9(index_0){
  checkElementIndex(index_0, 1);
  return this.element;
}
;
_.size_1 = function size_14(){
  return 1;
}
;
var Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 342);
function $clinit_Comparators(){
  $clinit_Comparators = emptyMethod;
  NATURAL = new Comparators$1;
}

var NATURAL;
function Comparators$1(){
}

defineClass(515, 1, $intern_48, Comparators$1);
_.compare = function compare_9(o1, o2){
  checkNotNull(o1);
  checkNotNull(o2);
  return compareTo_Ljava_lang_Object__I__devirtual$(dynamicCast(o1, 8), o2);
}
;
var Ljava_util_Comparators$1_2_classLit = createForClass('java.util', 'Comparators/1', 515);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(500, 33, $intern_4, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 500);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_2, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function HashMap(){
  AbstractHashMap.call(this);
}

defineClass(38, 158, $intern_57, HashMap);
_.equals = function equals_23(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}
;
_.getHashCode = function getHashCode_1(key_0){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key_0);
  return ~~hashCode;
}
;
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 38);
function $add_12(this$static, o){
  var old;
  old = this$static.map_0.put(o, this$static);
  return old == null;
}

function $contains_1(this$static, o){
  return this$static.map_0.containsKey(o);
}

function $remove_9(this$static, o){
  return this$static.map_0.remove_3(o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

function HashSet_0(map_0){
  this.map_0 = map_0;
}

defineClass(103, 713, $intern_58, HashSet);
_.add_0 = function add_14(o){
  return $add_12(this, o);
}
;
_.contains_0 = function contains_11(o){
  return $contains_1(this, o);
}
;
_.isEmpty = function isEmpty_2(){
  return this.map_0.size_1() == 0;
}
;
_.iterator = function iterator_15(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove_1 = function remove_28(o){
  return $remove_9(this, o);
}
;
_.size_1 = function size_15(){
  return this.map_0.size_1();
}
;
_.toString$ = function toString_39(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 103);
function IdentityHashMap(){
  AbstractHashMap.call(this);
}

defineClass(203, 158, $intern_57, IdentityHashMap);
_.equals$ = function equals_24(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 58)) {
    return false;
  }
  otherMap = dynamicCast(obj, 58);
  if (this.size_0 != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 32);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(isJavaString(otherKey)?$hasStringValue(this, otherKey):!!$getEntry(this.hashCodeMap, otherKey))) {
      return false;
    }
    if (maskUndefined(otherValue) !== maskUndefined(isJavaString(otherKey)?$getStringValue(this, otherKey):getEntryValueOrNull($getEntry(this.hashCodeMap, otherKey)))) {
      return false;
    }
  }
  return true;
}
;
_.equals = function equals_25(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2);
}
;
_.getHashCode = function getHashCode_2(key_0){
  return getHashCode(key_0);
}
;
_.hashCode$ = function hashCode_28(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next_0(), 32));
    hashCode += identityHashCode(entry.getKey());
    hashCode += identityHashCode(entry.getValue());
  }
  return hashCode;
}
;
var Ljava_util_IdentityHashMap_2_classLit = createForClass('java.util', 'IdentityHashMap', 203);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key_0){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key_0 == null?'0':'' + this$static.host.getHashCode(key_0)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this$static.host.equals(key_0, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key_0, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key_0 == null?'0':'' + this$static.host.getHashCode(key_0));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (this$static.host.equals(key_0, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key_0, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_10(this$static, key_0){
  var chain, entry, hashCode, i;
  hashCode = key_0 == null?'0':'' + this$static.host.getHashCode(key_0);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this$static.host.equals(key_0, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(199, 1, {}, InternalJsHashCodeMap);
_.containsValue = function containsValue_2(value_0){
  var entry, entry$array, entry$index, entry$max, hashCode, hashCode$array, hashCode$index, hashCode$max;
  for (hashCode$array = $keys(this) , hashCode$index = 0 , hashCode$max = hashCode$array.length; hashCode$index < hashCode$max; ++hashCode$index) {
    hashCode = hashCode$array[hashCode$index];
    for (entry$array = this.backingMap[hashCode] , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
      entry = entry$array[entry$index];
      if (this.host.equals(value_0, entry.getValue())) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries_0 = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 199);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_2, 32, 0, 0, 1);
}

defineClass(401, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_9(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_10(){
  return checkCriticalElement($hasNext_0(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_0 = function remove_29(){
  checkState(!!this.lastEntry);
  $remove_10(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 401);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(399, 199, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.containsValue = function containsValue_3(value_0){
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        var entry = array[i];
        var entryValue = entry.getValue();
        if (this.equalsBridge(value_0, entryValue)) {
          return true;
        }
      }
    }
  }
  return false;
}
;
_.createMap = function createMap_0(){
  return {};
}
;
_.entries_0 = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_0(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.equalsBridge = function equalsBridge(value1, value2){
  return this.host.equals(value1, value2);
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 399);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(400, 28, $intern_41, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_2 = function remove_30(index_0){
  var removed;
  return removed = dynamicCast($remove_4(this, index_0), 32) , $remove_10(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 400);
function InternalJsMapFactory(){
}

defineClass(396, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 396);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(398, 396, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 398);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(397, 396, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 397);
function $containsValue(this$static, value_0){
  var map_0 = this$static.backingMap;
  for (var key_0 in map_0) {
    if (this$static.equalsBridge_0(value_0, map_0[key_0])) {
      return true;
    }
  }
  return false;
}

function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key_0, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key_0];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_2(this$static, key_0, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_11(this$static, key_0){
  var value_0;
  value_0 = this$static.backingMap[key_0];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key_0];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_2(this$static, key_0, value_0){
  this$static.backingMap[key_0] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(163, 1, {}, InternalJsStringMap);
_.containsValue = function containsValue_4(value_0){
  return $containsValue(this, value_0);
}
;
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries_0 = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.equalsBridge_0 = function equalsBridge_0(value1, value2){
  return this.host.equals(value1, value2);
}
;
_.get_2 = function get_10(key_0){
  return this.backingMap[key_0];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key_0){
  return new InternalJsStringMap$2(this, key_0);
}
;
_.put_0 = function put_1(key_0, value_0){
  return $put_2(this, key_0, value_0);
}
;
_.remove_4 = function remove_31(key_0){
  return $remove_11(this, key_0);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 163);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(346, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_10(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_11(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_0 = function remove_32(){
  checkState(this.last != -1);
  this.this$01.remove_4(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 346);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(198, 722, {32:1}, InternalJsStringMap$2);
_.getKey = function getKey_0(){
  return this.val$key2;
}
;
_.getValue = function getValue_2(){
  return this.this$01.get_2(this.val$key2);
}
;
_.setValue = function setValue_0(object){
  return this.this$01.put_0(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 198);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(343, 163, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.containsValue = function containsValue_5(value_0){
  var map_0 = this.backingMap;
  for (var key_0 in map_0) {
    if (key_0.charCodeAt(0) == 58) {
      var entryValue = map_0[key_0];
      if (this.equalsBridge_0(value_0, entryValue)) {
        return true;
      }
    }
  }
  return false;
}
;
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries_0 = function entries_2(){
  var list = this.newEntryList_0();
  for (var key_0 in this.backingMap) {
    if (key_0.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key_0.substring(1));
      list.add_0(entry);
    }
  }
  return list.iterator();
}
;
_.get_2 = function get_11(key_0){
  return this.backingMap[':' + key_0];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put_0 = function put_2(key_0, value_0){
  return $put_2(this, ':' + key_0, value_0);
}
;
_.remove_4 = function remove_33(key_0){
  return $remove_11(this, ':' + key_0);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 343);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(345, 28, $intern_41, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_2 = function remove_34(index_0){
  var removed;
  return removed = dynamicCast($remove_4(this, index_0), 32) , $remove_11(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 345);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(344, 163, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.containsValue = function containsValue_6(value_0){
  var protoValue;
  protoValue = this.backingMap['__proto__'];
  if (!(protoValue === undefined) && this.host.equals(value_0, protoValue)) {
    return true;
  }
  return $containsValue(this, value_0);
}
;
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 344);
function $$init_5(this$static){
  this$static.head = new LinkedHashMap$ChainEntry(this$static);
  this$static.map_0 = new HashMap;
}

function $recordAccess(this$static, entry){
  if (this$static.accessOrder) {
    $remove_13(entry);
    $addToEnd(entry);
  }
}

function $remove_12(this$static, key_0){
  var entry;
  entry = dynamicCast(this$static.map_0.remove_3(key_0), 109);
  if (entry) {
    $remove_13(entry);
    return entry.value_0;
  }
  return null;
}

function LinkedHashMap(){
  HashMap.call(this);
  $$init_5(this);
  this.head.prev = this.head;
  this.head.next = this.head;
}

function LinkedHashMap_0(accessOrder){
  checkCriticalArgument(true, 'Negative initial capacity');
  checkCriticalArgument(true, 'Non-positive load factor');
  $reset(this);
  $$init_5(this);
  this.accessOrder = accessOrder;
  this.head.prev = this.head;
  this.head.next = this.head;
}

defineClass(204, 38, $intern_57, LinkedHashMap, LinkedHashMap_0);
_.clear_0 = function clear_5(){
  this.map_0.clear_0();
  this.head.prev = this.head;
  this.head.next = this.head;
}
;
_.containsKey = function containsKey_3(key_0){
  return this.map_0.containsKey(key_0);
}
;
_.containsValue = function containsValue_7(value_0){
  var node;
  node = this.head.next;
  while (node != this.head) {
    if (equals_26(node.value_0, value_0)) {
      return true;
    }
    node = node.next;
  }
  return false;
}
;
_.entrySet = function entrySet_2(){
  return new LinkedHashMap$EntrySet(this);
}
;
_.get_1 = function get_12(key_0){
  var entry;
  entry = dynamicCast(this.map_0.get_1(key_0), 109);
  if (entry) {
    $recordAccess(this, entry);
    return entry.value_0;
  }
  return null;
}
;
_.put = function put_3(key_0, value_0){
  var newEntry, old, oldValue;
  old = dynamicCast(this.map_0.get_1(key_0), 109);
  if (!old) {
    newEntry = new LinkedHashMap$ChainEntry_0(this, key_0, value_0);
    this.map_0.put(key_0, newEntry);
    $addToEnd(newEntry);
    return null;
  }
   else {
    oldValue = $setValue_2(old, value_0);
    $recordAccess(this, old);
    return oldValue;
  }
}
;
_.remove_3 = function remove_35(key_0){
  return $remove_12(this, key_0);
}
;
_.size_1 = function size_16(){
  return this.map_0.size_1();
}
;
_.accessOrder = false;
var Ljava_util_LinkedHashMap_2_classLit = createForClass('java.util', 'LinkedHashMap', 204);
function $addToEnd(this$static){
  var tail;
  tail = this$static.this$01.head.prev;
  this$static.prev = tail;
  this$static.next = this$static.this$01.head;
  tail.next = this$static.this$01.head.prev = this$static;
}

function $remove_13(this$static){
  this$static.next.prev = this$static.prev;
  this$static.prev.next = this$static.next;
  this$static.next = this$static.prev = null;
}

function LinkedHashMap$ChainEntry(this$0){
  LinkedHashMap$ChainEntry_0.call(this, this$0, null, null);
}

function LinkedHashMap$ChainEntry_0(this$0, key_0, value_0){
  this.this$01 = this$0;
  AbstractMap$SimpleEntry.call(this, key_0, value_0);
}

defineClass(109, 99, {132:1, 99:1, 109:1, 32:1}, LinkedHashMap$ChainEntry, LinkedHashMap$ChainEntry_0);
var Ljava_util_LinkedHashMap$ChainEntry_2_classLit = createForClass('java.util', 'LinkedHashMap/ChainEntry', 109);
function $contains_2(this$static, o){
  if (instanceOf(o, 32)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 32));
  }
  return false;
}

function LinkedHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(506, 713, $intern_56, LinkedHashMap$EntrySet);
_.contains_0 = function contains_12(o){
  return $contains_2(this, o);
}
;
_.iterator = function iterator_16(){
  return new LinkedHashMap$EntrySet$EntryIterator(this);
}
;
_.remove_1 = function remove_36(entry){
  var key_0;
  if ($contains_2(this, entry)) {
    key_0 = dynamicCast(entry, 32).getKey();
    $remove_12(this.this$01, key_0);
    return true;
  }
  return false;
}
;
_.size_1 = function size_17(){
  return this.this$01.map_0.size_1();
}
;
var Ljava_util_LinkedHashMap$EntrySet_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet', 506);
function LinkedHashMap$EntrySet$EntryIterator(this$1){
  this.this$11 = this$1;
  this.next = this$1.this$01.head.next;
  recordLastKnownStructure(this$1.this$01.map_0, this);
}

defineClass(507, 1, {}, LinkedHashMap$EntrySet$EntryIterator);
_.hasNext = function hasNext_11(){
  return this.next != this.this$11.this$01.head;
}
;
_.next_0 = function next_12(){
  return checkStructuralChange(this.this$11.this$01.map_0, this) , checkCriticalElement(this.next != this.this$11.this$01.head) , this.last = this.next , this.next = this.next.next , this.last;
}
;
_.remove_0 = function remove_37(){
  checkState(!!this.last);
  checkStructuralChange(this.this$11.this$01.map_0, this);
  $remove_13(this.last);
  this.this$11.this$01.map_0.remove_3(this.last.key);
  recordLastKnownStructure(this.this$11.this$01.map_0, this);
  this.last = null;
}
;
var Ljava_util_LinkedHashMap$EntrySet$EntryIterator_2_classLit = createForClass('java.util', 'LinkedHashMap/EntrySet/EntryIterator', 507);
function LinkedHashSet(){
  HashSet_0.call(this, new LinkedHashMap);
}

defineClass(479, 103, $intern_58, LinkedHashSet);
var Ljava_util_LinkedHashSet_2_classLit = createForClass('java.util', 'LinkedHashSet', 479);
function $addNode(this$static, o, prev, next){
  var node;
  node = new LinkedList$Node;
  node.value_0 = o;
  node.prev = prev;
  node.next = next;
  next.prev = prev.next = node;
  ++this$static.size_0;
}

function $listIterator(this$static, index_0){
  var i, node;
  checkPositionIndex(index_0, this$static.size_0);
  if (index_0 >= this$static.size_0 >> 1) {
    node = this$static.tail;
    for (i = this$static.size_0; i > index_0; --i) {
      node = node.prev;
    }
  }
   else {
    node = this$static.header.next;
    for (i = 0; i < index_0; ++i) {
      node = node.next;
    }
  }
  return new LinkedList$ListIteratorImpl(this$static, index_0, node);
}

function $removeNode(this$static, node){
  var oldValue;
  oldValue = node.value_0;
  node.next.prev = node.prev;
  node.prev.next = node.next;
  node.next = node.prev = null;
  node.value_0 = null;
  --this$static.size_0;
  return oldValue;
}

function LinkedList(){
  this.header = new LinkedList$Node;
  this.tail = new LinkedList$Node;
  this.header.next = this.tail;
  this.tail.prev = this.header;
  this.header.prev = this.tail.next = null;
  this.size_0 = 0;
}

defineClass(480, 723, $intern_41, LinkedList);
_.add_0 = function add_15(o){
  $addNode(this, o, this.tail.prev, this.tail);
  return true;
}
;
_.listIterator_0 = function listIterator_2(index_0){
  return $listIterator(this, index_0);
}
;
_.size_1 = function size_18(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_LinkedList_2_classLit = createForClass('java.util', 'LinkedList', 480);
function $remove_14(this$static){
  var nextNode;
  checkState(!!this$static.lastNode);
  nextNode = this$static.lastNode.next;
  $removeNode(this$static.this$01, this$static.lastNode);
  this$static.currentNode == this$static.lastNode?(this$static.currentNode = nextNode):--this$static.currentIndex;
  this$static.lastNode = null;
}

function LinkedList$ListIteratorImpl(this$0, index_0, startNode){
  this.this$01 = this$0;
  this.currentNode = startNode;
  this.currentIndex = index_0;
}

defineClass(508, 1, {}, LinkedList$ListIteratorImpl);
_.hasNext = function hasNext_12(){
  return this.currentNode != this.this$01.tail;
}
;
_.hasPrevious = function hasPrevious_1(){
  return this.currentNode.prev != this.this$01.header;
}
;
_.next_0 = function next_13(){
  return checkCriticalElement(this.currentNode != this.this$01.tail) , this.lastNode = this.currentNode , this.currentNode = this.currentNode.next , ++this.currentIndex , this.lastNode.value_0;
}
;
_.previous = function previous_2(){
  checkCriticalElement(this.currentNode.prev != this.this$01.header);
  this.lastNode = this.currentNode = this.currentNode.prev;
  --this.currentIndex;
  return this.lastNode.value_0;
}
;
_.remove_0 = function remove_38(){
  $remove_14(this);
}
;
_.currentIndex = 0;
_.lastNode = null;
var Ljava_util_LinkedList$ListIteratorImpl_2_classLit = createForClass('java.util', 'LinkedList/ListIteratorImpl', 508);
function LinkedList$Node(){
}

defineClass(169, 1, {}, LinkedList$Node);
var Ljava_util_LinkedList$Node_2_classLit = createForClass('java.util', 'LinkedList/Node', 169);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

function NoSuchElementException_0(){
  RuntimeException_0.call(this, 'No more elements in the iterator');
}

defineClass(65, 33, {3:1, 22:1, 19:1, 65:1}, NoSuchElementException, NoSuchElementException_0);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 65);
function equals_26(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_29(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_13(this$static, o){
  return $add_5(this$static.arrayList, o);
}

function $elementAt(this$static, index_0){
  return checkArrayElementIndex(index_0, this$static.arrayList.array.length) , $get_0(this$static.arrayList, index_0);
}

function $firstElement(this$static){
  checkCriticalElement(this$static.arrayList.array.length != 0);
  return checkArrayElementIndex(0, this$static.arrayList.array.length) , $get_0(this$static.arrayList, 0);
}

function $get_3(this$static, index_0){
  checkArrayElementIndex(index_0, this$static.arrayList.array.length);
  return $get_0(this$static.arrayList, index_0);
}

function Vector(){
  this.arrayList = new ArrayList;
}

function Vector_0(c){
  this.arrayList = new ArrayList;
  $addAll_0(this.arrayList, c);
}

function checkArrayElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new ArrayIndexOutOfBoundsException;
  }
}

defineClass(34, 721, $intern_59, Vector, Vector_0);
_.add_1 = function add_16(index_0, o){
  checkArrayElementIndex(index_0, this.arrayList.array.length + 1);
  $add_4(this.arrayList, index_0, o);
}
;
_.add_0 = function add_17(o){
  return $add_13(this, o);
}
;
_.contains_0 = function contains_13(elem){
  return $indexOf_0(this.arrayList, elem, 0) != -1;
}
;
_.get_0 = function get_13(index_0){
  return $get_3(this, index_0);
}
;
_.isEmpty = function isEmpty_3(){
  return this.arrayList.array.length == 0;
}
;
_.iterator = function iterator_17(){
  return new AbstractList$IteratorImpl(this.arrayList);
}
;
_.remove_2 = function remove_39(index_0){
  return checkArrayElementIndex(index_0, this.arrayList.array.length) , this.arrayList.remove_2(index_0);
}
;
_.set_0 = function set_4(index_0, elem){
  checkArrayElementIndex(index_0, this.arrayList.array.length);
  return $set_1(this.arrayList, index_0, elem);
}
;
_.size_1 = function size_19(){
  return this.arrayList.array.length;
}
;
_.toArray = function toArray_5(){
  return $toArray_0(this.arrayList);
}
;
_.toArray_0 = function toArray_6(a){
  return $toArray_1(this.arrayList, a);
}
;
_.toString$ = function toString_40(){
  return $toString_0(this.arrayList);
}
;
var Ljava_util_Vector_2_classLit = createForClass('java.util', 'Vector', 34);
function Stack(){
  Vector.call(this);
}

defineClass(481, 34, $intern_59, Stack);
var Ljava_util_Stack_2_classLit = createForClass('java.util', 'Stack', 481);
function $comparator(this$static){
  if (this$static.cmp == ($clinit_Comparators() , $clinit_Comparators() , NATURAL)) {
    return null;
  }
  return this$static.cmp;
}

function $getEntry_0(this$static, key_0){
  var c, childNum, tree;
  tree = this$static.root;
  while (tree) {
    c = this$static.cmp.compare(key_0, tree.key);
    if (c == 0) {
      return tree;
    }
    childNum = c < 0?0:1;
    tree = tree.child[childNum];
  }
  return null;
}

function $inOrderAdd(this$static, list, type_0, current, fromKey, fromInclusive, toKey, toInclusive){
  var leftNode, rightNode;
  if (!current) {
    return;
  }
  leftNode = current.child[0];
  !!leftNode && $inOrderAdd(this$static, list, type_0, leftNode, fromKey, fromInclusive, toKey, toInclusive);
  $inRange(this$static, type_0, current.key, fromKey, fromInclusive, toKey, toInclusive) && list.add_0(current);
  rightNode = current.child[1];
  !!rightNode && $inOrderAdd(this$static, list, type_0, rightNode, fromKey, fromInclusive, toKey, toInclusive);
}

function $inRange(this$static, type_0, key_0, fromKey, fromInclusive, toKey, toInclusive){
  var compare, compare_0;
  if (type_0.fromKeyValid() && (compare = this$static.cmp.compare(key_0, fromKey) , compare < 0 || !fromInclusive && compare == 0)) {
    return false;
  }
  if (type_0.toKeyValid() && (compare_0 = this$static.cmp.compare(key_0, toKey) , compare_0 > 0 || !toInclusive && compare_0 == 0)) {
    return false;
  }
  return true;
}

function $insert_5(this$static, tree, newNode, state){
  var c, childNum;
  if (!tree) {
    return newNode;
  }
   else {
    c = this$static.cmp.compare(newNode.key, tree.key);
    if (c == 0) {
      state.value_0 = $setValue_2(tree, newNode.value_0);
      state.found = true;
      return tree;
    }
    childNum = c < 0?0:1;
    tree.child[childNum] = $insert_5(this$static, tree.child[childNum], newNode, state);
    if ($isRed(tree.child[childNum])) {
      if ($isRed(tree.child[1 - childNum])) {
        tree.isRed = true;
        tree.child[0].isRed = false;
        tree.child[1].isRed = false;
      }
       else {
        $isRed(tree.child[childNum].child[childNum])?(tree = $rotateSingle(tree, 1 - childNum)):$isRed(tree.child[childNum].child[1 - childNum]) && (tree = $rotateDouble(tree, 1 - childNum));
      }
    }
  }
  return tree;
}

function $isRed(node){
  return !!node && node.isRed;
}

function $put_3(this$static, key_0, value_0){
  var node, state;
  node = new TreeMap$Node(key_0, value_0);
  state = new TreeMap$State;
  this$static.root = $insert_5(this$static, this$static.root, node, state);
  state.found || ++this$static.size_0;
  this$static.root.isRed = false;
  return state.value_0;
}

function $remove_15(this$static, k){
  var state;
  state = new TreeMap$State;
  $removeWithState(this$static, k, state);
  return state.value_0;
}

function $removeEntry(this$static, entry){
  var state;
  state = new TreeMap$State;
  state.matchValue = true;
  state.value_0 = entry.getValue();
  return $removeWithState(this$static, entry.getKey(), state);
}

function $removeWithState(this$static, key_0, state){
  var c, dir_0, dir2, found, grandparent, head, last, newNode, node, parent_0, sibling;
  if (!this$static.root) {
    return false;
  }
  found = null;
  parent_0 = null;
  head = new TreeMap$Node(null, null);
  dir_0 = 1;
  head.child[1] = this$static.root;
  node = head;
  while (node.child[dir_0]) {
    last = dir_0;
    grandparent = parent_0;
    parent_0 = node;
    node = node.child[dir_0];
    c = this$static.cmp.compare(key_0, node.key);
    dir_0 = c < 0?0:1;
    c == 0 && (!state.matchValue || equals_26(node.value_0, state.value_0)) && (found = node);
    if (!(!!node && node.isRed) && !$isRed(node.child[dir_0])) {
      if ($isRed(node.child[1 - dir_0])) {
        parent_0 = parent_0.child[last] = $rotateSingle(node, dir_0);
      }
       else if (!$isRed(node.child[1 - dir_0])) {
        sibling = parent_0.child[1 - last];
        if (sibling) {
          if (!$isRed(sibling.child[1 - last]) && !$isRed(sibling.child[last])) {
            parent_0.isRed = false;
            sibling.isRed = true;
            node.isRed = true;
          }
           else {
            dir2 = grandparent.child[1] == parent_0?1:0;
            $isRed(sibling.child[last])?(grandparent.child[dir2] = $rotateDouble(parent_0, last)):$isRed(sibling.child[1 - last]) && (grandparent.child[dir2] = $rotateSingle(parent_0, last));
            node.isRed = grandparent.child[dir2].isRed = true;
            grandparent.child[dir2].child[0].isRed = false;
            grandparent.child[dir2].child[1].isRed = false;
          }
        }
      }
    }
  }
  if (found) {
    state.found = true;
    state.value_0 = found.value_0;
    if (node != found) {
      newNode = new TreeMap$Node(node.key, node.value_0);
      $replaceNode_0(this$static, head, found, newNode);
      parent_0 == found && (parent_0 = newNode);
    }
    parent_0.child[parent_0.child[1] == node?1:0] = node.child[!node.child[0]?1:0];
    --this$static.size_0;
  }
  this$static.root = head.child[1];
  !!this$static.root && (this$static.root.isRed = false);
  return state.found;
}

function $replaceNode_0(this$static, head, node, newNode){
  var direction, parent_0;
  parent_0 = head;
  direction = parent_0.key == null || this$static.cmp.compare(node.key, parent_0.key) > 0?1:0;
  while (parent_0.child[direction] != node) {
    parent_0 = parent_0.child[direction];
    direction = this$static.cmp.compare(node.key, parent_0.key) > 0?1:0;
  }
  parent_0.child[direction] = newNode;
  newNode.isRed = node.isRed;
  newNode.child[0] = node.child[0];
  newNode.child[1] = node.child[1];
  node.child[0] = null;
  node.child[1] = null;
}

function $rotateDouble(tree, rotateDirection){
  var otherChildDir;
  otherChildDir = 1 - rotateDirection;
  tree.child[otherChildDir] = $rotateSingle(tree.child[otherChildDir], otherChildDir);
  return $rotateSingle(tree, rotateDirection);
}

function $rotateSingle(tree, rotateDirection){
  var otherChildDir, save;
  otherChildDir = 1 - rotateDirection;
  save = tree.child[otherChildDir];
  tree.child[otherChildDir] = save.child[rotateDirection];
  save.child[rotateDirection] = tree;
  tree.isRed = true;
  save.isRed = false;
  return save;
}

function TreeMap(c){
  this.root = null;
  !c && (c = ($clinit_Comparators() , $clinit_Comparators() , NATURAL));
  this.cmp = c;
}

defineClass(205, 724, $intern_57, TreeMap);
_.entrySet = function entrySet_3(){
  return new TreeMap$EntrySet(this);
}
;
_.put = function put_4(key_0, value_0){
  return $put_3(this, key_0, value_0);
}
;
_.remove_3 = function remove_40(k){
  return $remove_15(this, k);
}
;
_.size_1 = function size_20(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_TreeMap_2_classLit = createForClass('java.util', 'TreeMap', 205);
function $next_5(this$static){
  return this$static.last = dynamicCast(this$static.iter.next_0(), 32);
}

function $remove_16(this$static){
  this$static.iter.remove_0();
  $removeEntry(this$static.this$01, this$static.last);
  this$static.last = null;
}

function TreeMap$EntryIterator(this$0){
  TreeMap$EntryIterator_0.call(this, this$0, ($clinit_TreeMap$SubMapType() , All));
}

function TreeMap$EntryIterator_0(this$0, type_0){
  var list;
  this.this$01 = this$0;
  list = new ArrayList;
  $inOrderAdd(this$0, list, type_0, this$0.root, null, false, null, false);
  this.iter = new AbstractList$ListIteratorImpl(list, 0);
}

defineClass(170, 1, {}, TreeMap$EntryIterator);
_.hasNext = function hasNext_13(){
  return this.iter.hasNext();
}
;
_.next_0 = function next_14(){
  return $next_5(this);
}
;
_.remove_0 = function remove_41(){
  $remove_16(this);
}
;
var Ljava_util_TreeMap$EntryIterator_2_classLit = createForClass('java.util', 'TreeMap/EntryIterator', 170);
function TreeMap$EntrySet(this$0){
  AbstractNavigableMap$EntrySet.call(this, this$0);
}

defineClass(210, 209, $intern_56, TreeMap$EntrySet);
var Ljava_util_TreeMap$EntrySet_2_classLit = createForClass('java.util', 'TreeMap/EntrySet', 210);
function TreeMap$Node(key_0, value_0){
  AbstractMap$SimpleEntry.call(this, key_0, value_0);
  this.child = initDim(Ljava_util_TreeMap$Node_2_classLit, $intern_2, 125, 2, 0, 1);
  this.isRed = true;
}

defineClass(125, 99, {132:1, 99:1, 32:1, 125:1}, TreeMap$Node);
_.isRed = false;
var Ljava_util_TreeMap$Node_2_classLit = createForClass('java.util', 'TreeMap/Node', 125);
function TreeMap$State(){
}

defineClass(171, 1, {}, TreeMap$State);
_.toString$ = function toString_41(){
  return 'State: mv=' + this.matchValue + ' value=' + this.value_0 + ' done=' + this.done + ' found=' + this.found;
}
;
_.done = false;
_.found = false;
_.matchValue = false;
var Ljava_util_TreeMap$State_2_classLit = createForClass('java.util', 'TreeMap/State', 171);
function $clinit_TreeMap$SubMapType(){
  $clinit_TreeMap$SubMapType = emptyMethod;
  All = new TreeMap$SubMapType('All', 0);
  Head = new TreeMap$SubMapType$1;
  Range_0 = new TreeMap$SubMapType$2;
  Tail = new TreeMap$SubMapType$3;
}

function TreeMap$SubMapType(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_17(){
  $clinit_TreeMap$SubMapType();
  return initValues(getClassLiteralForArray(Ljava_util_TreeMap$SubMapType_2_classLit, 1), $intern_2, 86, 0, [All, Head, Range_0, Tail]);
}

defineClass(86, 7, $intern_60, TreeMap$SubMapType);
_.fromKeyValid = function fromKeyValid(){
  return false;
}
;
_.toKeyValid = function toKeyValid(){
  return false;
}
;
var All, Head, Range_0, Tail;
var Ljava_util_TreeMap$SubMapType_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType', 86, Ljava_lang_Enum_2_classLit, values_17);
function TreeMap$SubMapType$1(){
  TreeMap$SubMapType.call(this, 'Head', 1);
}

defineClass(509, 86, $intern_60, TreeMap$SubMapType$1);
_.toKeyValid = function toKeyValid_0(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$1_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/1', 509, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$2(){
  TreeMap$SubMapType.call(this, 'Range', 2);
}

defineClass(510, 86, $intern_60, TreeMap$SubMapType$2);
_.fromKeyValid = function fromKeyValid_0(){
  return true;
}
;
_.toKeyValid = function toKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$2_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/2', 510, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeMap$SubMapType$3(){
  TreeMap$SubMapType.call(this, 'Tail', 3);
}

defineClass(511, 86, $intern_60, TreeMap$SubMapType$3);
_.fromKeyValid = function fromKeyValid_1(){
  return true;
}
;
var Ljava_util_TreeMap$SubMapType$3_2_classLit = createForEnum('java.util', 'TreeMap/SubMapType/3', 511, Ljava_util_TreeMap$SubMapType_2_classLit, null);
function TreeSet(c){
  this.map_0 = new TreeMap(c);
}

defineClass(482, 713, $intern_58, TreeSet);
_.add_0 = function add_18(o){
  return $put_3(this.map_0, o, ($clinit_Boolean() , FALSE_1)) == null;
}
;
_.contains_0 = function contains_14(o){
  return !!$getEntry_0(this.map_0, o);
}
;
_.iterator = function iterator_18(){
  return $iterator_0(new AbstractNavigableMap$NavigableKeySet(this.map_0));
}
;
_.remove_1 = function remove_42(o){
  return $remove_15(this.map_0, o) != null;
}
;
_.size_1 = function size_21(){
  return this.map_0.size_0;
}
;
var Ljava_util_TreeSet_2_classLit = createForClass('java.util', 'TreeSet', 482);
function $compareTo_9(this$static, o){
  return compareTo_11(this$static.uuidValue, o.uuidValue);
}

function $equals_3(this$static, obj){
  var other;
  if (this$static === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (Ljava_util_UUID_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj)) {
    return false;
  }
  other = dynamicCast(obj, 107);
  if (this$static.uuidValue == null?other.uuidValue != null:!$equals_1(this$static.uuidValue, other.uuidValue)) {
    return false;
  }
  return true;
}

function UUID(){
}

function fromString(name_0){
  var newUUID;
  newUUID = new UUID;
  newUUID.uuidValue = name_0;
  return newUUID;
}

function generateUUIDString(){
  var chars = '0123456789ABCDEF'.split(''), uuid = [];
  var r;
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  uuid[14] = '4';
  for (var i = 0; i < 36; i++) {
    if (!uuid[i]) {
      r = 0 | Math.random() * 16;
      uuid[i] = chars[i == 19?r & 3 | 8:r];
    }
  }
  return uuid.join('');
}

defineClass(107, 1, {8:1, 107:1}, UUID);
_.compareTo = function compareTo_13(o){
  return $compareTo_9(this, dynamicCast(o, 107));
}
;
_.equals$ = function equals_27(obj){
  return $equals_3(this, obj);
}
;
_.hashCode$ = function hashCode_30(){
  return getHashCode_0(this.uuidValue);
}
;
_.toString$ = function toString_42(){
  return this.uuidValue;
}
;
var Ljava_util_UUID_2_classLit = createForClass('java.util', 'UUID', 107);
var I_classLit = createForPrimitive('int', 'I'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 699), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 701), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 704), J_classLit = createForPrimitive('long', 'J'), D_classLit = createForPrimitive('double', 'D'), C_classLit = createForPrimitive('char', 'C'), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry'), Lcom_google_gwt_user_client_rpc_XsrfToken_2_classLit = createForClass('com.google.gwt.user.client.rpc', 'XsrfToken', null), Lcom_tribab_tricount_common_client_model_OtherUserCreationEmail_2_classLit = createForClass('com.tribab.tricount.common.client.model', 'OtherUserCreationEmail', null), Lcom_tribab_tricount_common_client_model_IComment_2_classLit = createForInterface('com.tribab.tricount.common.client.model', 'IComment'), Lcom_tribab_tricount_common_client_model_IOtherUserCreationEmail_2_classLit = createForInterface('com.tribab.tricount.common.client.model', 'IOtherUserCreationEmail'), Lcom_tribab_tricount_common_client_model_ITransactionImpact_2_classLit = createForInterface('com.tribab.tricount.common.client.model', 'ITransactionImpact');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');

var toExport = function(tricountKey, onSuccess, onFailure) {
  TricountCommController$1.prototype.onSuccess = function (iResult) {
      onSuccess(iResult)
  }

  TricountCommController$1.prototype.onFailure = function (iResult) {
      onFailure(iResult)
  }
  const document = dom.window.document
  const meta = document.createElement('meta')
  meta.setAttribute('name', 'gwt:property')
  meta.setAttribute('id', 'tricount:key')
  meta.setAttribute('content', tricountKey)
  document.querySelector('head').appendChild(meta)
  gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
};

$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=com.tribab.tricount.Application-0.js

module.exports = toExport

