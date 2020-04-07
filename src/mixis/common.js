import {deleteIndex,updata} from "@/methodType/ArrType"

const mixin ={
    data(){
        return{
          
            formLabelWidth:"100px",
        }
    },
    computed:{
      form(){
        var obj = {};
        if(this.query){
            var  arr  =  this.$store.getters[this.query.arrName].filter(obj=>obj.id===this.query.id);
            obj=arr.length ? arr[0] : {} ;
         }
        return  obj;
      }
    },
    methods:{
      hiddenFn(){
        this.$router.push("/")
      },
      resetForm(){
        this.form.date=this.dataTime(this.form.date);
        this.$store.dispatch(updata,{id:this.query.id,data:this.form,arrName:this.query.arrName})
        this.$notify({
               title: '成功',
               message: '修改成功',
               type: 'success'
            });
        this.$router.push("/")
      },
        handleEdit(index, row,arrName) {
           this.$router.push({path:"/dialog",query:{id:row.id,arrName}})
        },
        dataTime(data){
          var d = new Date(data); 
           return d.getFullYear()+"-"+((d.getMonth()+1)>10 ? (d.getMonth()+1) : "0"+(d.getMonth()+1))+"-"+((d.getDate())>10 ?  (d.getDate()) : "0"+ (d.getDate()));
        },
        handleDelete(index, row,arrName) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
              }).then(() => {   
                  this.$store.dispatch(deleteIndex,{id:row.id,arrName})
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });
              });

        }
      },
}

export default mixin;