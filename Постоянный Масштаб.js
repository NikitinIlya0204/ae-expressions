//Применить к scale слоя, у которого должен быть постоянный масштаб:
//Если увеличивать элемент через привязку к Null, объект будет отдаляться
//но Scale останется постоянным
//-----------------------------------------------------------------------

s = [];
ps = parent.transform.scale.value;
for (i = 0; i < ps.length; i++){
s[i] = value[i]*100/ps[i];
}
s